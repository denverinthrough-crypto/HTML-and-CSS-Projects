document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const loginBtn = document.querySelector('.btn');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = 'Show';
        }
    });

    // Simulate login process
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = passwordInput.value;

        if (!username || !password) {
            alert('Please enter both email and password.');
            return;
        }

        alert(`Logging in as ${username}...`);
    });
});