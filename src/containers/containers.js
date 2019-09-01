import React, {Component} from 'react';


export default class Containers extends Component {

    render() {
        return(
            <div class="container">
                {this.props.children}

            </div>
        )
    }

}