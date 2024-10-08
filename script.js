// Smooth scrolling for navigation links
// const navLinks = document.querySelectorAll('nav ul li a');

// navLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();
//         const targetId = link.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);
//         window.scrollTo({
//             top: targetSection.offsetTop - 60,
//             behavior: 'smooth'
//         });
//     });
// });

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const offset = window.innerWidth < 768 ? 50 : 60; // Adjust offset for mobile devices
        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});


// Show scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.classList.add('scroll-to-top');
scrollToTopBtn.textContent = ' Top↑';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Activate skill progress bars on scroll
const skillBars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
        const skillSection = document.getElementById('skills');
        if (window.scrollY + window.innerHeight >= skillSection.offsetTop) {
            bar.style.width = bar.dataset.progress;
        }
    });
});

// // Smooth scroll to Certificates section
// document.querySelector('a[href="#certificates"]').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector('#certificates').scrollIntoView({
//         behavior: 'smooth'
//     });
// });







// /*
// .cpara{
//     font-size: 18px; /* Adjust font size for readability */
//     line-height: 1.6; /* Increase line height for better spacing */
//     background-color: #12343b; /* Light background for highlighting */
//     border-left: 4px solid #007BFF; /* Blue left border for emphasis */
//     border-right: 4px solid #007BFF;
//     padding: 5px 10px; /* Add padding around the text */
//     margin: 20px 0; /* Add margin above and below */
//     border-radius: 20px; 
//     box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
//     font-family: 'Arial', sans-serif;
// }

// */