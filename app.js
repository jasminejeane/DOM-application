const form = document.getElementById('registrar');
const input = document.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';

  console.log(text);
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);

  const button = document.createElement('button');
  button.textContent = 'remove';
  li.appendChild(button);

  ul.appendChild(li);
});

ul.addEventListener('change', (e) =>{

  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if(checked){
    listItem.className = 'responded';
  } else{
    listItem.className = '';
  }
});

// for bubbling the event is recieved by the btn but travels up the dom going to the li then the ul element
ul.addEventListener('click', (e) => {

  if(e.target.tagName == 'BUTTON'){
    const li = e.target.parentNode;
    const ul = li.parentNode;

    ul.removeChild(li);

  }
});
