// In your header.js file

// Function to toggle the side navigation and update hamburger button visibility
function toggleSideNav() {
    const sideNav = document.querySelector('.side-nav');
    const openSideNavBtn = document.querySelector('.hamburger');
    const closeSideNavBtn = document.querySelector('.close-btn');

    if (sideNav.style.right === '0px') {
        // Close side nav
        sideNav.style.right = '-250px';
        closeSideNavBtn.style.display = 'none';
        openSideNavBtn.style.display = 'block'; // Show the hamburger button
    } else {
        // Open side nav
        sideNav.style.right = '0';
        closeSideNavBtn.style.display = 'block';
        openSideNavBtn.style.display = 'none'; // Hide the hamburger button
    }
}

// Function to handle hamburger button visibility on window resize
function handleHamburgerVisibility() {
    const openSideNavBtn = document.querySelector('.hamburger');
    const sideNav = document.querySelector('.side-nav');

    if (window.innerWidth <= 700 && sideNav.style.right !== '0px') {
        openSideNavBtn.style.display = 'block';
    } else {
        openSideNavBtn.style.display = 'none';
    }
}

// Add event listener to window's resize event
window.addEventListener('resize', handleHamburgerVisibility);

// Call handleHamburgerVisibility initially to set the correct visibility on page load
handleHamburgerVisibility();
