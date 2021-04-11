import Context from './Context';
import React, {Component} from 'react';

class Provider extends Component {
    state = {
        broadcasters: [
            {name: 'alpha'},
            {name: 'bravo'},
            {name: 'charlie'},
        ],
        isBroadcaster: true,
        viewingRequests: true,
        requesters: [
            {name: 'alex'},
            {name: 'stanley'}
        ]
    };

    render() {
        return (
            <Context.Provider
                value={{
                    broadcasters: this.state.broadcasters,
                    isBroadcaster: this.state.broadcasters,
                    state:this.state,
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Provider