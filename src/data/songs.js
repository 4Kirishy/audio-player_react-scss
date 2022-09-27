//mp3 imports //cover imports
import almedaMP3 from "./song-mp3/almeda.mp3";
import bloodOnMeMP3 from "./song-mp3/bloodOnMe.mp3";
import badHabitMP3 from "./song-mp3/badHabit.mp3";
import mySkinMyLogoMP3 from "./song-mp3/mySkinMyLogo.mp3";
import everybodyMP3 from "./song-mp3/everybody.mp3";
import pinkPlusWhiteMP3 from "./song-mp3/pinkPlusWhite.mp3";
import saviorMP3 from "./song-mp3/savior.mp3";
import xsMP3 from "./song-mp3/XS.mp3";
import fancyClown from "./song-mp3/fancyClown.mp3";
import heartless from "./song-mp3/heartless.mp3";

import frackOceanCover from "./song-covers/frank-ocean-cover.jpg";
import kendrickLamarCover from "./song-covers/kendrick-lamar-cover.jpg";
import macMillerCover from "./song-covers/mac-miller-cover.jpg";
import samphaCover from "./song-covers/sampha-cover.jpg";
import rinaSawayamaCover from "./song-covers/sawayama-cover.jpg";
import solangeCover from "./song-covers/solange-cover.jpg";
import steveLacyCover from "./song-covers/steve-lacy-cover.jpg";
import MFDOOMCover from "./song-covers/MFDOOMCover.png";
import kanyeWestCover from "./song-covers/kanye-west.jpg";

const songs = [
  {
    title: "Almeda",
    artist: "Solange",
    cover: solangeCover,
    audio: almedaMP3,
    isLiked: false,
    id: 1,
  },
  {
    title: "My Skin My Logo",
    artist: "Solange",
    cover: solangeCover,
    audio: mySkinMyLogoMP3,
    isLiked: false,
    id: 2,
  },
  {
    title: "Blood On Me",
    artist: "Sampha",
    cover: samphaCover,
    audio: bloodOnMeMP3,
    isLiked: false,
    id: 3,
  },
  {
    title: "Savior",
    artist: "Kendrick Lamar",
    cover: kendrickLamarCover,
    audio: saviorMP3,
    isLiked: false,
    id: 4,
  },
  {
    title: "XS",
    artist: "Rina Sawayama",
    cover: rinaSawayamaCover,
    audio: xsMP3,
    isLiked: false,
    id: 5,
  },
  {
    title: "Everybody",
    artist: "Mac Miller",
    cover: macMillerCover,
    audio: everybodyMP3,
    isLiked: false,
    id: 6,
  },
  {
    title: "Pink + White",
    artist: "Frank Ocean",
    cover: frackOceanCover,
    audio: pinkPlusWhiteMP3,
    isLiked: false,
    id: 7,
  },
  {
    title: "Bad Habit",
    artist: "Steve Lacy",
    cover: steveLacyCover,
    audio: badHabitMP3,
    isLiked: false,
    id: 8,
  },
  {
    title: "Fancy Clown",
    artist: "Madvillain",
    cover: MFDOOMCover,
    audio: fancyClown,
    isLiked: false,
    id: 9,
  },
  {
    title: "Heartless",
    artist: "Kanye West",
    cover: kanyeWestCover,
    audio: heartless,
    isLiked: false,
    id: 10,
  },
];

export default songs;
