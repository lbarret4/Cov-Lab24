import React, { Component } from 'react';
import Chirps from './Chirps'



class ChirpsFeed extends Component {

    constructor(props){
        super(props);

    }



    render() {
        return (
            <div className="card mt-5" style={{ maxWidth: " 90vw" }} >
                <div className="card-header">
                    To get started, type a message and post a chirp.
                </div>

                <Chirps items={this.props.items} />



            </div>

        );
    }


}

export default ChirpsFeed;