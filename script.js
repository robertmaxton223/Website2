// Toggle functionality for the 3-line menu
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

// Admin Panel Link - Prompt for User/Pass
document.getElementById('adminLink').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    
    const correctUser = "ashraful";
    const correctPass = "152007";
    
    let username = prompt("এডমিন ইউজারনেম দিন:");
    let password = prompt("পাসওয়ার্ড দিন:");
    
    if (username === correctUser && password === correctPass) {
        alert("লগইন সফল! আপনাকে এডমিন প্যানেলে নিয়ে যাওয়া হচ্ছে।");
        // In a real application, you would redirect to the admin panel page here.
        // For now, we'll just redirect to a dummy page or a URL
        window.location.href = "admin_panel.html"; 
    } else {
        alert("ভুল ইউজারনেম বা পাসওয়ার্ড! আবার চেষ্টা করুন।");
    }
});
