import { useNavigate } from "react-router-dom";

const MovieItem = ({ id, title, genres, coverImg }) => {
  const navigate = useNavigate();

  return (
    <div className="MovieItem" onClick={() => navigate(`/detail/${id}`)}>
      <div className={["movie_info", `movie_info_${id}`].join(" ")}>
        <div className="info_img">
          <img src={coverImg} alt={title} />
        </div>
        <div className="info_content">
          <h2>{title}</h2>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
