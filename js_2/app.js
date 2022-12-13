let tmp = prompt ("Яка зараз пора року?");
console.log(tmp);

let count = 0;

if (tmp === "Зима"  ) {
    alert("Правильно!");
count++;
}

else (alert( "Ви відповіли не правильно!")
);


 


tmp = prompt ("Який зараз місяць?");
console.log(tmp);

if (tmp === "Грудень") {
    alert("Правильно!");
    count++;
}

else (
    alert( "Ви відповіли не правильно!")
 );




 
 tmp = prompt ("Скільки днів у грудні?");
console.log(tmp);

if (tmp === "31") {
    alert("Правильно!");
    count++;
}

else (
    alert( "Ви відповіли не правильно!")
 );



 
 
 tmp = prompt ("Який зараз рік?");
console.log(tmp);

if (tmp === "2022") {
    alert("Правильно!");
    count++;
}
    
else (alert( "Ви відповіли не правильно!")
 );


 
 tmp = prompt ("Яка столиця України?");
 console.log(tmp);

 if (tmp === "Київ") {
    alert("Правильно!");
    count++;
}

else (alert( "Ви відповіли не правильно!")
 )

 if (count <= 2) {
    console.log("Ви відповіли на", count, "запитань з 5 можливих");
    alert("Погано");
  } else if ((count > 3, count <= 4)) {
    console.log("Ви відповіли на", count, "запитань з 5 можливих");
    alert("Добре");
  } else if (count == 5) {
    console.log("Ви відповіли на", count, "запитань з 5 можливих");
    alert("Молодець");
  }

  
// Task2

let number = parseInt(prompt("Вкажіть номер")) ;

console.log(number, number === 12);

if(number >= 1 && number <= 2) {
    alert('Зима');
} else if(number >= 3 && number <= 5) {
    alert('Весна');

} else if(number >= 6 && number <= 8) {
    alert('Літо');
}
 else if(number >= 9 && number <= 11) {
    alert('Осінь');
}  else if(number === 12) {
    alert('Зима');
}
else {
    alert("Не існує");
 }