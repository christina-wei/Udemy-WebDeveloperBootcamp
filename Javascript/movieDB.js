//array of movies
//title, rating, hasWatched

var movies = [
	{
		name: "Frozen",
		rating: 4,
		hasWatched: true
	},
	{
		name: "Mission Impossible",
		rating: 3,
		hasWatched: true
	},
	{
		name: "King's Speech",
		rating: 4.6,
		hasWatched: false
	},
	{
		name: "Star Wars",
		rating: 10000,
		hasWatched: true
	}
]

movies.forEach(function(currMovie) {
	var output = "You have "
	if (!currMovie.hasWatched) {
		output += "not ";
	}
	output += "watched \"";
	output += currMovie.name;
	output += "\" - ";
	output += currMovie.rating;
	output += " stars";
	console.log(output);
});

