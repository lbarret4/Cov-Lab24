import React, { Component } from 'react';
import Chirps from './Chirps'
import ChirpList from './ChirpList';



class ChirpsFeed extends Component {

    constructor(props){
        super(props);
        this.state= {
            chirpList:[],
            chirpPost:" ",
        }
        this.handlesNewChirp = this.handlesNewChirp.bind(this);
        this.handlesPost = this.handlesPost.bind(this);
    }

    componentDidMount(){
        this.setState({
                 chirpList:[
                'Cras justo odio',
                'Dapibus ac facilisis in',
                'Vestibulum at eros',
            ]
        })
    }

    handlesNewChirp(e){
        this.setState({
            chirpPost:e.target.value
        });

    }

    handlesPost(e){
        e.preventDefault();
        let oddList = this.state.chirpList;
        oddList.unshift(this.state.chirpPost);
        this.setState({
            chirpList:oddList,
            chirpPost:""
        })

    }

    render() {
        
        return (
            <div className="card mt-5" style={{ maxWidth: " 90vw" }} >
                <div className="card-header">
                    To get started, type a message and post a chirp.
                </div>
                <div className="input-group">
                    <textarea className="form-control"onChange={this.handlesNewChirp} value={this.state.chirpPost} / >
                        
                    <div className="input-group-append">
                    <button type="button" className=" btn btn-primary" onClick= {this.handlesPost} >Post</button>
                    </div>
                </div>
                <ChirpList items={this.state.chirpList} />



            </div>

        );
    }


}

export default ChirpsFeed;