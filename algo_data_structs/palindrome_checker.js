function palindromeChecher(string) {
    // remove non-alphanumeric, and toLowerCase()
    string = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // reverse, and compare
    let reversed;
    reversed = string.split('').reverse().join('');
    return string === reversed;
}
let string = 'Racec#ar';
console.log(palindromeChecher(string))