import { useState } from "react";
import "./App.scss";
import List from "./components/List/List";
import Player from "./components/Player/Player";
import songs from "./data/songs";
import { LikeContext } from "./context/LikeContext";

const App = () => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [activeSong, setActiveSong] = useState(songs[0]);
  const [playing, setPlaying] = useState(false);
  const [isBurger, setIsBurger] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const getActiveSong = (id) => {
    songs.forEach((song) => {
      if (song.id === id) {
        setActiveSong(song);
        return;
      }
    });
    setPlaying(true);
  };

  const addToLiked = (likedSong) => {
    let isUnique = true;
    likedSongs.forEach((song) => {
      if (song.id === likedSong.id) return (isUnique = false);
    });

    isUnique && setLikedSongs([...likedSongs, likedSong]);
  };

  const removeFromLiked = (removedSong) => {
    setLikedSongs(likedSongs.filter((song) => song.id !== removedSong.id));
  };

  return (
    <div className="App">
      <LikeContext.Provider
        value={{
          addToLiked,
          removeFromLiked,
          isBurger,
          setIsBurger,
          isPlaying,
          setIsPlaying,
        }}
      >
        <List
          songs={songs}
          likedSongs={likedSongs}
          getActiveSong={getActiveSong}
        />
        <Player
          activeSong={activeSong}
          playing={playing}
          getActiveSong={getActiveSong}
          songsAmount={songs.length}
        />
      </LikeContext.Provider>
    </div>
  );
};

export default App;
