const title = "";
const outputFilePath = "/Users/alex.taylor";
const items = [/** Insert items here **/];

const _ = require('lodash');
const fs = require('fs');

const output = [];
output.push(`title: ${title}`);
output.push('emojis:');

_.forEach(items, (item) => {
   output.push(`  - name: ${item}`);
   output.push(`    src: https://some-website.com/images/${item}.png`);
});

console.log(output);
fs.writeFile(outputFilePath, output.join('\n'), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

