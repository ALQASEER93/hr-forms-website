// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Print functionality
function printDocument() {
    window.print();
}

// Form field highlighting
document.addEventListener('DOMContentLoaded', function() {
    const formFields = document.querySelectorAll('.form-field');
    
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.style.backgroundColor = '#e8f4fd';
            this.style.borderColor = '#3498db';
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.style.backgroundColor = '#f9f9f9';
                this.style.borderColor = '#ddd';
            }
        });
    });
});

// Add print button to forms
function addPrintButton() {
    const formContainers = document.querySelectorAll('.form-container');
    
    formContainers.forEach(container => {
        const printBtn = document.createElement('button');
        printBtn.textContent = 'طباعة';
        printBtn.className = 'btn';
        printBtn.style.marginTop = '1rem';
        printBtn.onclick = printDocument;
        
        container.appendChild(printBtn);
    });
}

// Initialize print buttons when page loads
document.addEventListener('DOMContentLoaded', addPrintButton);

