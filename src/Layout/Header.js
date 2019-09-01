import React, {Component} from 'react';

export default class Hearder extends Component {

    render() {
        return(
             <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto ">
                 <div className="row">
                    <div className="col-md-4"> 
                        <img src="https://protectiondogsplus.com/wp-content/uploads/2018/11/DSC_6813-500x500.jpg" className="circle" width="75%" />
                    </div>
                    <div className="col-md-8"> 
                        <div className="card" style={{marginTop: '40px'}}>
                            <div className="card-body">
                                <h4>Teenapat Rattanawong</h4>
                                <div style={{fontSize:'20px', marginTop: '15px'}}>

                                    <div className="row">
                                        <div className="col-3">birthday</div>  <div className="col">July 15, 1998</div>
                                    </div>

                                    <div className="row">
                                        <div className="col-3">Age</div>  <div className="col">21</div>
                                    </div>

                                    <div className="row">
                                        <div className="col-3">GPA</div>  <div className="col">3.01</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}