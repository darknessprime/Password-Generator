let res1 = document.getElementById('res1');
let res2 = document.getElementById('res2');
let len = document.getElementById('len')

const char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generate() {
    
    res1.innerHTML = ran();
    res2.innerHTML =ran();
}

function reset() {
    res1.innerHTML = "";
    res2.innerHTML = "";
}

function ran() {
    let password = "";
    for (let i = 0; i < len.value; i++) {
        password += char[Math.floor(Math.random() * char.length)];
    }
    return password;
}
