import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [detail, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetails(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Loading Detail...</h1>
      ) : (
        <div>
          <h2>
            {detail.title} ({detail.year}): 🏆{detail.rating} rates
          </h2>
          <img src={detail.medium_cover_image}></img>
          <h3>genres : {detail.genres}</h3>
        </div>
      )}
    </div>
  );
}

export default Detail;
