// streams is used to make large file system faster by sending it through pieces
const fs =require('fs');

const readstream = fs.createReadStream('./docs/blog3.txt',{ encoding: 'utf8'});
const writestream = fs.createWriteStream('./docs/blog4.txt');
// chunk it`s like a piece of data 

// readstream.on('data',(chunk) => {
//     console.log('---newchunk----');
//     console.log(chunk);
//     writestream.write('\n NEW CHUNK \n');
//     writestream.write(chunk);
// });

// piping is used to write in file what is read from another
readstream.pipe(writestream);