// Function to display contacts
function showContacts() {
   const mates = ["Juls", "Basil", "Mahmud"];
   let output = '';

   // Create an unordered list
   output += '<ul>';
   for (let mate of mates) {
       output += `<li>${mate}</li>`; // Add each contact as a list item
   }
   output += '</ul>';

   return output;
}

// Add the contacts list to the page
document.addEventListener('DOMContentLoaded', () => {
   // Select a container or create one dynamically
   const container = document.createElement('div');
   container.className = 'contact-list';
   container.innerHTML = showContacts();

   // Append the container to the body or another element
   document.body.appendChild(container);
});
