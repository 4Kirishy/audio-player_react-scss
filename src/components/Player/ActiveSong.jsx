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

const ActiveSong = ({
  song,
  addToLiked,
  removeFromLiked,
  playing,
  getActiveSong,
  songsAmount,
}) => {
  //states
  const [like, setLike] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isRandomOn, setIsRandomOn] = useState(true);
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

  const nextSong = () => {
    // if (isRandomOn) {
    //   getActiveSong(Math.floor(Math.random() * songsAmount));
    //   return;
    // }
    if (song.id + 1 > songsAmount) getActiveSong(1);
    else getActiveSong(song.id + 1);

    setIsPlaying(true);
  };

  const prevSong = () => {
    if (song.id - 1 < 1) getActiveSong(songsAmount);
    else getActiveSong(song.id - 1);

    setIsPlaying(true);
  };

  return (
    <div className={styles.activeSong}>
      <audio
        src={song.audio}
        preload="auto"
        ref={audioPlayer}
        autoplay="autoplay"
      />
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
          <button className={styles.skip} onClick={prevSong}>
            <FaBackward />
          </button>
          <button className={styles.playPause} onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
          </button>
          <button className={styles.skip} onClick={nextSong}>
            <FaForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveSong;
