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


// declaring variables needed

let songName;

let movieName;



// calling the liriApp() function. The engine of the app

liriApp();




// creating the engine of the app liriApp() function

function liriApp() {

    // if statement to check user's search input or arguments for songs
    // if the first argument is spotify-this-song and no second argument

  if ((process.argv[2] === "spotify-this-song" ) && (!process.argv[3])) {

      // choose this song as default

       songName = "All the Small Things";
    
       // call the spotifySong

       spotifySong(songName);

       // if the first argument is spotify-this-song and there's second argument

    }else if((process.argv[2] === "spotify-this-song") && (process.argv[3])) {

       // make the second argument the song's name

       songName = process.argv[3];

       // spotify the song

        spotifySong(songName);
    }


    // if statement to check user's search input or arguments for movies
    // if the first argument is movie-this and no second argument

    if ((process.argv[2] === "movie-this") && (!process.argv[3])) {

        // choose this movie as default

        movieName = "remember the titans";

        // call the movieThis() function

        movieThis(movieName);

        // if the first argument is movie-this and there's second argument

    }else if((process.argv[2] === "movie-this") && (process.argv[3])) {

        // make the second argument the movie's name

        movieName = process.argv[3];

        // call the movieThis() function

        movieThis(movieName);
    }

    // calling the do-whatever-it-says doSay() function
    
    doSay();

}





// spotifySong() function

function spotifySong(songName) {

    // grab spotify id and key from keys.js and assign them a variable "spotify"

    let spotify = new Spotify(keys.spotify)    

    // send user's song to spotify api

    spotify.search({ type: 'track', query: songName }, function(err, data) {
             
    if (err) {

        // display error, if there's error 
                
        return console.log('Error occurred: ' + err);
    
    }
               
    // if no error, display information about the song
    
    console.log(`

    Artist: ${data.tracks.items[2].album.artists[0].name}

    #####################################################

    Song: ${data.tracks.items[2].album.name}

    #####################################################
      
    Preview: ${data.tracks.items[2].album.external_urls.spotify}

    #####################################################
              
    Album: ${data.tracks.items[2].album.name}

    #####################################################

    Release Date: ${data.tracks.items[2].album.release_date}

    `);
    
    });
   
}




//  movieThis() function

function movieThis(movieName) {  

    // save user's movie with the url in a variable

    const queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        
    // axios call and response to open movie api
    
    axios.get(queryUrl).then(function(response) {

        // if there's response or callback from the api

        if(response) {

            // display information about the movie
                
            console.log(`

            Title of movie: ${response.data.Title}

            ###########################################

            Year: ${response.data.Year}

            ###########################################

            Imdb Rating: ${response.data.imdbRating}

            ###########################################

            Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}

            ###########################################

            Country: ${response.data.Country}

            ###########################################

            Language: ${response.data.Language}

            ###########################################
            
            Movie Description: ${response.data.Plot}

            ###########################################
            
            Actors: ${response.data.Actors}

            `);
        }
            
    })
    
}





// doSay() function to do whatever it reads from random.txt file

function doSay() {

    // read the random.txt file
    fs.readFile("random.txt", "utf8", function(error, data) {

        if(error) {

            // if error, display error

            console.log(error);
        }

        // put the information in an array

        let dataArr = data.split(",");

        // if no argument from user and the first data in random.txt is "spotify-this-song"

        if ((!process.argv[2]) && (dataArr[0] === "spotify-this-song")) {

            // let the song's name be the second data in the array

            songName = dataArr[1];

            // call the spotifySong() function

            spotifySong(songName);

            // if no argument and the first data in random.txt is "movie-this"

        }else if((!process.argv[2]) && (dataArr[0] === "movie-this")) {

            // let the movie's name be the second data in the array

            movieName = dataArr[1];

            // call the movieThis() function

            movieThis(movieName);
        }
            
        
    })
}