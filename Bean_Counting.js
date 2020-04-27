const str = "Be good, BBe Hardworking"
const string1 = "I am learniBng javascript"
const letter = 'i'

function countBs(str1) {
    count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "B") {
            count++;
        }

    }
    console.log(count)
    }

countBs(str)    

function countChar(string,letter) {
    count = 0;
    for(let i = 0; i<string.length;i++) {
        if(string[i] === letter) {
            count++;
        }
    }
    console.log(count)
    
}
countChar(string1,letter)