import React, {Component} from 'react'

class SearchFeed extends Component {

   constructor(props){
       super(props);

       this.displayLawyerRecommendations = this.displayLawyerRecommendations.bind(this);
   }

   displayLawyerRecommendations(){
    const lawRecommendations = this.props.lawyerRecommendations;
    return (
        lawRecommendations.map((recommendation, index) =>{
            return( 
                <div key={index} className="card search-feed">
                    <div className="row feed-card-row">
                        <div className="col-md-4 card-image">
                            <div>
                                <img className="feed-card-rate-img" alt="rating-img" src="/img/star.png"/>
                                <span className="feed-card-rating">{recommendation.ratings}</span>
                                <div className="feed-card-org-name">{recommendation.organization_name}</div>
                            </div>
                            <img className="feed-card-img" alt="Card image cap" src="/img/card-img.png"/>
                        </div>
                        <div className="col-md-8 card-content">
                            <div className="card-body float-left">
                            <h5 className="card-title feed-card-title">{`${recommendation.first_name} ${recommendation.last_name}`}</h5>
                                <p className="card-text feed-card-location"><small className="text-muted">{recommendation.contact_number}</small></p>
                                <p className="card-text feed-card-description">{recommendation.description}</p>
                                <button className="card-button">Get in Touch</button>
                            </div>
                        </div>
                    </div>
                    
    
                </div>
            );
                
        })
    )
   }

    render(){
        return (this.displayLawyerRecommendations())
    }


}


export default SearchFeed;


