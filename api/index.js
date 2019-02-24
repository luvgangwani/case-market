import express from 'express';
import config from '../config';
import assert from 'assert';

let fs = require('fs');

let clientsData = require(config.clientsFile);
let lawyersData = require(config.lawyersFile);
let lawyersRatesData = require(config.lawyersRatesFile);
let specializationsData = require(config.specializationFile);
let organizationsData = require(config.organizationsFile);
let stopwordsData = require(config.stopwordsFile);


let router = express.Router();

// Client Data API's

router.get('/client', (request, response) => {
    response.send(clientsData);
});


router.get('/client/:clientId', (request, response) => {
    let clientId = request.params.clientId;

    response.send(clientsData[clientId]);
});

router.post(`/register/client`, (request, response) => {

    let clientObj = request.body.userObj;

    clientsData[clientObj.id] = clientObj;

    writeToFile(config.clientsFile, clientsData);

    response.send(clientObj);
});

// Lawyer Data API's

router.get('/lawyer', (request, response) => {
    
    // Adding organization name

    Object.keys(lawyersData).map((lawyerId) => {
        let lawyerObj = lawyersData[lawyerId]
        let organization_id = lawyerObj["organization_id"]

        lawyerObj["organization_name"] = organizationsData[organization_id].organization_name;
    });

    response.send(lawyersData);
});


router.get('/lawyer/:lawyerId', (request, response) => {
    let lawyerId = request.params.lawyerId;

    response.send(lawyersData[lawyerId]);
});

// Organization Data API's

router.get('/lawfirm', (request, response) => {
    response.send(organizationsData);
});


router.get('/lawfirm/:lawfirmId', (request, response) => {
    let lawFirmId = request.params.lawyerId;

    response.send(organizationsData[lawFirmId]);
});

// Login API

router.post("/login/:roleName", (request, response) => {

    let roleName = request.params.roleName;
    let email = request.body.email;
    let password = request.body.password;
    let loginFlag = false;

    let userObj = null;
    let returnData = null;
    
    switch(roleName) {
        case "client" :
            userObj = clientsData;
            break;
        case "lawyer":
            userObj = lawyersData;
            break;
    }

    let ids = Object.keys(userObj);

    ids.forEach(id => {

        if(loginFlag == false){
            if (userObj[id].email == email) {
                if (userObj[id].password == password) {
                    returnData = userObj[id];
                    loginFlag = true;
                }
                else {
                    returnData = {"error": "You have entered a wrong password!"}
                    loginFlag = false;
                }
            }
            else {
                returnData = {"error": "Username does not exist"}
                loginFlag = false;
            }
        }

    });

    response.send(returnData);
});


// Get Lawyer Recommendations

const removePunctuations = (query) => {

    return query.replace(/[.,\/?;':"{}!@#\$%\^&\*\(\)]/g," ");

}

const tokenize = (query) => {

    query = removePunctuations(query);

    return query.split(" ");

}

const removeBlankTokens = (queryTokens) => {
    queryTokens = queryTokens.filter((token) => (
        (token != null && token != '' && token != " ")
    ));

    return queryTokens;
}

const removeStopWords = (queryTokens) => {

    let stopwords = stopwordsData;

    stopwords = removeBlankTokens(stopwords);

    let filteredTokens = [];

    queryTokens.map((token) => {
        if (!stopwords.includes(token.toLowerCase())) {
            filteredTokens.push(token);
        }
    });

    return filteredTokens;
}

const getContextualTokens = (queryTokens) => {
    
    let specializations = specializationsData;

    let contextualTokens = [];

    queryTokens.map((token) => {
        specializations.map((specialization) => {
            if (specialization.indexOf(token) != -1){
                if (!contextualTokens.includes(token)){
                    contextualTokens.push(token);
                }
            }
        })
    });

    return contextualTokens;

}

const objExists = (obj, arr) => {

    let found = false;

    arr.map((item) => {
        if ((found == false) && (item.id == obj.id)) {
            found = true;
        }
    });
    return found;
}

const getLawyerRecommendations = (queryToken) => {

    let lawyers = lawyersData;

    let recommendedLawyers = [];

    // Adding organization name, address, description

    Object.keys(lawyers).map((lawyerId) => {
        let lawyerObj = lawyers[lawyerId]
        let organization_id = lawyerObj["organization_id"]

        lawyerObj["organization_name"] = organizationsData[organization_id].organization_name;
        lawyerObj["organization_address"] = organizationsData[organization_id].organization_address;

    });

    // Compare query tokens with lawyer specializations

    Object.keys(lawyers).map((lawyerId) => {
        let lawyerObj = lawyers[lawyerId];

        queryToken.map((token) => {
            lawyerObj.specialization.map((eachSp) => {
                if (eachSp.indexOf(token) != -1){
                    if (!objExists(lawyerObj, recommendedLawyers)){
                        recommendedLawyers.push(lawyerObj);
                    }
                }
            })
        })
        
    });

    // sorting array according to rates
    recommendedLawyers = recommendedLawyers.sort((a, b) => (
        (b.ratings - a.ratings)
    ));

    return recommendedLawyers;
}

router.post('/lawyer-recommendations', (request, response) => {

    let topic = request.body.topic;
    let location = request.body.location.toLowerCase();
    let query = request.body.query;

    let queryTokens = tokenize(query);
    
    queryTokens = removeBlankTokens(queryTokens);

    queryTokens = removeStopWords(queryTokens);

    queryTokens = getContextualTokens(queryTokens);

    let lawyerRecommendations = getLawyerRecommendations(queryTokens);

    response.send(lawyerRecommendations);

});


// write data to file

const writeToFile = (filePath, fileData) => {
    fs.writeFileSync(filePath, JSON.stringify(fileData), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    })
}

export default router;