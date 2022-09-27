import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';


const TopFive = () => {

    const movie1 = {
        "Title": "Gladiator",
        "Type": "movie",
        "Year": "2000",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    }

    const movie2 = {
        "Title": "Cast Away",
        "Type": "movie",
        "Year": "2000",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg"
    }

    const movie3 = {
        "Title": "The Pursuit of Happyness",
        "Type": "movie",
        "Year": "2006",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SX300.jpg"
    }

    const movie4 = {
        "Title": "Love Actually",
        "Type": "movie",
        "Year": "2003",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg"
    }

    const movie5 = {
        "Title": "Saving Private Ryan",
        "Type": "movie",
        "Year": "1998",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    }

    return (

        <div className="containerT5" >

            <h1>Top Five Movies</h1>

            <MovieCard singularMovie={movie1} />
            <MovieCard singularMovie={movie2} />
            <MovieCard singularMovie={movie3} />
            <MovieCard singularMovie={movie4} />
            <MovieCard singularMovie={movie5} />


            <Link to="/"> To Homepage </Link>

        </div>);
}

export default TopFive; 