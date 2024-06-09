

let input = document.querySelector("input")


let btn = document.querySelector("button");


btn.addEventListener('click', () => {
  let key = '9f6290d6cda9a36a63755fadee71f83d'
  let city = input.value;


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).
    then((data) => {
      return data.json()

    }).then((res) => {
      console.log(res);
      fun1(res)

    }).catch((er) => {
      console.log(er);
    })



})

let namecity = document.getElementById("namecity")

let maxtemp = document.getElementById("MaxTemp")
let mintemp = document.getElementById("MinTemp")
let visibility = document.getElementById("visibility")
let div = document.querySelector('div')
function fun1(data) {
  console.log(data, "dataset");

  let celcius = data.main.temp;
  console.log(celcius);
  let convert = Math.floor((celcius - 273));
  namecity.innerText = `CITY        : ${data.name}`
  visibility.innerText = `VISIBILITY  : ${data.visibility}`;
  mintemp.innerText = `HUMIDITY    : ${data.main.humidity}`
  maxtemp.innerText = `TEMPERATURE : ${convert} Cel.`

}




let h1 = document.getElementById("hi")
// h1.innerText="suman";
// let doc = document.getElementById('hi')
// doc.innerHTML = "hello";

