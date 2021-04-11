import logo from './David_Pakman_Show.jpg';
import alex from './alex.jpg';
import stanley from './stanley.jpg';
import b2 from './b2.tif';
// import logo from './David_Pakman_Show.jpg';
import b3 from './b3.tif';

import './App.css';
import React from 'react';
import Context from './Context';

// import Provider from './Provider';
import Broadcasters from './Broadcasters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleViewRequests = this.toggleViewRequests.bind(this)
    this.dismissRequest = this.dismissRequest.bind(this)
    this.toggleViewRequests = this.toggleViewRequests.bind(this)
    this.grantRequest = this.grantRequest.bind(this)
    this.state = {
        broadcasters: [
            {id: '123', name: 'alpha', pic: logo},
            {id: '124',name: 'bravo',pic: b2},
            {id: '125',name: 'charlie',pic: b3},
        ],
        isBroadcaster: false,
        viewingRequests: false,
        joinRequested: false,
        requesters: [
            {id: '126',name: 'alex',pic: alex, 'date':new Date(1618154267000)},
            {id: '127',name: 'stanley',pic: stanley, 'date':new Date(1618154267000)}
        ],
        toggleViewRequests: this.toggleViewRequests,
        dismissRequest: this.dismissRequest,
        grantRequest: this.grantRequest,
        toggleJoinRequested: this.toggleJoinRequested,
    };



  }



  dismissRequest = prjCode => e => {
    // mock for what would be backend POST request to update DB
    // which would then trigger a state update with new requester list
    this.setState( state => ({
        requesters: this.state.requesters.filter(item => item.id != prjCode)
    }));
  };

  grantRequest = prjCode => e => {
    // mock for what would be backend POST request to update DB
    // which would then trigger a state update with new requester and broadcast list
    var joined = this.state.broadcasters.concat(prjCode);
    this.setState( state => ({ 
        requesters: this.state.requesters.filter(item => item != prjCode),
        broadcasters:joined
    }));
  };

  toggleViewRequests = e => {
    console.log(e)
    this.setState( state => ({
      viewingRequests: !this.state.viewingRequests
    }));
  };


  toggleJoinRequested = () => {
    // mock for what would be backend POST request to update DB
    // which would then trigger a state update with new requester list
    this.setState( state => ({
      joinRequested: !this.state.joinRequested
    }));
  };

  render() { console.log(this.toggleViewRequests); return (
    <Context.Provider value={{state:this.state, tv:this.toggleViewRequests}}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Broadcasters/>
        <p>
          Comment stream
        </p>
      </header>
    </div></Context.Provider>
);}
  
}

export default App;
