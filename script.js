
let name = prompt('What is your full name?');
window.birthday = prompt('What is your birthday? MM/DD/YYYY');

displayAge();// invoke displayAge once
setInterval(displayAge, 1000);

function displayAge(){
  var now = moment();
  var birthday = moment(window.birthday);
  var exactAge = name + " is " + moment.preciseDiff(birthday, now) + " closer to death.";
  document.querySelector('.countdown').innerHTML = exactAge;
};
