
        // User credentials (for example, hardcoded for demonstration)
        const userCredentials = {
            user1: 'pass1',
            user2: 'pass2',
            user3: 'pass3',
            user4: 'pass4',
            user5: 'pass5',
            user6: 'pass6',
            user7: 'pass7',
            user8: 'pass8',
            user9: 'pass9',
            user : 'admin'
        };

        function login(event) {
            // Prevent form from submitting and refreshing the page
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Check if username exists and password is correct
            if (userCredentials[username] && userCredentials[username] === password) {
                // Save the username in localStorage
                localStorage.setItem('username', username);

                // Redirect to the dashboard
                window.location.href = 'centraldashboard.html';
            } else {
                alert('Invalid username or password');
            }
        }
