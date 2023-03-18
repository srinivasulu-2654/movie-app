import React,{useState,useEffect} from 'react';
import './App.css';
import MovieElement from './MovieElement';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';
import logo from "./images/2.png";

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=6a68782ee2dbc101c5bac7380ad55b60&language=en-US&page=1`;

function App() {
  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=6a68782ee2dbc101c5bac7380ad55b60&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <Navbar expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} className="image"></img></Navbar.Brand>
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="🔍 Search for a Movie"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="primary" type="submit">Search</Button>
            </Form>
      </Container>
    </Navbar>
    <hr></hr>
    
    <div>
      <b className='mrm'>Most Recent Movies</b>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieElement key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>   
    </>
   
  );
}

export default App;