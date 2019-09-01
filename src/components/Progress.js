import React, {Component} from 'react';

export default class Progress extends Component {

    render() {
        return(
            
            <div>
                <label>C</label>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%</div>
                </div>
            </div>
 
        )
    }


}