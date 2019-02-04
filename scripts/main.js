/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

alert('Hello');

document.querySelector('html').onclick = function() {
    alert('');
}
*/



var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/SkyrimLogo.png') {
      myImage.setAttribute ('src','images/tamriel.jpg');
    } else {
      myImage.setAttribute ('src','images/SkyrimLogo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to the page, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to the page, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
