import styles from "./ActiveSong.module.scss";
import {
  FaHeart,
  FaRegHeart,
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
} from "react-icons/fa";
import { useState, useRef } from "react";

const ActiveSong = ({ song, addToLiked, removeFromLiked, playing }) => {
  //states
  const [like, setLike] = useState(false);
  const [isPlaying, setIsPlaying] = useState(playing);

  //refs
  const audioPlayer = useRef();

  const toggleLike = () => {
    const prevValue = like;
    setLike(!prevValue);
    song.isLiked = !prevValue;

    if (!prevValue) addToLiked(song);
    else removeFromLiked(song);
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) audioPlayer.current.play();
    else audioPlayer.current.pause();
  };

  return (
    <div className={styles.activeSong}>
      <audio src={song.audio} preload="metadata" ref={audioPlayer} />
      <div className={styles.activeSongTitleName}>{song.title}</div>
      <div className={styles.activeSongCover}>
        <img src={song.cover} alt="cover" />
      </div>
      <div className={styles.activeSongBox}>
        <div className={styles.activeSongArtist}>{song.artist}</div>
        <button className={styles.activeSongLikeBtn} onClick={toggleLike}>
          {song.isLiked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <div className={styles.controls}>
        <div className={styles.controlsBtns}>
          <button className={styles.skip}>
            <FaBackward />
          </button>
          <button className={styles.playPause} onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
          </button>
          <button className={styles.skip}>
            <FaForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveSong;
