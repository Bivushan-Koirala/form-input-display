
let username;
let mySubmit = document.getElementById(`mySubmit`);
mySubmit.onclick = function(){
  username = document.getElementById(`myTxt`).value;
  console.log(username);
  document.getElementById(`myGreeting`).textContent = `Hello ${username}`;
}
