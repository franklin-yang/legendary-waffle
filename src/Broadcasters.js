
// import React from 'react';
import logo from './David_Pakman_Show.jpg';
import add from './add.png';
import Context from './Context';
import React from 'react';
import requested from './requested.jpg';

function requestToJoin() {
    // 
    // alert(this.context.isBroadcaster)

}

class Broadcasters extends React.Component {
    componentDidMount() {
        setInterval(() => {
          this.setState({
            curTime : new Date()
          })
        }, 1000)
      }

    render() {return <Context.Consumer>{
        value => (
            // <h1>{context.broadcasters.map(b => b.name + " ")} </h1>
            <div>
                <div  style={{display:'flex', justify_content: 'space-between', padding: '10px 0'}}>
                {value.state.broadcasters.map(b =>
                    <img class='icon' src={b.pic} width={50} />
                )}
                {value.state.isBroadcaster
                    ? (value.state.requesters.length == 0? null : <p onClick={value.state.toggleViewRequests}>{value.state.requesters.length}</p>)
                    : (<img class='icon' src={value.state.joinRequested ? add : requested} width={30} onClick={value.state.toggleJoinRequested} />)}
                    </div>
                
                {value.state.viewingRequests
                    ? value.state.requesters.map(
                        r => 
                        <div>
                            <img class='icon' src={r.pic} height={50}></img>{r.name} {Math.floor((this.state.curTime - r.date)/60000)}m ago
                            <button onClick={value.state.dismissRequest(r.id)} >x</button>
                            <button onClick={value.state.grantRequest(r)}>Approve</button>
                        </div>
                    )
                    : null

                }
            </div>

        )}
    </Context.Consumer>;
    }
}
export default Broadcasters;