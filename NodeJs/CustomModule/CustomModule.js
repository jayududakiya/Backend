const Sum = (a,b) => a*b;
const add = (a,b) => a+b;
const sub = (a,b) => a-b;


const Prints = (text) => {
    let TXT = "=================> " + text
    // console.log(TXT);
    return TXT
}

exports.PrintCommit = (text) => {
    let TXT = `-------------------- ${text} ---------------------`
    // console.log(TXT);
    return TXT
}

// module.exports = {
//     Sum,add,sub,Prints
// } 