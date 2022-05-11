import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './africa.png';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  element.classList.add('hello');
  btn.onclick = printMe;

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());