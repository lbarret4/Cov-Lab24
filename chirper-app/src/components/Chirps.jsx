import React, { Component,Fragment } from 'react';
import ChirpList from './ChirpList';


class Chirps extends Component{

    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <Fragment>
              <li className="list-group-item ">{this.props.items}</li>
            
            </Fragment>
        );
    }


}

export default Chirps;