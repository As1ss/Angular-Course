

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = "New Song";

const { song: anotherSong, audioVolume: volume, details } = audioPlayer;
const { author } = details;

// console.log("Song: ", song);
// console.log("Song: ", anotherSong);
// console.log("AudioVolume :", volume);
// console.log("Author: ", author);



const [, , sonGohan, piccolo="Not Found"] = ["Goku", "Vegeta", "SonGohan"];



console.log("Personaje 3: ", piccolo);




export { };