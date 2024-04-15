import { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  updateMovieDetailsAsync,
} from "../../redux/moviesOperations";
import {
  DetailsInfo,
  Form,
  MovieDetailsContainer,
  OptionsButtons,
} from "./MovieDetails.styled";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movies.selectedMovie);
  const backLinkHref = useRef(location.state?.from || "/");
  const [updatedMovieDetails, setUpdatedMovieDetails] = useState({});
  const [isClicked, setIsClicked] = useState();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  const handleFormSubmit = () => {
    dispatch(
      updateMovieDetailsAsync({ id: movieDetails.id, updatedMovieDetails })
    );
  };

  const toggleRedactor = () => {
    setIsClicked(!isClicked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMovieDetails((prevUpdatedMovieDetails) => ({
      ...prevUpdatedMovieDetails,
      [name]: value,
    }));
  };

  if (!movieDetails) {
    return <div>Error: Movie details not found</div>;
  }

  return (
    <div>
      <OptionsButtons>
        <NavLink to={backLinkHref.current}>
          <button>go back</button>
        </NavLink>
        <button onClick={toggleRedactor}>Open redactor</button>
      </OptionsButtons>
      <div>
        <MovieDetailsContainer>
          <h1>{movieDetails.title}</h1>
          <img src={movieDetails.image} alt={movieDetails.title} />
          <DetailsInfo>
            <p>{movieDetails.description}</p>
            <p>Rating: {movieDetails.rating}</p>
            <p>
              Release Date:{" "}
              {movieDetails.release_date.split("-").reverse().join(".")}
            </p>
            <p>Genre: {movieDetails.genre.join(", ")}</p>
            <p>Actors: {movieDetails.actors.join(", ")}</p>
            <p>Director: {movieDetails.director}</p>
          </DetailsInfo>
          {isClicked ? (
            <Form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="title"
                value={updatedMovieDetails.title || ""}
                onChange={handleInputChange}
                placeholder="Title"
              />
              <input
                type="text"
                name="description"
                value={updatedMovieDetails.description || ""}
                onChange={handleInputChange}
                placeholder="Description"
              />
              <input
                type="text"
                name="rating"
                value={updatedMovieDetails.rating || ""}
                onChange={handleInputChange}
                placeholder="Rating"
              />{" "}
              <input
                type="text"
                name="release_date"
                value={updatedMovieDetails.release_date || ""}
                onChange={handleInputChange}
                placeholder="Release Date"
              />{" "}
              <input
                type="text"
                name="genre"
                value={updatedMovieDetails.genre || ""}
                onChange={handleInputChange}
                placeholder="Genre"
              />{" "}
              <input
                type="text"
                name="actors"
                value={updatedMovieDetails.actors || ""}
                onChange={handleInputChange}
                placeholder="Actors"
              />{" "}
              <input
                type="text"
                name="director"
                value={updatedMovieDetails.director || ""}
                onChange={handleInputChange}
                placeholder="Director"
              />{" "}
              <input
                type="text"
                name="image"
                value={updatedMovieDetails.image || ""}
                onChange={handleInputChange}
                placeholder="Image(url)"
              />
              <button type="submit">Save Changes</button>
            </Form>
          ) : (
            ""
          )}
        </MovieDetailsContainer>
      </div>
    </div>
  );
};

export default MovieDetails;
