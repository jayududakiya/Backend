const path = require('path');
/*
?  Method        ======>         Description -------------- 

* basename()     ======> Returns the last part of a path
* dirname()      ======> Returns the directories of a path 
* extname()      ======> Returns the file extension of a path
* isAbsolute()   ======> Returns true if a path is an absolute path, otherwise false
* join(.)        ======> Joins the specified paths into one // ! impotent
* format(_)      ======> Formats a path object into a path string
* normalize(_)   ======> Normalizes the specified path
* parse()        ======> Formats a path string into a path object
* posix          ======> Returns an object containing POSIX specific properties and methods
* relative()     ======> Returns the relative path from one specified path to another specified path
* resolve()      ======> Resolves the specified paths into an absolute path

? sep            ======> Returns the segment separator specified for the platform
? win32          ======> Returns an object containing Windows specific properties and methods
? delimiter      ======> Returns the delimiter specified for the platform // ! this was return ";" 
? __dirname      ======> Returns current the base name of directory
? __filename     ======> Returns current  the file name of directory

*/ 


const pathEx01 = '/Users/Ref/demo_path.txt'
const pathEx02 = 'D:/SQ_Class/Backend/NodeJs/path/path.js'

/* ------------------- // TODO :=>  __dirname ,  __filename , delimiter , sep , win32 ------------------ */

// console.log(path.delimiter);
// console.log(__dirname);  // D:\SQ_Class\Backend\NodeJs\pathEx01/
// console.log(__filename); // D:\SQ_Class\Backend\NodeJs\path\path.js
// console.log(path.sep);
// console.log(path.win32)


/* ------------------------- // TODO :=>  basename() ------------------------ */

// let fileName = path.basename(pathEx01); 
// console.log(fileName); // * demo_path.txt
// fileName = path.basename(pathEx02); 
// console.log(fileName); // * path.js

/* -------------------------- // TODO :=> dirname() ------------------------- */

// let dirname = path.dirname(pathEx01);
// console.log(dirname);
// dirname = path.dirname(pathEx02);
// console.log(dirname);

/* -------------------------- // TODO :=> extname() ------------------------- */

// let extname = path.extname(pathEx01);
// console.log(extname);
// extname = path.extname(pathEx02);
// console.log(extname);

/* ------------------------ // TODO :=> isAbsolute() ------------------------ */

// let isAbsolute = path.isAbsolute(pathEx01);
// console.log(isAbsolute); // * true
// isAbsolute = path.isAbsolute(pathEx02);
// console.log(isAbsolute); // * true

// const Absolute = 'D:\SQ_Class\Backend\NodeJs\path\path.js'
// isAbsolute = path.isAbsolute(Absolute);
// console.log(isAbsolute); // * false


/* --------------------------- // TODO :=> join() --------------------------- */

// let join = path.join(__dirname , "dirFiles" , "newFile.html")
// console.log(join);
// join = path.join( "E:","newFolder", "dirFiles" , "newFile.html")
// console.log(join);

/* ------------------------ // TODO :=> normalize(_) ------------------------ */

// let normalize = path.normalize(pathEx01);
// console.log(normalize);

/* -------------------------- // TODO :=> parse(_) -------------------------- */

// let parse = path.parse(pathEx01);
// console.log(parse);
// parse = path.parse(pathEx02);
// console.log(parse);

/* -------------------------- // TODO :=> format() -------------------------- */

// parse = path.parse(pathEx02);
// let format = path.format(parse)
// console.log(format);

// format = path.format({
//     root: 'E:/',
//     dir: 'E:/Backend/path',
//     base: 'path.txt',
//     ext: '.txt',
//     name: 'path'
//   })
// console.log(format);

/* ------------------------- // TODO :=> relative(_) ------------------------ */

// let relative = path.relative("D:/SQ_Class/Backend/NodeJs/path","D:/SQ_Class/Backend/NodeJs/http")
// console.log(relative);
// relative = path.relative("D:/SQ_Class/Backend/NodeJs/path","D:/SQ_Class/Backend/NodeJs/http/server")
// console.log(relative);

/* ------------------------- // TODO :=> resolve(_) ------------------------- */

// let resolve = path.resolve(pathEx02)
// console.log(resolve);

