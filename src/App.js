//import PropTypes from "prop-types";
import React from "react";
import axios from "axios";  // fetch vs axios ?

// React.Componet를 상속한 class 구현 
class App extends React.Component{
  state = {
    isLoading : true,
    movies: []
  };
  getMoiveFetch(){
    fetch("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
      .then( (response) => response.json() )
      .then( (json) => console.log(json));
    ;
  };
  componentDidMount(){
    this.getMoiveFetch();
  };
  // state 사용 {this.state.count}
  render(){
    return ( 
      <div>
        {this.state.isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  };
}

export default App;
