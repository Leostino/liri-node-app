# liri-node-app



## Introduction

This liri-node-app is a node application that helps users search for both movies and songs in the same app. It helps solve the problem of using 2 to 3 different applications for songs and movies. it is very convenient and easy to use.



## Organization

This app has a good file management and organization, all the files directly associated with the main javascritp file `liri.js`, are placed in same folder except the screenshot images arranged in images folder.
The api keys and information are stored in variables in `.env` file, which is one of the files included in the `.gitignore` file. This means the api keys and other information are not pushed along with other files to the repo. The process.env property is used to access the api keys variables in the `keys.js`. This way the api key's information is hidden but still active.



## How liri-node-app works

This is a working app that can do 3 things

* spotify any song - search for a song and display it's information including the preview of the   song
* search for any movie and display details of the movie.

* This app can also read a text file inside the app and do whatever is written in the file.

To do any of these 3 things, the app needs an input from the user. What the user types, determines which function or action the app performs.

### *do-whatever-it-says*

This is like the default function of the app, when the user just runs the app without passing any arguments. To get this feature, the user just needs to run the app, 
Type "node liri.js" and click enter.
Once the user runs this code, the app reads the random.txt file and executes whatever action written in the file - either spotify a song or displays a movie's details.

[screenshot link to do-whatever-it-says](images/doSay.png)


### *spotify-this-song*

This feature is to spotify songs. For this feature to work the user must pass in arguments when running the app.
Type "node liri.js spotify-this-song" and click enter
However this command will spotify a default song(All the small things) from the app and display to the user

[screenshot link to spotify default song](images/justSpotify.png)

To spotify their songs, the user will have to type in the name of the song they want to spotify after spotify-this-song.
Type "node liri.js spotify-this-song songName" and click enter

[screenshot link to spotify user's song](images/spotifySong.png)


### *movie-this*

This feature searches for movies and displays information about that movie to the user. Just like the spotify-this-song, for movie-this to work the user must pass in arguments while running the app.
Type "node liri.js movie-this" and click enter
However this command will display a default movie's information(remember the titans) to the user

[screenshot link to default movie](images/justMovie.png)

To search for specific movies, the user will type the name of the movie after the movie-this keyword.
Type "node liri.js movie-this movieName" and click enter

[screenshot link to user's movie](images/movieThis.png)



## Link to github repository

   [github repository](https://github.com/Leostino/liri-node-app)



## Technologies

1. I used [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api) to             spotify songs

2. I used [axios package](npm-install-axios) to search for movies

3. I used File system(fs) package to read from the text file random.txt and also write or log       every activities of the app in log.txt file.

4. [dotenv package](npm-install-dotenv) was used to access the api keys stored in `.env` file.      `.env` is one of the files in the `.gitignore` folder that's not uploaded to the repository.     This is a security feature because it keeps api key information hidden from the public

5. I used Javascript to link all the packages and features together (javascript's require()).
   I created 4 functions, 3 for the features of the app and 1 for the engine of the app.

6. Git and Github to save and track different versions of the app [github repository](https://github.com/Leostino/liri-node-app)



## Role

 I developed this app.