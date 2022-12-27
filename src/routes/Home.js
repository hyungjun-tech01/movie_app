//import PropTypes from "prop-types";
import React from "react";
import axios from "axios";  // fetch vs axios ?
import Movie from '../components/Movie';

// React.Componet를 상속한 class 구현 
class App extends React.Component{
  state = {
    isLoading : true,
    movies: []
  };
// async await -> 함께 사용, 해당 function이 시간이 걸리니 기다려라 .
// 리모트에서 뭔가 하려고 할때 늘 사용하는 듯.

  //fetch()는 .then() 메서드에서 처리된 promise를 반환합니다. 
  //이 때는 아직 우리가 필요한 JSON 데이터의 포맷이 아니기 때문에 응답 객체의 
  //.json() 메서드를 호출합니다. 그러면 JSON 형식의 데이터로 이행(resolve)된 
  //또 다른 promise를 반환합니다. 따라서 일반적인 fetch 요청은 두 개의 .then() 호출을 갖습니다.
  getMoiveFetch = async() =>{
    await fetch("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
      .then( (response) => response.json() )
      .then( (json) => console.log(json));
    this.setState( current => ({isLoading:false}));
  };
  //Axios의 문법도 비슷하나, 다양한 방법으로 요청할 수 있습니다.
  //아래와 같이 HTTP 메서드를 붙일 수도 있습니다.(get method)
  //두 번째 인자를 사용해서 커스텀 설정하는 것도 가능합니다.
  // axios(url, { method: "get", /* 다른 옵션도 가능합니다 (post, put, delete, etc.)*/  headers: {},  data: {},});
  //응답 데이터를 기본적으로 JSON 타입으로 사용 response.json()을 할 필요는 없음.
  getMovieAxios = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    console.log(movies);
    this.setState({ movies:movies, isLoading:false } );
  }
  // json 구조가 data.data.movies 로 되어 있음. 이걸 받아올때  const {data:{data:{movies}}} 이렇게 정의
  componentDidMount(){
    //this.getMoiveFetch();
    this.getMovieAxios();
  };
  // state 사용 {this.state.count}
  render(){
    const {isLoading, movies} = this.state ;
    return ( 
      <section className="container">
        <div>
          {isLoading ? 
            (
              <div className="loader">
                <span className="loader__text"> "Loading..." </span> 
              </div> 
            ) : 
            (
              <div className="movies">
                {movies.map(movie =>  {
                  return (
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      year={movie.year}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}/>
                    )
                    }
                  )
                }
              </div>
            )
          }
        </div>
      </section>
    );
  };
}

export default App;
