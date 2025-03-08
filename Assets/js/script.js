const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

const bmi = (weight / (height * height)).toFixed(2);

const value = document.getElementById('value');

let description = "";
value.classList.add("attention");

document.getElementById('infos').classList.remove('hidden');

if (bmi < 18.5){
    description = "Cuidado! Você está acima do peso!"
} else if ( bmi >=18.5 && bmi <= 25){
description = "Você está no peso ideal!"
    value.classList.remove("attention");
    value.classList.add("normal");
} else if ( bmi >=18.5 && bmi <= 30){
    description = "Cuidado! você está com sobre peso!"
} else if ( bmi >=18.5 && bmi <= 35){
    description = "Cuidado! você está com obesidade moderad!a"
} else if ( bmi >=18.5 && bmi <= 40){
    description = "Cuidado! você está com obesidade severa!"
} else {
    description = "Cuidado você está com obesidade mobirda!"
}




value.textContent= bmi.replace('.',',');
document.getElementById("description").textContent = description

})