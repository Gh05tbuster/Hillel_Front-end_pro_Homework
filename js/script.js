const name = prompt('Enter your name:');
if (name) alert(`Welcome, ${name}! How are you doing?`)
else if (!name) {
    alert('Error, your name can\'t be empty!');
}
