// Task:Our football team finished the championship. The result of each match looks like “x:y”. Results of all matches are recorded in the collection. For example: ["3:1", "2:2", "0:1", ...] Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x>y – 3 points
// if x<y – 0 point
// if x=y – 1 point
function points(games) {
	let sum = 0;
	for (let i = 0; i < games.length; i++){
		if (games[i][0] > games[i][2])
			sum += 3
		if (games[i][0] == games[i][2])
			sum += 1
	}
	return sum
}

// Solution explanation: The simple solution to this question is to first LOOP through he strings given in the games array, if the 0th index of games[i] > 2nd index of games[i] we have to add 3 to the score, else if they are equal we need to add 1 to the score. Finally, return the score value. 