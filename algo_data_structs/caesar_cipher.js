function rot13(str) {
    let result = '';
    for (let i in str) {
        let value = str.charCodeAt(i);
        if (value >= 65 && value <= 90) {
            value -= 13;
            if (value < 65) {
                value = wrap(value, 65, 90);
            }
        }
        else if (value >= 97 && value <= 122) {
            value -= 13;
            if (value < 97) {
                value = wrap(value, 97, 122);
            }
        }
        else {
            result += str[i];
            continue;
        }
        result += String.fromCharCode(value);
    }
    return result;
}
function wrap(value, lowerbounds, upperbounds) {
    let underflow = (lowerbounds % value);
    return upperbounds - underflow + 1;
}
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("serr pbqr pnzc"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("Serr Cvmmn!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));