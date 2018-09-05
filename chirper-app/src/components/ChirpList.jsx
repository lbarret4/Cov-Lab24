import React, { Component,Fragment } from 'react';
import Chirps from './Chirps';


class ChirpList extends Component {
    constructor(props){
        super(props);
    }





    render() {
        const items= this.props.items;
        
        const chirps = items.map((chirp,index) =>{
            return(
                <Chirps items={chirp} key={index}/>
            );
        });

        return (
            
            <Fragment>
                 <ul className="list-group list-group-flush">
                  {chirps}
                </ul> 
            
            </Fragment>

        );
    }
}

export default ChirpList;