let args = process.argv;
args = args.slice(2);

const pigLatin = function (s) {
  let newString = '';
  let firstCharacter = '';
  let final = []
  for (i = 0; i < s.length; i++) {
    firstCharacter = s[i][0];
    for (j = 0; j < s[i].length; j++) {
      newString = s[i].substring(1) + firstCharacter + 'ay' + ' ';
    }
    final.push(newString);
  }
  return final.join("");
}

console.log(pigLatin(args));