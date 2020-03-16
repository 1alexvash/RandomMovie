import React from "react";
import StarImg from "../../images/star.jpg";
import GoogleImg from "../../images/google.png";
import YoutubeImg from "../../images/youtube.png";
import TorrentImg from "../../images/torrent.png";

const Movie = ({
  movie: { backdrop_path, title, overview, vote_average, release_date }
}) => {
  return title !== undefined ? (
    <div className="movie">
      <div className="title">{title}</div>
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/original//${backdrop_path}`}
          alt="poster"
        />
      </div>
      <div className="description">{overview}</div>
      <div className="rating">
        <img src={StarImg} alt="star" /> {vote_average}
      </div>
      <div className="year">Year: {release_date.substring(0, 4)}</div>
      <div className="links">
        <a
          href={`https://www.google.com/search?q=${title}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={GoogleImg}
            title="search on google"
            alt="search on google"
          />
        </a>
        <a
          href={`https://www.youtube.com/results?search_query=${title}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={YoutubeImg}
            title="search on youtube"
            alt="search on youtube"
          />
        </a>
        <a
          href={`https://www.google.com/search?q=${title} torrent`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={TorrentImg}
            title="search torrent files"
            alt="search torrent files"
          />
        </a>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Movie;
