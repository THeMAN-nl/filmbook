import React,{useState,useEffect,useLayoutEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';
import fetch from "node-fetch";
import Card from './Card'
import NewsCard from "./NewsCard"
import Token,{ movieToken } from './token';
 
function App() {
const [search, setSearch] = React.useState("");
const [datas, setData] = useState([]);
const [query, setQuery] = useState('marvel');
const [news, setNews] = useState([]);
const [upcomming, setUpcomming] = useState('');


useEffect(() => {
  fetch('https://gnews.io/api/v3/search?q=movie|'+ query +'&image&token='+Token)
  .then(response => response.json())
  .then(data =>{ 
    setNews(data) 
    // console.log(data)
  }).catch(function(error) {
    console.log(error);
});
  },[query]);

// useLayoutEffect(() => {
//   fetch('http://newsapi.org/v2/everything?q=movie|film|'+query+'&sortBy=popularityAt&apiKey=9c016d580ec842ddb3835898e79b322a')
//   .then(response => response.json())
//   .then(data =>{ 
//     setNews(data) 
    
//   }).catch(function(error) {
//     console.log(error);
// });
//   },[news,query]);
 
useEffect(() => {
  fetch('https://api.themoviedb.org/3/search/movie?api_key='+movieToken+'&query='+query)
  .then(response => response.json())
  .then(data =>{ 
    setData(data) 
    // console.log(data)
  }).catch(function(error) {
    console.log(error);
});
  },[query]);
  

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key='+movieToken+'&language=en-US&page=1')
    .then(response => response.json())
    .then(data =>{ 
      setUpcomming(data) 
      // console.log(data)
    });
    },[query]);
  
function handleChange(event) {
  const movieName = event.target.value
  setSearch(movieName);
}

function handleSubmit(event){
  setQuery(search);
  event.preventDefault();
}
  return (
 <div className="App">
    
     <div className="search-box black-bg">
     <h1 className="w-text black-bg logo">Film<span className="tur-text">Book</span></h1>
     <form onSubmit={handleSubmit}>
     
        <input 
          type="text"
          className="search-bar"
          placeholder="Search movie by title"
          onChange={handleChange}
        
        />
        {/* {console.log(query)} */}
      <button type='submit' className="search-icon">
       <SearchIcon />
       </button>
      </form>
       </div>
       
   <div className='grid'>

        

        {/* <div className="news">
        {news !==''?<h1>search movie</h1>:news.articles.map(article =>
          <div className="newsCard" style={{backgroundImage: "url("+ article.image + ")"}} > 
             <newsCard 
                 title={article.title}
                  date={article.publishedAt}
                  source={article.source.name}
                  />
            </div>
        )} 
       </div> */}

       <div className="news">
        {news !=''?news.articles.map(article =>
          <div className="newsCard" style={{backgroundImage: "url("+ article.image + ")"}} > 
          <a href={article.url}>
             <NewsCard 
                  
                 title={article.title}
                  date={article.publishedAt}
                  source={article.source.name}
                  />
                  </a>
            </div>
            
        ):<h1>search movie</h1>}
       </div>
      
       {/* <main> */}

       
       <div className="row">
       
        {datas ==''?<h1>search movie</h1>:datas.results.map(movie =>
          <div className="card" style={{backgroundImage: "url(" +"https://image.tmdb.org/t/p/w342/"+ movie.poster_path + ")"}} > 
             <Card 
                 title={movie.title}
                  year={movie.release_date}
                  rating={movie.vote_average}
                  />
            </div>
        )} 
       </div>

      
       <h1  >|Upcomming movies</h1>
       
        <div className="row">
        {upcomming ==''?<h1>search movie</h1>:upcomming.results.map(newRelease =>
          <div className="card" style={{backgroundImage: "url(" +"https://image.tmdb.org/t/p/w342/"+newRelease.poster_path + ")"}} > 
             <Card 
                 title={newRelease.title}
                  year={newRelease.release_date}
                  rating={newRelease.vote_average}
                  />
            </div>
            
        )} 
       </div>
  {/* </main> */}
  
  </div>
   
    
      
</div>
  );
}

export default App;
