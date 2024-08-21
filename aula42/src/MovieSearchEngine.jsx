import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from 'react-bootstrap'; // Changed to 'react-bootstrap' for proper import

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const MovieList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const MovieItem = styled.li`
    margin: 10px 0;
`;

const MovieSearchEngine = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const searchMovie = async () => {
        if (!query) {
            setError('Please enter a movie title');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=4a249f8c&s=${query}`);
            if (response.data.Response === "True") {
                setMovies(response.data.Search);
            } else {
                setMovies([]);
                setError('No movies found');
            }
        } catch (error) {
            console.error("Error fetching the movie", error);
            setError('An error occurred while fetching the movie');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Title>Movie Search Engine</Title>
            <InputContainer>
                <Input 
                    type="text" 
                    value={query} 
                    onChange={(event) => setQuery(event.target.value)} 
                    placeholder="Enter movie title"
                    aria-label="Movie title"
                />
                <Button onClick={searchMovie} disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </Button>
            </InputContainer>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <MovieList>
                {movies.map((movie) => (
                    <MovieItem key={movie.imdbID}>{movie.Title} ({movie.Year})</MovieItem>
                ))}
            </MovieList>
        </Container>
    );
};

export default MovieSearchEngine;