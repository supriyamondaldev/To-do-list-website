// script.js
(function() {
    emailjs.init("JwE9pkkSykdMINcen"); // Replace with your EmailJS user ID
})();

function addTask() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim(); // Trim whitespace from input

    if (task) {
        const li = document.createElement('li');
        li.textContent = task;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.className = 'delete-button';

        // Add an event listener to the delete button
        deleteButton.onclick = function() {
            li.remove(); // Remove the task from the list
        };

        // Append the delete button to the list item
        li.appendChild(deleteButton);
        document.getElementById('tasks').appendChild(li);

        // Clear the input
        input.value = '';
    } else {
        alert('Please enter a task.');
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return re.test(email);
}

function sendEmail() {
    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    if (isValidEmail(email) && message) {
        // EmailJS configuration
        emailjs.send("service_za4eelr", "_ejs-test-mail-service_", {
            to_email: email,
            message: message
        })
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
            // Clear the input fields after sending
            document.getElementById('emailInput').value = '';
            document.getElementById('messageInput').value = '';
        }, (error) => {
            console.log('FAILED...', error);
            alert('Failed to send email. Please try again later.');
        });
    } else {
        alert('Please enter a valid email and message.');
    }
}

// Bind functions to buttons
document.getElementById('addTaskButton').onclick = addTask; // Button to add tasks
document.getElementById('sendEmailButton').onclick = sendEmail; // Button to send email