const mapping = {
	"Hello": "Ahoj :)",
  "Bum bác": "<3"
};
let submit_button = document.querySelector("input[type=submit]");
submit_button.addEventListener("click", event => {
	let text_field = document.querySelector(".answer")
  let written = document.querySelector("#name").value
  let answer = mapping[written]
  if(answer === undefined){
  	text_field.innerHTML = "Takové slovo tam nebylo :D"
  }
  else{
  	text_field.innerHTML = answer
  }
  event.preventDefault();
});
console.log(submit_button);
