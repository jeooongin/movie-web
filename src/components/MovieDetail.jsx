import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMoviesDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMoviesDetails(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMoviesDetails();
  }, []);

  const onClickBack = () => {
    navigate(-1);
  };

  const onClickReservation = () => {
    navigate(`/reservation/${id}`);
  };

  return (
    <div>
      {loading ? (
        <h1>Loaging...</h1>
      ) : (
        <div className="MovieDetail">
          <div className="detail_img">
            <img
              className="detail_img"
              src={moviesDetails.medium_cover_image}
              alt={moviesDetails.title}
            />
          </div>
          <div className="detail_content">
            <h1>{moviesDetails.title}</h1>
            <ul className="movie_detail_genres">
              {moviesDetails.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <div className="movie_rating">{moviesDetails.rating}</div>
            <div className="movie_description">
              {moviesDetails.description_full}
            </div>
          </div>
          <div>
            <Button text={"돌아가기"} onClick={onClickBack} />
            <Button text={"예매하기"} onClick={onClickReservation} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
