import React, {Component} from 'react';
import Progress from '../Progress';


export default class Ability extends Component {
    
   
   // 80 >= bg-info, 65 >= bg-success, 50 >= bg-warning,  <= 50 bg-danger

        render(){
            return (
                <div className="card-deck mb-3">
                    <div className="card mb-4 shadow-sm ">
                        <div className="card-header bg-dark">
                            <h4 className="my-0 font-weight-normal bg-dark text-white">Ability</h4>
                        </div>
                        <div className="card-body">
                            {/* {this.state.language.map(obj => <Progress></Progress>)} */}
                        </div>
                    </div>  
                </div>
            )
        }
     
}