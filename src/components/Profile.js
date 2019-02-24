import React,{Component} from 'react';

class Profile extends Component {

constructor(props) {
    super(props);          
}


render(){
    const recommendationObj = this.props.recommendationObj;
    const user = this.props.user;

    return(
        <div className="profile-component">
                    <p>Welcome, {`${user.first_name} ${user.last_name}`}</p>
                    <div className="card">
                        <div className="card-title">
                            {`${recommendationObj.first_name} ${recommendationObj.last_name}`}
                        </div>
                        <div className="card-body">
                            <p>Organization Name: {recommendationObj.organization_name}</p>
                            <p>Organization Address: {recommendationObj.organization_address}</p>
                            <p>Lawyer Rating: {recommendationObj.ratings}</p>
                            <p>Email: {recommendationObj.email}</p>
                            <p>Contact Number: {recommendationObj.contact_number}</p>
                        </div>
                        <div className="card-footer">
                        <textarea className="form-control" name="clientMessage" id="clientMessage" cols="30" rows="10" placeholder="Enter message"></textarea>
                        <button type="button" className="btn btn-default">Send Message</button>
                        </div>
                    </div>
        </div>
    );
   
}

}


export default Profile;