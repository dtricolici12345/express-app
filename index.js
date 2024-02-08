const express = require('express');
const app = express();
const port = 5000;



const movies = [
{
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];


app.listen(port, () => {
    console.info(`Server is listening on port ${port}`);
})
.on("error", (err) => {
    console.error("Error:", err.message);
  });


  app.get("/" ,
   (req, res) => {
    res.send("Welcome to my favourite movie list")
});


// const handler = (req,res) => {
//     res.status(200).json(movies.title);
// };


const handler = (req, res) => {
 res.status(200).json(movies);
  };
  
  app.get("/api/movies", handler);

  const handler1 = (req,res) => {
    const id = parseInt(req.params.id); 
    const findMovies = movies.find((movie)=>movie.id === id);


  if (findMovies) {
    res.status(200).json(findMovies);
  } else {
    res.status(404).send("Not found");
  }

};
  app.get("/api/movies/:id" , handler1);