import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ longTitle, coverImg, title, genres, runtime }) {
    return (
        <div>
            <h1>{longTitle}</h1>
            <img src={coverImg} alt={title}></img>
            <p>장르 : {genres.map((g) => g).join(", ")}</p>
            <p>런닝타임 : {runtime}분</p>
            <Link to={"/"}>뒤로 가기</Link>
        </div>
    );
}

Movie.prototype = {
    longTitle: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired,
};

export default Movie;
