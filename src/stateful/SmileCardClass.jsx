import React, { Component } from 'react';


class SmileCardClass extends Component {

    constructor(props) {
        super(props); 
        
        this.state = {
          count: 0, 
        };
}
}

increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 })); 
    
    console.log(this.props.smileUnit.count);
  };

  render() {
    const { smileUnit } = this.props; 
    return (
      <div className="smileUnit">
        <h3>{smileUnit.title}</h3>
        <div>{smileUnit.item}</div>
        <article>{smileUnit.descr}</article>

        <div className="buttonBar">
          <div>❤ {this.state.count} </div>
          <button onClick={this.increment}>Vote</button>
        </div>
      </div>
    );
  }
}

export default SmileCardClass;
