import React from 'react';
import Recommendation from './Recommendation';

class RecommendationList extends React.Component {
    
    constructor(props){
        super(props);

        this.displayLawyerRecommendations = this.displayLawyerRecommendations.bind(this);
        this.getInTouchClick = this.getInTouchClick.bind(this);
    }

    getInTouchClick(recommendationObj) {
        this.props.onGetInTouchClick(recommendationObj);
    }

    displayLawyerRecommendations(){
        const lawRecommendations = this.props.lawRecommendations;
        return (
            lawRecommendations.map((recommendation, index) => (
                <Recommendation
                key={index}
                {...recommendation}
                onGetInTouchClick={this.getInTouchClick} />
            ))
        )
       }

    render(){
        return (this.displayLawyerRecommendations())
    }
}

export default RecommendationList;