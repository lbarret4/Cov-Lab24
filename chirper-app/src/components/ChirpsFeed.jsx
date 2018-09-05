import React, { Component } from 'react';

class ChirpsFeed extends Component {




    render() {
        return (
            <div className="card mt-5" style={{ maxWidth: " 90vw" }} >
                <div className="card-header">
                    To get started, type a message and post a chirp.
                </div>
                <div className="input-group">
                    <textarea className="form-control" ></textarea>
                    <div className="input-group-append">
                    <button type="button" className=" btn btn-primary">Post</button>
                    </div>
                </div>

                {/* <div className="card-body text-center">
                    <a href="" className="btn btn-primary">Post</a>
                </div> */}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>




            </div>

        );
    }


}

export default ChirpsFeed;