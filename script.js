
    document.addEventListener("DOMContentLoaded",
    function() {
    const testimonials = [
    {
    quote: "Express Foods has completely transformed my lunchtime routine! As a busy professional in Mumbai, I used to struggle to find time to prepare meals, but with their tiffin delivery service, I now enjoy delicious and nutritious meals every day without any hassle.",
    author: "- Tanvi R."
    },
    {
    quote: "I can't thank Express Foods enough for their amazing service! Their tiffin boxes are always delivered on time, and the food is incredibly fresh and flavorful. It's like having a homemade meal delivered straight to my office every day!",
    author: "- Supriya P."
    },
    {
    quote: "I highly recommend Express Foods to anyone looking for a reliable and convenient tiffin delivery service in Mumbai. Their menu offers a great variety of dishes, and their portion sizes are generous. Plus, their customer service is top-notch",
    author: "- Adnan S."
    },
    {
    quote: "Being a student away from home, I missed my mom's cooking terribly. But thanks to Express Foods, I now get to enjoy delicious home-cooked meals every day. It's affordable, convenient, and always satisfies my cravings",
    author: "- Giridhar G."
    },
    {
    quote: "Express Foods has become a lifesaver for me! With my hectic schedule, I hardly have time to cook, but their tiffin delivery service ensures that I never go hungry. Their food is consistently delicious, and I love the variety they offer.",
    author: "- Bob D."
    }
    // Add more testimonials as needed
    ];
    
    const testimonialSlider = document.querySelector(".testimonial-slider");
    
    testimonials.forEach(testimonial => {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.classList.add("testimonial");
    testimonialDiv.innerHTML = `
    <p>"${testimonial.quote}"</p>
    <p class="author">${testimonial.author}</p>
    `;
    testimonialSlider.appendChild(testimonialDiv);
    });
    
    
    });
    
    function showGreeting() {
    var greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = "Welcome to Express Foods - Where Every Meal Feels Like Home!";
    greetingElement.style.opacity = 1; // Set initial opacity to fully visible
    
    // Fade out the greeting message gradually
    var fadeOutInterval = setInterval(function() {
    if (greetingElement.style.opacity > 0) {
    greetingElement.style.opacity -= 0.01; // Reduce opacity gradually
    } else {
    clearInterval(fadeOutInterval); // Stop the interval when opacity reaches 0
    greetingElement.innerHTML = ""; // Clear greeting message
    }
    }, 100); // Adjust the interval duration for smoother animation
    }
    
    // Call the function when the page loads
    window.onload = showGreeting;
    
    
    
    
    let currentService = 1;
    
    function changeService(offset) {
    currentService += offset;
    const services = document.querySelectorAll('.service');
    
    if (currentService < 1) {
    currentService = services.length;
    } else if (currentService > services.length) {
    currentService = 1;
    }
    
    services.forEach(service => {
    service.style.display = 'none';
    });
    
    services[currentService - 1].style.display = 'block';
    }
    
    // Automatically change service every 3 seconds
    setInterval(() => {
    changeService(1);
    }, 3000);
    
    
    document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
    });
    });
    
    
    document.addEventListener("DOMContentLoaded", function() {
    const logoContainer = document.querySelector(".logo-container");
    const header = document.getElementById("header");
    const logoHeight = logoContainer.offsetHeight;
    
    // Update header background color as user scrolls
    document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    
    
    // Add sticky class to logo container when scrolling past it
    if (scrollPosition > logoHeight) {
    logoContainer.classList.add("sticky");
    } else {
    logoContainer.classList.remove("sticky");
    }
    });
    });
    
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
    } else {
    document.getElementById("backToTopBtn").style.display = "none";
    }
    }
    
    function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
