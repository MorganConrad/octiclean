/*
   Simple-minded, not very robust command line program to shorten an octicon sprite.svg file by keeping only sprites you want
   e.g., to shorten sprite.octicons.svg in current directory, keeping only bell and chevron-up
   node octiclean . bell chevron-up > myOutputFile.svg
*/

var fs = require('fs');

if (process.argv.length < 4) {
   console.log('Usage: node octiclean path-to-sprite.octicons.svg keep0 keep1    or');
   console.log('       node octiclean path-to-sprite.octicons.svg keep0,keep1,...')
   process.exit();
}

var octiconFilename = process.argv[2];
if (octiconFilename.lastIndexOf('.svg') !== (octiconFilename.length-4))  // add standard name unless provided
   octiconFilename = octiconFilename + '/sprite.octicons.svg';  //assume its a directory
   
var keepers = [];
if (process.argv.length > 4) {
   keepers = process.argv.slice(3);
}
else
  keepers = process.argv[3].split(',');

var octicons = fs.readFileSync(octiconFilename,  'utf8');
var split = octicons.split('<symbol');

console.log(split[0]);

var keep;
for (var i=0; i<split.length; i++) {
   var s = split[i];
   var match = s.match( /id="(.*?)"/ );
   keep = match && keepers.indexOf(match[1]) >= 0;
   if (keep) {
      console.log('<symbol' + s);
   }
}

if (!keep)  // add final </svg> if needed
   console.log('</svg>');




