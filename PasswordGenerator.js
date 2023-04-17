const genPassword = ({ length, complexity }) => {
  let password = "";
  let characters = "";

  if (complexity === "low") {
    characters = "abcdefghijklmnopqrstuvwxyz";
  } else if (complexity === "medium") {
    characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  } else if (complexity === "high") {
    characters = "abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+";
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random * characters.length);
    password += characters[randomIndex];
  }
  return password;
};

let passwordLength = 18; //Change to any length
let passwordComplexity = "high"; //change to any complexity
let password = genPassword(passwordLength, passwordComplexity);
