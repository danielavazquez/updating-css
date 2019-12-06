const inputs = document.querySelectorAll('.controls input'); //we select all inputs on page, if console log this you get a node list but it is not an array because we don't have methods on there

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; //dataset is an object that will contain all data-attributes from that specific element || '' nothing is for the base color, has no data attribute
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //this.name console logs spacing, blur, base, .value logs the number when we change it and suffix appends the pixels that's why we created the variable up top
}


//listening for a change event on each of the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

//Can change css variables using JS but can also scope them to update them at a lower scope than using root