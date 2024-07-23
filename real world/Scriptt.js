// To-Do List Functionality
function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();
    
    if (todoText !== '') {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        li.textContent = todoText;
        li.onclick = function() {
            this.remove();
        };
        todoList.appendChild(li);
        input.value = ''; // Clear the input
    }
}

// Calculator Functionality
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || ''; // Evaluate the expression
    } catch (e) {
        display.value = 'Error'; // Display error if invalid expression
    }
}

// Initialize Pikaday Calendar
var picker = new Pikaday({ 
    field: document.getElementById('datepicker'),
    format: 'YYYY-MM-DD',
    minDate: new Date(),
    maxDate: new Date().setFullYear(new Date().getFullYear() + 1),
    yearRange: [2020, 2025]
});

// Digital Clock Functionality
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set clock immediately
