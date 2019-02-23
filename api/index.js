import express from 'express';
import config from '../config';
import assert from 'assert';

let clientsData = require(config.clientsFile);
let lawyersData = require(config.lawyersFile);
let lawyersRatesData = require(config.lawyersRatesFile);
let lawyersSpecializationsData = require(config.lawyersSpecializationFile);
let organizationsData = require(config.organizationsFile);


let router = express.Router();
// Client Data API's

router.get('/client', (request, response) => {
    response.send(clientsData);
});


router.get('/client/:clientId', (request, response) => {
    let clientId = request.params.clientId;

    response.send(clientsData[clientId]);
});

// Lawyer Data API's

router.get('/lawyer', (request, response) => {
    response.send(lawyersData);
});


router.get('/lawyer/:lawyerId', (request, response) => {
    let lawyerId = request.params.lawyerId;

    response.send(lawyersData[lawyerId]);
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
export default router;