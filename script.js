class Smoothie {
  constructor(name, ingredients, size, toppings) {
      this.name = name;
      this.ingredients = ingredients;
      this.size = size;
      this.toppings = toppings;
  }
}

// Get references to the form and output section
const smoothieForm = document.getElementById('smoothieForm');
const outputSection = document.getElementById('outputSection');

// Add an event listener to the form's submit button
const orderBtn = document.getElementById('orderBtn');
orderBtn.addEventListener('click', function() {
  // Get the values from the form fields
  const name = document.getElementById('nameInput').value;
  const ingredients = [...document.querySelectorAll('input[name="ingredient"]:checked')].map(checkbox => checkbox.value);
  const size = document.getElementById('sizeSelect').value;
  const toppings = [...document.querySelectorAll('input[name="topping"]:checked')].map(checkbox => checkbox.value);

  // Create a new Smoothie instance
  const smoothie = new Smoothie(name, ingredients, size, toppings);

  // Display the smoothie details in the output section
  outputSection.innerHTML = `
      <h3>Your Smoothie Order:</h3>
      <p>Name: ${smoothie.name}</p>
      <p>Ingredients: ${smoothie.ingredients.join(', ')}</p>
      <p>Size: ${smoothie.size}</p>
      <p>Toppings: ${smoothie.toppings.join(', ')}</p>
      <p>ENJOY YOUR SMOOTHIE!!!</p>
  `;
});
