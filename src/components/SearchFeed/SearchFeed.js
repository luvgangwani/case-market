import React, {Component} from 'react'

class SearchFeed extends Component {

   constructor(props){
       super(props);
       this.displayLawyerRecommendations = this.displayLawyerRecommendations.bind(this);
       this.getInTouch = this.getInTouch.bind(this);
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
                               
                            </div>
                            <img className="feed-card-img" alt="Card image cap" src="/img/card-img.png"/>
                        </div>
                        <div className="col-md-8 card-content">
                            <div className="card-body float-left">
                            <h5 className="card-title feed-card-title">{`${recommendation.first_name} ${recommendation.last_name}`}</h5>
                                <p className="card-text feed-card-location"><small className="text-muted">{recommendation.contact_number}</small></p>
                                <p className="card-text feed-card-description">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text feed-card-description feed-card-org-title">{recommendation.organization_name}</p>
                                <button className="card-button float-right" type="button" onClick={this.getInTouch}>Get in Touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
                
        })
    )
   }

   getInTouch() {
       let recommendationObj = {
        "id": "e765a83f-c0f3-4bbb-be88-05bb97dab5c0",
		"first_name": "Somerset",
		"last_name": "Littler",
		"email": "slittler5@bizjournals.com",
		"password": "uBnORGQ",
		"gender": "Male",
		"contact_number": "+374-871-865-0271",
		"organization_id": "7a477b1a-9806-4895-b2a2-2d804f9b6e19",
		"specialization": [ "child", "property", "will" ],
        "ratings": 4.0,
        "organization_name": "Avamba",
        "organization_address": "59389 Paget Court, Clayton, VIC-3168"
       }
       this.props.onGetInTouchClick(recommendationObj)
   }

    render(){
        return (this.displayLawyerRecommendations())
    }


}


export default SearchFeed;


