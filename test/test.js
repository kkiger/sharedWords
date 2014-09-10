var chai = require('chai');
var expect = chai.expect; 


var functions = require('../index');
var findSharedWords = functions.findSharedWords;



describe('findSharedWords', function() {
	it('compares words', function () {
		var words1 = ["cat", "dog", "pig"];
		var words2 = ["cat", "dog", "ostrich"];
		expect(findSharedWords(words1, words2)).to.eql(['cat', 'dog']);
	});
});

describe('a process', function(){
	it('that compares words using a', function(){

	})
});