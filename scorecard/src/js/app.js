
const Preview = (props) => {
  return (<div className="preview"><a href="#"><iframe src={props.src} width="500px" height="300px"></iframe><p className="description">{props.text}</p><p className="url">{props.url}</p></a></div>)
}


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      reshares: this.props.reshares,
      likes: this.props.likes,
      used: []
    };
  }
  
  incrementItem = (item) => {
    if(this.state.used.indexOf(item) === -1) {
      this.state.used.push(item)
      this.state[item] = this.state[item] + 1;
      this.setState({})
    }
    
     
  }

  render() {
    return (
      <ul className="menu">
        <li className="comment">
          <img src="http://icons.iconarchive.com/icons/icons8/ios7/512/Very-Basic-Speech-Bubble-icon.png"/>{" "}
          {this.state.comments}
        </li>
        <li className="share" onClick={() => {this.incrementItem("reshares")}}>
          <img src="http://www.clipartx.com/uploads/icon/share-icon-113830" />{" "}
          {this.state.reshares}
        </li>
          <li className="like" onClick={() => {this.incrementItem("likes")}}>
          <img src="http://cdn.mysitemyway.com/icons-watermarks/simple-black/foundation/foundation_heart/foundation_heart_simple-black_512x512.png" />{" "}
          {this.state.likes}
        </li>
         <li className="contact">
          <img src="https://cdn0.iconfinder.com/data/icons/seo-smart-pack/128/grey_new_seo-14-512.png" />{" "}
        </li>
      </ul>
    );
  }
}

const Head = (props) => { 
  return(<div className="head"><img src={props.avatar} /><h4>{props.user}</h4><span>{props.date}</span><p>{props.desc}</p></div>)
}

class Scorecard extends React.Component {
  render() {
    return (
      <div className="scorecard">
        <Head avatar="https://uploads.teamtreehouse.com/production/profile-photos/5686782/micro_massiveliam.jpg" user="William" date="July 23" desc="Small article about Lorem Ipshizzle" />
        {" "}
        <Preview src="https://www.google.de/" text="Lorem black that's the shizzle sit amet, brizzle adipiscing elizzle. Nullizzle pimpin' velizzle..." url="http://example.com" />
        <Menu comments={0} reshares={0} likes={0}/>
      </div>
    );
  }
}

ReactDOM.render(<Scorecard />, document.getElementById("container"));
