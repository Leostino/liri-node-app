// require `dotenv` package to set environment variables to the global `process.env` object

require("dotenv").config();

// require and assign axios package to a variable "axios"

const axios = require("axios");

// require and assign file systems management package to a  variable "fs"

const fs = require("fs");

// require and assign node spotify api package to a variable Spotify

const Spotify = require("node-spotify-api");

// require and assign keys.js file to a variable "keys" to assess keys.js file

const keys = require("./keys");

let songName;

let movieName;


spotifySong(songName);

movieThis(movieName);

// spotify_song() function with the user input in the parameter

function spotifySong(songName) {

    // grab spotify id and key from keys.js and assign them a variable "spotify"

    let spotify = new Spotify(keys.spotify)

    let playSong = process.argv[2];

    // grab the users song from the 4th argument
    
    songName = process.argv[3];

    // if no song is provided

    if((playSong === "spotify-this-song") && (!songName)) {

        // send a default song to api

        spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
            
        if (err) {
              return console.log('Error occurred: ' + err);
            }
           
          console.log(`
          Artist: ${data.tracks.items[2].album.artists[0].name}
          Song: ${data.tracks.items[2].album.name}
          Preview: ${data.tracks.items[2].album.external_urls.spotify}
          Album: ${data.tracks.items[2].album.name}
          Release Date: ${data.tracks.items[2].album.release_date}
          `);

        });
       
          // else
       
    }else if((playSong === "spotify-this-song") && (songName)){
        spotify.search({ type: 'track', query: userSong }, function(err, data) {
            
            if (err) {
                  return console.log('Error occurred: ' + err);
                }
               
              console.log(`
              Artist: ${data.tracks.items[2].album.artists[0].name}
              Song: ${data.tracks.items[2].album.name}
              Preview: ${data.tracks.items[2].album.external_urls.spotify}
              Album: ${data.tracks.items[2].album.name}
              Release Date: ${data.tracks.items[2].album.release_date}
              `);
    
            });
    }
}




function movieThis(movieName) {

    let playMovie = process.argv[2];

    movieName = process.argv[3];

    if((playMovie === "movie-this") && (!movieName)) {

    axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
        function(response) {
            if(response) {
                console.log(`
                Title of movie: ${response.data.Title}
                Year: ${response.data.Year}
                Imdb Rating: ${response.data.imdbRating}
                Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}
                Country: ${response.data.Country}
                Language: ${response.data.Language}
                Movie Description: ${response.data.Plot}
                Actors: ${response.data.Actors}
               `);
            }   
        })
    }else if((playMovie === "movie-this") && (movieName)) {
        const queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(function(response) {
            if(response) {
                console.log(`
                Title of movie: ${response.data.Title}
                Year: ${response.data.Year}
                Imdb Rating: ${response.data.imdbRating}
                Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}
                Country: ${response.data.Country}
                Language: ${response.data.Language}
                Movie Description: ${response.data.Plot}
                Actors: ${response.data.Actors}
               `);
            }
            })
    }

}