import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon1 from './search.svg';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

// This is the API link ............https://www.omdbapi.com/ 
//process.env.REACT_APP_API_KEY = API KEY

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;


const Home = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(data.Search)
        console.log(searchTerm)
    }


    useEffect(() => {
        searchMovies('Superman');
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            searchMovies(searchTerm)
        }
    }

    return (

        <div className="app">
            <h1>CinemaLand</h1>

            <div className="link">
                <Link to="/TopFive"> Top Five Movies </Link>
            </div>



            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                />

                <img
                    src={SearchIcon1}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>


            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((singularMovie) => (
                            <MovieCard singularMovie={singularMovie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>

    );
}

export default Home;