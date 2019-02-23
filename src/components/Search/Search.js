import React, { Component } from 'react';

class Search extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let topic = this.refs.topic.value;
        let location = this.refs.location.value; 
        let query = this.refs.query.value;

        this.props.onCustomerQuerySearchClick(topic, location, query);
    }
    render(){
        return(
            <div className="search card">
                <div className="card-header">
                    <h3>WHY DO YOU NEED A LAWYER?</h3>
                </div>

                <div className="card-body">
                        <form>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>I need a lawyer htmlFor:</label>
                                <select ref="topic" className="custom-select" defaultValue="family">
                                        <option value="family">Family</option>
                                        <option value="property">Property</option>
                                        <option value="Wills & probate">Wills & probate</option>
                                        <option value="Personal injury">Personal injury</option>
                                        <option value="Employment">Employment</option>
                                        <option value="Leases">Leases</option>
                                        <option value="Criminal">Criminal</option>
                                        <option value="Tax">Tax</option>
                                        <option value="Insurance">Insurance</option>
                                        <option value="Commercial">Commercial</option>
                                        <option value="Consumer">Consumer</option>
                                        <option value="Banking & finance">Banking & finance</option>
                                        <option value="Commercial">Commercial</option>
                                </select>
                             </div>
                           
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Where are you located?</label>
                                <input ref="location" type="text" placeholder="Enter Location" name="location" className="form-control"/>
                            </div>
                            </div>
 
                            <div className="form-group">
                                <label htmlFor="inputAddress">A brief discription of the issue:</label>
                                <textarea
                                ref="query"
                                rows="5"
                                columns="3"
                                className="form-control"
                                placeholder="Enter a brief description of your query">
                                </textarea> 
                           </div>
                            <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Search</button>                                 
                        </form>
                    </div>
                    </div>



            
        );
    }
}


export default Search;