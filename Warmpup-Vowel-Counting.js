//Warmup: Make a function that counts the number of vowels in a string. 

var countVowels = function(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;

    var input = str.toLowerCase();
    for (var i = 0; i < input.length; i++) {
        if (vowels.includes(input[i])) {
            count++;
        }
    }
    return count;
};