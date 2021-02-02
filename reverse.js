let args = process.argv;
args = args.slice(2);

const reverse = function (s) {
  let newString = '';
  for (i = 0; i < s.length; i++) {
    for (j = s[i].length; j > -1; j--) {
      newString += s[i].charAt(j);
    }
    newString += "\n"
  }
  return newString;
}
console.log(reverse(args));
