import React from 'react';

class Recommendation extends React.Component {
    constructor(props) {
        super(props);
        this.getInTouch = this.getInTouch.bind(this)
    }

    getInTouch(e){
        e.preventDefault();

        let id = this.props.id;
        let first_name = this.props.first_name;
        let last_name = this.props.last_name;
        let email = this.props.email;
        let contact_number = this.props.contact_number;
        let organization_id = this.props.organization_id;
        let organization_name = this.props.organization_name;
        let organization_address = this.props.organization_address;
        let description = this.props.description;
        let specialization = this.props.specialization;
        let ratings = this.props.ratings;

        let recommendationObj = {
            id,
            first_name,
            last_name,
            email,
            contact_number,
            organization_id,
            organization_name,
            organization_address,
            description,
            specialization,
            ratings
        }

        this.props.onGetInTouchClick(recommendationObj)
    }

    render(){
        return (
            <div className="card search-feed">
                <div className="row feed-card-row">
                    <div className="col-md-4 card-image">
                        <div>
                            <img className="feed-card-rate-img" alt="rating-img" src="/img/star.png"/>
                            <span className="feed-card-rating">{this.props.ratings}</span>
                            <div className="feed-card-org-name">{this.props.organization_name}</div>
                        </div>
                        <img className="feed-card-img" alt="Card image cap" src="/img/card-img.png"/>
                    </div>
                    <div className="col-md-8 card-content">
                        <div className="card-body float-left">
                        <h5 className="card-title feed-card-title">{`${this.props.first_name} ${this.props.last_name}`}</h5>
                            <p className="card-text feed-card-location"><small className="text-muted">{this.props.contact_number}</small></p>
                            <p className="card-text feed-card-description">{this.props.description}</p>
                            <button className="card-button" type="button" onClick={this.getInTouch}>Get in Touch</button>
                        </div>
                    </div>
                </div>               
            </div>
        )
    }
}

export default Recommendation;