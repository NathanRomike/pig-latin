var startsWithVowel = function(word) {
    var pattern = /^[aeiou]/i;

    return (word.match(pattern) !== null);
};

var startsWithQU = function(word) {
  var pattern = /^qu/i;

  return (word.match(pattern) !== null);
};

    var pigLatin = function(sentence) {
        var words = sentence.split(" ");

        for (var i in words) {
            if (startsWithQU(words[i])) {
                words[i] = words[i].slice(2) + words[i].slice(0, 2).toLowerCase() + "ay";
            }

        else if (!startsWithVowel(words[i])) {
                words[i] = words[i].slice(1) + words[i].slice(0, 1).toLowerCase() + "ay";
            }

        return words.join(" ");
      }
    };

    $(document).ready(function() {
  $('form#pig_latin').submit(function(event) {
    var word = $('input#word').val();
    var result = pigLatin(word);

    $('#result').append(result + " ");
    event.preventDefault();
  });
});
