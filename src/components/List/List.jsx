import styles from "./List.module.scss";
import { FaSearch } from "react-icons/fa";
import { BsEmojiFrown } from "react-icons/bs";
import { useState, useContext } from "react";
import Song from "./Song";
import { LikeContext } from "../../context/LikeContext";

const List = ({ songs, likedSongs, getActiveSong }) => {
  const [isActive, setIsActive] = useState(true);
  const [all, setAll] = useState(true);
  const [userInput, setUserInput] = useState("");

  const { addToLiked, removeFromLiked, isBurger } = useContext(LikeContext);

  const inputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const showAllSongs = () => {
    setAll(true);
    setIsActive(true);
  };

  const showLikedSongs = () => {
    setAll(false);
    setIsActive(false);
  };

  const getActiveSongHandler = (songId) => {
    getActiveSong(songId);
  };

  const allSongs = songs
    .filter((song) => {
      return (
        song.title.toLowerCase().includes(userInput.toLowerCase()) ||
        song.artist.toLowerCase().includes(userInput.toLowerCase())
      );
    })
    .map((song) => (
      <Song
        key={song.id}
        song={song}
        onClick={getActiveSongHandler}
        addToLiked={addToLiked}
        removeFromLiked={removeFromLiked}
      />
    ));

  const likes =
    likedSongs.length > 0 ? (
      likedSongs
        .filter((song) => {
          return (
            song.title.toLowerCase().includes(userInput.toLowerCase()) ||
            song.artist.toLowerCase().includes(userInput.toLowerCase())
          );
        })
        .reverse()
        .map((song) => (
          <Song
            key={song.id}
            song={song}
            onClick={getActiveSongHandler}
            removeFromLiked={removeFromLiked}
          />
        ))
    ) : (
      <div className={styles.emptyList}>
        List is empty <BsEmojiFrown className={styles.emoji} />
      </div>
    );

  return (
    <div className={`${styles.list} ${isBurger ? styles.active : ""}`}>
      <header className={styles.listHeaderBox}>
        <div className={styles.listBtns}>
          <button
            className={`${styles.listBtn} ${isActive ? styles.active : ""}`}
            onClick={showAllSongs}
          >
            All Songs
          </button>
          <button
            className={`${styles.listBtn} ${!isActive ? styles.active : ""}`}
            onClick={showLikedSongs}
          >
            Liked
          </button>
        </div>
        <form className={styles.listSearch}>
          <input
            className={styles.listInput}
            type="text"
            placeholder="search"
            onChange={inputHandler}
          />
          <FaSearch className={styles.searchIcon} />
        </form>
      </header>
      {all ? allSongs : likes}
    </div>
  );
};

export default List;
