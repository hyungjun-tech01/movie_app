//import PropTypes from "prop-types";
import React from "react";
class App extends React.Component{
  state = {
    count : 0
  };

  add = ()=> {
    // this.state.count = 1;  //  Warning :  Do not mutate state directly. Use setState()  직접 바꾸면 render 를 하지 않음. 
    // this.setState({ count : this.state.count + 1});  // count 바로 쓰는거 별로 않좋다고 하는데 왜 그런지는 
    this.setState( current => ({ count : this.state.count + 1}) );  
    console.log("add");
  } 
  minus = ()=> {
    this.state( current => ({count : this.state.count - 1}) );
    console.log("minus");
  }
  // state 사용 {this.state.count}
  render(){
    return ( 
      <div>
        <h1>I am class {this.state.count}</h1>
        <button onClick={this.add} > Add </button>
        <button onClick={this.minus} > Minus </button>
      </div>
    );
  }
}

export default App;
