let mates = ["Juls", "Basil", "Mahmud"];

function renderContacts() {
    const container = document.getElementById('contact-container');
    container.innerHTML = ''; 

    const ul = document.createElement('ul');

    mates.forEach((mate, index) => {
        const li = document.createElement('li');
        li.textContent = mate;
        li.setAttribute('data-index', index); 
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

// adding  contact
function addContact() {
    const newContact = prompt('Enter the name of the new contact:');
    if (newContact) {
        mates.push(newContact); 
        renderContacts(); 
    }
}

// removing  contact
function removeContact() {
    const index = prompt('Enter the number of the contact to remove (1 for the first contact, etc.):');
    const contactIndex = parseInt(index, 10) - 1;

    if (contactIndex >= 0 && contactIndex < mates.length) {
        mates.splice(contactIndex, 1); 
        renderContacts(); 
    } else {
        alert('Invalid contact number.');
    }
}

document.getElementById('add-contact').addEventListener('click', addContact);
document.getElementById('remove-contact').addEventListener('click', removeContact);

document.addEventListener('DOMContentLoaded', renderContacts);
