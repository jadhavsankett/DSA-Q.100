//Accept an english alphabet from user and check if it is a consonent or a vowel;


const prompt = require('prompt-sync')();
let a = prompt('enter the alphabet A - z : ');

if(a == "a"|| a== "e" || a== "i"|| a=="o"|| a=="u"){
    console.log(`${a} is vowel`)
}
else{
    console.log(`${a} is consonent`);
}


