const spotify = require('spotify-node-applescript');
const path = require('path');
const fs = require('fs');
const updateEvery = 5000;
let previousTrack;

function getTrack() {
    spotify.getTrack((err, track) => {
        if (err) {
            setTimeout(getTrack, updateEvery);
            return;
        }
        if (previousTrack !== track.id) {
            previousTrack = track.id;
            let music = fs.readFileSync(path.resolve(__dirname, '../template.txt'), 'utf8').trim();
            Object.keys(track).forEach(key => {
                const regex = new RegExp('%' + key + '%', 'g');
                music = music.replace(regex, track[key]);
            });
            console.log(music);
            fs.writeFileSync(path.join(__dirname, '../currentSong.txt'), music);
        }
        setTimeout(getTrack, updateEvery);
    });
}

getTrack();

