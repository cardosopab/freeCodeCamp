const date = document.querySelector('#date');

timestamp = Date.now();
const formattedDate = new Date(timestamp).getDate();
console.log(formattedDate);


if(formattedDate % 7 == 0){
    date.innerText = "Today's date is divisible by 7!";
} else {

    date.innerText = "Today's date is NOT divisible by 7!";
}
const currentDate = new Date();
let nextDate = new Date(currentDate);

nextDate.setDate(currentDate.getDate() + 1);

while (nextDate.getDate() % 7 !== 0) {
  nextDate.setDate(nextDate.getDate() + 1);
}

const formattedNextDate = nextDate.toLocaleDateString();
next.innerText = `The next date divisible by 7 is: ${formattedNextDate}`;