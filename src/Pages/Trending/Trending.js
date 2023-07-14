import axios from "axios";
import { useState, useEffect } from "react";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1); // Define and initialize the 'page' variable

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []); // Fetch data when the component mounts

  return (
    <div>
      <span className="pageTitle">Trending</span>
      {/* Render the fetched content */}
    </div>
  );
};

export default Trending;
