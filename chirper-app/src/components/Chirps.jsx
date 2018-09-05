import React, { Component,Fragment } from 'react';
import ChirpList from './ChirpList';


class Chirps extends Component{

    constructor(props){
        super(props)
        // this.props.time=
        this.state={

        }
    }

    render(){
        return(
            <Fragment>
               <div className="input-group">
                    <textarea className="form-control"/ >
                        
                    <div className="input-group-append">
                    <button type="button" className=" btn btn-primary">Post</button>
                    </div>
                </div>
                <ChirpList items={this.props.items} />
            </Fragment>
        );
    }


}

export default Chirps;