const screen = document.getElementById('screen');

// Screen par value add karne ke liye
function appendValue(value) {
    // Agar pehle zero hai aur operator nahi hai, to direct overwrite ho jaye
    if (screen.value === '0' && !isNaN(value)) {
        screen.value = value;
    } else {
        screen.value += value;
    }
}

// Sab clear karne ke liye (C button)
function clearScreen() {
    screen.value = '';
}

// Ek single character delete karne ke liye (DE button)
function deleteLast() {
    screen.value = screen.value.toString().slice(0, -1);
}

// Final calculation perform karne ke liye
function calculate() {
    try {
        // eval() expression ko solve karega, basic logic ke liye perfectly fine hai
        if (screen.value !== '') {
            screen.value = eval(screen.value);
        }
    } catch (error) {
        screen.value = 'Error';
        setTimeout(() => {
            clearScreen();
        }, 1500); // 1.5 seconds baad clear ho jayega
    }
}