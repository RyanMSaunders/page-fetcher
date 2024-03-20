
const request = require('request');

const url = process.argv[2];
const localFilePath = process.argv[3];

if (!url || !localFilePath) {
  console.error('You must provide both a URL and a local file path.');
  process.exit(1); // Exits the program indicating that an error occurred
}


request(url, localFilePath, (error, response, body) => {
  const fs = require('fs');
  const content = body;
  const contentLength = body.length;

  fs.writeFile(localFilePath, content, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
      console.log(`Downloaded and saved ${contentLength} bytes to ./index.html`)
    }
  });
});