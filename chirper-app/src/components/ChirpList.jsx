import React, { Component,Fragment } from 'react';


class ChirpList extends Component {
    constructor(props){
        super(props);
    }





    render() {
        const items= this.props.items;
        
        const chirps = items.map((chirp) =>{
            return(
                <li className="list-group-item ">{chirp}</li>
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