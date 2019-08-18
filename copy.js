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



if ((process.argv[2] === "spotify-this-song" ) && (process.argv[3])) {
     songName = process.argv[3];
    spotifySong(songName);
}else if((process.argv[2] === "movie-this") && (process.argv[3])) {
     movieName = process.argv[3];
    movieThis(movieName);
}

// doSay();

// spotify_song() function with the user input in the parameter

function spotifySong(songName) {

    // grab spotify id and key from keys.js and assign them a variable "spotify"

    let spotify = new Spotify(keys.spotify)

    songName = process.argv[3];
    

    // if no song is provided

    if(!songName) {

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
       
    }else{

        spotify.search({ type: 'track', query: songName }, function(err, data) {
            
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

    movieName = process.argv[3];

    if(!movieName) {

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
    }else{
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

function doSay() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if(error) {
            console.log(error);
        }

             console.log(data);
            let dataArr = data.split(",");
            console.log(dataArr);
            console.log(dataArr[0]);
            console.log(dataArr[1]);
        if (dataArr[0] === "spotify-this-song") {
            songName = dataArr[1];
            spotifySong(songName);
        }else if(dataArr[0] === "movie-this") {
            movieName = dataArr[1];
            movieThis(movieName);
        }
            
        
    })
}