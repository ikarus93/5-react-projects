import React from 'react';
import RowContainer from './RowContainer.jsx';

class App extends React.Component {
  contructor(props) {
    this.state = {url: ''};
  }
  
  componentWillMount() {
    //Fetches location data of user, uses loading property to track loading process and render asynchronous interface dynamically
    this.setState({loading: true})
  fetch('https://freegeoip.net/json/').then(res => {
      return res.json();
    }).then(res => {
      this.setState({url: `https://crossorigin.me/https://api.darksky.net/forecast/c14f308e1154d496b42bb2aa36b44220/${res.latitude},${res.longitude}`, loading: false})
      
    })
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>
    }
    return (
      <div className="app">
       <RowContainer icons={this.props.icons} url={this.state.url}/>
      </div>
    );
  }
}

export default App;