$(document).on('ready', function() {
  
// Exercise #1.

var getName = function(o){

	return o.name;

};

console.log(getName({name: 'Luisa', age: 25 }));



// Exercise #2.

var totalLetters = function(words){
	return words.join('').length;
};
console.log(totalLetters(['javascript', 'is', 'awesome']));
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));



// Exercise #3.

var keyValue = function(key, value){

	var o ={};
	o[key] = value;
	return o;

};

console.log(keyValue('city', 'Denver'));


// Exercise #4

var negativeIndex = function(arr,i){
	return arr[arr.length+i];

};
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));



// Exercise #5

var removeM = function(str){

var output = '';
for(var i=0; i<str.length; i++){
	if(str[i] !='m'){
		output+=str[i];
		}
	}
return output;
}

console.log(removeM('family'));
console.log(removeM('memory'));

// Exercise #6

var printObject = function(obj){

	for(key in obj){

		console.log(key + ' is ' + obj[key]);

	}


}

printObject({ a: 10, b: 20, c: 30 }); 
printObject({ firstName: 'pork', lastName: 'chops' });


// Exercise #7

var vowels = function(str){

	// This is the starting table of camparision items 

	var ref = ['a', 'e', 'i', 'o', 'u'];

// Takes the string and splits the characters into items and puts them into an array called "array"

	var array =	str.split('');

// This is the array that the characters that meet the if statement will be pushed too

	var targetArray = [];

// This is the logic that compares the characters in the "array" and if they meet the "if" logic will be id for a push to the "targetArray"

	for( i=0; i<array.length; i++){

		if(ref.indexOf(array[i]) !==-1){
				targetArray.push(array[i]);
		}

	}
	return targetArray;

}





console.log(vowels('alabama'));
console.log(vowels('What lets in youth?'));
});
