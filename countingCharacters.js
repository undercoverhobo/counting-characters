function countingCharacters(stringToCount){
  console.log(stringToCount + " has " + stringToCount.length + " characters.");

}

function countingCharacters2(stringToCount, charactersToFind){
  var characterCount = 0;
  for (var characterPosition = 0;
        characterPosition < stringToCount.length; characterPosition++){
          if (stringToCount[characterPosition] == charactersToFind){
            characterCount++;
          }
        }
        console.log("String to Search in: " + stringToCount);
        console.log("Character to find: " + charactersToFind);
        console.log("Number of times the character appears: " + characterCount);
}

function countingCharacters3(str, search){
    var count = 0;
    var numChars = search.length;
    var lastIndex = str.length - numChars;
    for( var index = 0; index <= lastIndex; index++){
        var current = str.substring(index, index + numChars);

        if(current == search){
            count++
        }
    }
    return count;
}
