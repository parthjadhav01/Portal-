// Simulate user login and their access level
const userAccess = {
    user1: [1], // Only Raw Material Stage
    user2: [2], // Raw Material Stage, Grading Test
    user3: [3], // Raw Material Stage, Grading Test, Material Cutting
    user4: [4], // Raw Material Stage, Grading Test, Material Cutting, Forging
    user5: [5], // Raw Material Stage, Grading Test, Material Cutting, Forging, Hardening
    user6: [6], // User can access up to the H&T Shop
    user7: [7], // User can access CNC
    user8: [8], // User can access Quality Testing
    user9: [9],
    user :[1,2,3,4,5,6,7,8,9] // User has access to all
};

// Assuming the username is stored in the localStorage after login
const loggedInUser = localStorage.getItem('username'); // Retrieve the logged-in user's name
const accessList = userAccess[loggedInUser] || []; // Get the access list for the logged-in user

// Function to handle card visibility based on access level
function adjustAccess() {
    if (!loggedInUser) {
        alert('Please log in first.');
        window.location.href = 'login.html'; // Redirect to login page if not logged in
        return;
    }

    // Iterate through each card and enable/disable based on user access
    for (let i = 1; i <= 9; i++) {
        const card = document.getElementById(`card${i}`);
        if (accessList.includes(i)) {
            card.style.pointerEvents = 'auto'; // Enable the card
            card.style.opacity = '1'; // Make the card visible
        } else {
            card.style.pointerEvents = 'none'; // Disable the card
            card.style.opacity = '0.5'; // Make the card semi-transparent
        }
    }
}

// Call the function to adjust access when the page loads
window.onload = adjustAccess;

// Function to handle navigation (simply for demonstration)
function navigate(page) {
    window.location.href = page; // Navigate to the page
}
