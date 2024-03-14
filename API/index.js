const fs = require("fs");
const movie = require("./movie");
const links = require("./GetLinks");

async function index() {
  const link = await links();
  const movies = [];
  for (let i = 0; i < link.length; i++) {
    movies.push(await movie.run(link[i].toString()));
  }
  fs.writeFile("./API/data/movies.json", JSON.stringify(movies), (err) => {
    if (err) throw err;
    console.log("File saved");
    return;
  });
  return;
}

index();
