function getInfo() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  if (age >= 18) {
    prompt("what is your email address?");
    alert(`Thank you, ${name}! We will be in touch soon!`);
  } else {
    alert(
      `Sorry ${name}. You must get permission from a guardian to continue.`
    );
  }
}
let climbingBuddy = document.querySelector("button");
climbingBuddy.addEventListener("click", getInfo);
