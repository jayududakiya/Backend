const { log } = require('console');
const fs = require('fs');
const path = require('path');

/* ----------------------------------- // TODO : open() & openSync()  ----------------------------------- */

// * syntax  Async Method  ====> fs.open("file path",callBack : (error , result)=>{})
    
    // fs.open("./testWrite.txt",(error) => {
        //     (error) ? console.log(error) : console.log("file is open successFully")
// })


// * syntax Sync Method ===> fs.openSync("file path")

// fs.openSync("./test.txt")
// console.log("File is Open");


/* ----------------------------------- // TODO : close() & closeSync()  ----------------------------------- */



// fs.open("./testWrite.txt",(err,res)=>{
//     if (err) {
//         return err        
//     }else{
//         console.log("file was Open",res);
//         fs.closeSync(res) // ! file was close auto 
//         return res
//     }
// })

// const OpenFile = fs.openSync('./testWrite.txt')

// fs.close(OpenFile , (error,rs)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(OpenFile,"was Close ");
//     }
// })

// * syntax  Sync Method

// fs.closeSync(OpenFile);
// console.log(OpenFile,"was Close ");



/* ----------------------------------- // TODO : writeFile() & writeFileSync()  ----------------------------------- */

// * syntax  Async Method  ====> fs.writeFile("file path",add text Content for file,callBack : (error , result)=>{})
    
    const date = new Date();
    
    const textContent = `hello this is write file content text \n date is : ${date.toLocaleDateString()} , \n time is : ${date.toLocaleTimeString()}`
    
// fs.writeFile("./testWrite.txt",textContent,(error,result)=>{
//         if (error) {
//                 console.log(error);
//             }else{
//     console.log("file is write.. OK");
// }
// })

// * syntax  sync Method  ====> fs.writeFile("file path",add text Content for file,callBack : (error , result)=>{})
    
    
// fs.writeFileSync("./testWrite2.txt",textContent.toLocaleUpperCase())
// console.log("file was write successFully");

/* ----------------------------------- // TODO :  readFile() & readFileSync()  ----------------------------------- */
    
// * syntax  Async Method  ====> fs.writeFile("file path" , file read Type  , callBack : (error , result)=>{})
    
// fs.readFile("./testWrite2.txt","utf-8",(error,result)=>{
//     if(error) console.log(error);
//     else console.log("file is reading :===> ",result);
// })
    
// * syntax  Async Method  ====> const ReadData =  fs.writeFileSync("file path" , file read Type)

// const ReadData =  fs.readFileSync("./testWrite2.txt","utf-8")
// console.log("ReadData ===> ",ReadData);

/* ----------------------------------- // TODO :  appendFileSync() & appendFileSync()  ----------------------------------- */


// * syntax  Async Method  ====> fs.appendFile("file path" , add text Content , callBack : (error , result)=>{})

// fs.appendFile("./testWrite.txt",`\n append Data : ${textContent}`,(error,result)=>{
//     if (error) {
//         console.log(error);
//     }else console.log("file was update.. Ok");
// })

// * syntax  sync Method  ====> fs.appendFileSync("file path" , add text Content)

// fs.appendFileSync("./testWrite.txt",`\n append Sync Data : ${textContent}`)
// console.log("Sync is update....");


/* ----------------------------------- // TODO : rename() & renameSync() ----------------------------------- */


// * syntax  Async Method  ====> fs.rename(" old file Name with path " , " new File name with path" , callBack  : (error,result)=>{})

// fs.rename("./NewTest.txt","./testName.txt",(error,result)=>{
//     if (error) {
//         console.log(error);
//     }else{
//         console.log("file new was Complete");
//     }
// })

// * syntax  sync Method  ====> fs.renameSync(" old file Name with path"," new File name with path")

// fs.renameSync("./testName.txt" , "./NewTest.txt")
// console.log("Sync file new was Complete");

// fs.renameSync("./demo.txt" , "./demo.svg")
// console.log("file extension was change sussesfull");

/* ----------------------------------- // TODO : unlink() & unlinkSync() ----------------------------------- */

// ! unlink method used to  delete file 

// * syntax  Async Method  ====> fs.unlink("file path / name" , callBack  : (error,result)=>{})


// fs.unlink("./testWrite.txt" , (error,result)=>{
//     if (error) {
//         console.log(error);
//     }else{
//         console.log(result);
//         console.log("file was deleted");
//     }
// })

// * syntax  sync Method  ====> fs.unlink("file path / name")

// fs.unlinkSync("./testWrite.txt")


/* ----------------------------------- // TODO : copyFile() & copyFileSync() ----------------------------------- */

// * syntax  sync Method  ====> fs.copyFile("BASE copyFileName" , "COPY FILE NAME" , CALLBACK : (error,result)=>{})

// fs.copyFile('./NewTest.txt', './CopyFiles/destination.txt',(error,result)=>{
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('NewText.txt was copied to destination.txt');
//     }
// });

// * syntax  sync Method  ====> fs.copyFileSync("BASE copyFileName" , "COPY FILE NAME")

// fs.copyFileSync('./NewTest.txt', './CopyFiles/copy_01.cpp');
// console.log('NewText.txt was copied to destination.txt');

/* ----------------------------------- // TODO : mkdir() & mkdirSync() ----------------------------------- */


// * syntax  Async Method  ====> fs.mkdir("directoryName/..././" ,CALLBACK : (error,rs)=>{})

// fs.mkdir("./newDir/mkDir/new01",(error,result)=>{
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("dir was Created ");
//         fs.writeFileSync("./newDir/mkDir/test.txt" , "Hello TEST ");
//     }
// })

// * syntax  sync Method  ====> fs.mkdirSync("directoryName/..././")

// fs.mkdirSync("newDir/")
// console.log("dir was Created ");


/* ----------------------------------- // TODO : join() & joinSync() ----------------------------------- */


// const JOIN = path.join(__dirname , "textDir" , "newDir")
// console.log(JOIN);
// console.log(__dirname);
