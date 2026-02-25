function updateClock() {
    const now = new Date();
    
    // Time formatting
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Date formatting
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
    
    // Dynamic Greeting
    const greetingElement = document.getElementById('greeting');
    const hour = now.getHours();
    
    if (hour < 12) {
        greetingElement.textContent = "Good Morning, Xiang";
    } else if (hour < 18) {
        greetingElement.textContent = "Good Afternoon, Xiang";
    } else {
        greetingElement.textContent = "Good Evening, Xiang";
    }
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);
