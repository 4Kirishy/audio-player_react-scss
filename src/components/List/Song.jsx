import { useState, useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./Song.module.scss";
import { LikeContext } from "../../context/LikeContext";

const Song = ({ song, onClick, addToLiked, removeFromLiked }) => {
  const [like, setLike] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { setIsPlaying } = useContext(LikeContext);

  const toggleLike = () => {
    const prevValue = like;
    setLike(!prevValue);
    song.isLiked = !prevValue;

    if (!prevValue) addToLiked(song);
    else removeFromLiked(song);
  };

  const toggleSong = () => {
    onClick(song.id);
    setIsPlaying(true);
    // setIsActive(true);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.song} ${isActive ? styles.active : ""}`}
        onClick={toggleSong}
      >
        <div className={styles.songContentBox}>
          <div className={styles.songCover}>
            <img src={song.cover} alt="cover" />
          </div>
          <div className={styles.songBox}>
            <div className={styles.songTitleName}>{song.title}</div>
            <div className={styles.songArtist}>{song.artist}</div>
          </div>
        </div>
      </div>
      <button className={styles.likeBtn} onClick={toggleLike}>
        {song.isLiked ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default Song;
