function telephoneCheck(str) {
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  
    return regex.test(str);
  }

console.log(telephoneCheck("1 555)555-5555"), false);
console.log(telephoneCheck("(6054756961)"), false);
console.log(telephoneCheck("-1 (757) 622-7382"), false);
console.log(telephoneCheck("11 555-555-5555"), false);
console.log(telephoneCheck("55 55-55-555-5"), false);