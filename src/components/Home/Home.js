import React, {Component} from 'react';
import Search from '../Search/Search';
import Header from "../Header/Header";

class Home extends Component{

    render(){

        return(
            <div>
                <Header />
                    <div className="home-container">
                        <div className="row justify-content-center">
                            <div className="col-10 col-md-8 bg-white p-4 border-rounded" style={{ 'borderRadius':"10px" }}>
                                <h1>F.R.O.N.T.</h1>
                                <Search />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Home;