// 1. Dark/Light Theme Toggle Feature
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = 'Dark Mode';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    }
});

// 2. Animated Counter Feature for Stats
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 50; // Speed control

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target + (target === 99 ? '%' : '+');
        }
    };
    updateCounter();
});

// 3. Dynamic Form Submission Handle
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // page reload hone se rokta hai
    const name = document.getElementById('userName').value;
    alert(`Thank you, ${name}! Your message has been received successfully.`);
    this.reset(); // clear input fields
});