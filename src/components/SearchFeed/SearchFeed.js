import React, {Component} from 'react'
import RecommendationList from './RecommendationList';

class SearchFeed extends Component {

   constructor(props){
       super(props);
       this.displayLawyerRecommendations = this.displayLawyerRecommendations.bind(this);
       this.getInTouchClick = this.getInTouchClick.bind(this);
   }

    displayLawyerRecommendations(){
    
    return (
        <RecommendationList 
        lawRecommendations = {this.props.lawyerRecommendations}
        onGetInTouchClick={this.getInTouchClick}
        />
    )
   }

   getInTouchClick(recommendationObj) {
       this.props.onGetInTouchClick(recommendationObj)
   }

    render(){
        return (this.displayLawyerRecommendations())
    }


}


export default SearchFeed;


