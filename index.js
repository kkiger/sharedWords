// var findSharedWords = function() {
// 	fs.readFile('./file.txt'), opts, function(err, contents) {
// 		cb(10);		//now I know the contents
// 	};
// 	}
// }

/**
 * The findSharedWords function take two arrays, compares them, 
 * finds shared words, and creates a new array containing those shared words
 * @param {String[]} wordsArray1 Is an array of words 
 * @param {String[]} wordsArray2 Is an array of words
 * @return {String[]} A new array from wordsArray1 and wordsArray2 
 */

module.exports.findSharedWords = function(array1, array2){
	var commonalities = []
	// take array1 and array2
	// while looking at array1, look at array2
	array1.forEach(function(aWord) {
		array2.forEach(function(bWord) {
			if (aWord === bWord) {
				commonalities.push(aWord)
			}
		})
	})
	// if you see any identical words
	// then put those words in a new array
	// go (iterate) the full length of the array
	// after you finish iterating through the first array, 
	// then display the new array of shared words
	return commonalities;
};

// var displayDuplicates = function(array1, array2){
// 	// combine array1 and array2 into a new array
// 	// iterate through the new array
// 	// take each duplicate, and place in a new array
// 	// print that new array
// 	array1.forEach(function() {
// 		var word1 = 
// 	})

// }

// // show me an array
// // an array of shared words
// // those words came from looking at array1 and array2

// array1.word[]=array2.word[]


// // Turn 2 strings into an array
// // Search the arrays for shared words 

// // words.length <
// // words1[0]

