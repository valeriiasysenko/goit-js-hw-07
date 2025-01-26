const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputValue = (event)=>{
 if(event.currentTarget.value === "" || event.currentTarget.value === "    "){
    output.textContent = "Anonymous";
 }
 output.textContent = event.currentTarget.value.trim();
    
};
input.addEventListener("input",inputValue);