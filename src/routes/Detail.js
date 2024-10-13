import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();

    const getMovie = async () => {
        const data = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(data);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return <h1>Detail</h1>;
}

export default Detail;
