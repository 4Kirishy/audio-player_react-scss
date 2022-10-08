import styles from "./ActiveSong.module.scss";
import {
  FaHeart,
  FaRegHeart,
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
} from "react-icons/fa";
import { useState, useRef, useContext, useEffect } from "react";
import { LikeContext } from "../../context/LikeContext";

const ActiveSong = ({
  song,
  addToLiked,
  removeFromLiked,
  getActiveSong,
  songsAmount,
}) => {
  //states
  const [like, setLike] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState("...");
  const [currentTime, setCurrentTime] = useState("00:00");
  const { isPlaying, setIsPlaying } = useContext(LikeContext);

  //refs
  const audioPlayer = useRef();
  const progressBar = useRef();
  const volumeBar = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    const currentSeconds = Math.floor(audioPlayer.current.currentTime);
    setCurrentTime(currentSeconds);
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
    audioPlayer?.current?.currentTime,
  ]);

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

    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const nextSong = () => {
    if (song.id + 1 > songsAmount) getActiveSong(1);
    else getActiveSong(song.id + 1);

    setIsPlaying(true);
  };

  const prevSong = () => {
    if (song.id - 1 < 1) getActiveSong(songsAmount);
    else getActiveSong(song.id - 1);

    setIsPlaying(true);
  };

  const onPlaying = () => {
    setProgress(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
    );

    audioPlayer.current.ended && nextSong();
  };

  const skipTo = (e) => {
    const progress = e.nativeEvent.offsetX / progressBar.current.clientWidth;
    audioPlayer.current.currentTime = progress * audioPlayer.current.duration;
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const handleVolume = () => {
    audioPlayer.current.volume = volumeBar.current.value / 100;
    volumeBar.current.style.setProperty(
      "--seek-before-width",
      `${audioPlayer.current.volume * 100}%`
    );
  };

  return (
    <div className={styles.activeSong}>
      <audio
        src={song.audio}
        preload="metadata"
        ref={audioPlayer}
        autoPlay
        onTimeUpdate={onPlaying}
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
        {/* progress bar using divs */}
        <div
          className={styles.controlsProgressBar}
          onClick={skipTo}
          ref={progressBar}
        >
          <div
            className={styles.songProgress}
            style={{ width: `${progress}%` }}
          ></div>
          <div
            className={styles.progressThumb}
            style={{ left: `calc(${progress}% - 7px)` }}
          ></div>
        </div>
        {/* duration */}
        <div className={styles.duration}>
          <div>{!isNaN(currentTime) && calculateTime(currentTime)}</div>
          <div>{!isNaN(duration) && calculateTime(duration)}</div>
        </div>
        {/* volume bar */}
        <input
          type="range"
          min="0"
          max="100"
          onChange={handleVolume}
          ref={volumeBar}
          className={styles.volumeBar}
        />
      </div>
    </div>
  );
};

export default ActiveSong;
