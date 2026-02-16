const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputValue = (event) => {
   const value = event.currentTarget.value.trim();
   if (value === "") {
      output.textContent = "Anonymous";
   } else {
      output.textContent = value;
      
   }
};
input.addEventListener("input",inputValue);