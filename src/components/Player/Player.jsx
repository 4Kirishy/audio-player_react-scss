import { useContext } from "react";
import { LikeContext } from "../../context/LikeContext";
import ActiveSong from "./ActiveSong";
import styles from "./Player.module.scss";

const Player = ({ activeSong, playing, getActiveSong, songsAmount }) => {
  //states

  const { addToLiked, removeFromLiked, isBurger, setIsBurger } =
    useContext(LikeContext);

  const toggleBurger = () => {
    const prevValue = isBurger;
    setIsBurger(!prevValue);
  };

  return (
    <div className={styles.player}>
      <div className={styles.playerContainer}>
        <div
          className={`${styles.burger} ${isBurger ? styles.active : ""}`}
          onClick={toggleBurger}
        ></div>
        <ActiveSong
          song={activeSong}
          addToLiked={addToLiked}
          removeFromLiked={removeFromLiked}
          playing={playing}
          getActiveSong={getActiveSong}
          songsAmount={songsAmount}
        />
      </div>
    </div>
  );
};

export default Player;
