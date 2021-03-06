import React from 'react';
import Row from './Row.jsx';
import PropTypes from 'prop-types'; 

class RowContainer extends React.Component {
  //Parent component of Row, holds reference to days and fetches weather data
  constructor(props) {
    super(props);
    this.days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; //Array mapped to js date method, used to create dynamic date array
    this.props = { dayActive: this.days[new Date().getDay()] }; //holds the current day index
    this.state = { days: this.createDaySeq(), data: [] }; //holds the dynamic generated days array as well as an empty placeholder for our response data

    this.createDaySeq = this.createDaySeq.bind(this);
    this.parseIcons = this.parseIcons.bind(this);
  }
  
  static PropTypes = {
    dayActive : PropTypes.string.isRequired
  }
  
  parseIcons(icon) {
    //maps the responses icons/description to each icon in the icons object, retrieving the img url to be injected into Row compononent
    Object.keys(this.props.icons).forEach(x => {
      if (icon.indexOf(x) !== -1) {
        icon = x;
      }
    })
    return this.props.icons[icon]
  }
  
  componentWillMount() {
    //fetch weather data
    fetch(this.props.url)
      .then(res => {
        return res.json();
      })
      .then(resData => {
        //fill this.state.data array with parsed response data that is relevant
        let stateData = this.state.data;
        resData.daily.data.forEach(cast => {
          let forecastItem = {
            icon: this.parseIcons(cast.icon),
            temp: {
              fahr: cast.temperatureHigh.toFixed(0),
              cel: ((cast.temperatureHigh - 32) * 5 / 9).toFixed(0)
            }
          };
          stateData.push(forecastItem);
        });
        this.setState({ data: stateData });
      });
  }
  createDaySeq() {
    //creates a dynamic date array using the current day(this.state.dayActive) as starting indexpoint
    let seq = [];
    let d = new Date().getDay()
    for (let i = d; seq.length <= 7; i++) {
      if (i === 7) {
        //reset array if last element was reached
        i = 0;
      }
      seq.push(this.days[i]);
    }
    return seq;
  }

  render() {
    return (
      <div>
        <Row fields={this.state.data} days={this.state.days} />
      </div>
    );
  }
}

export default RowContainer;
