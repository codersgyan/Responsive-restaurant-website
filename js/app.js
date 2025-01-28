$(document).ready(function(){
   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]

   });

   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
});

// Get references to input, button, and message elements
const emailInput = document.getElementById('emailInput');
const subscribeButton = document.getElementById('subscribeButton');
const message = document.getElementById('message');

// Add event listener to the subscribe button
subscribeButton.addEventListener('click', () => {
    const email = emailInput.value.trim();

    // Validate email format using a regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        message.style.display = 'block';
        message.style.color = 'red';
        message.textContent = 'Please enter an email address.';
    } else if (!emailPattern.test(email)) {
        message.style.display = 'block';
        message.style.color = 'red';
        message.textContent = 'Please enter a valid email address.';
    } else {
        message.style.display = 'block';
        message.style.color = 'green';
        message.textContent = 'Thank you for subscribing!';
        emailInput.value = ''; // Clear the input field

        // Simulate a form submission or call an API
        console.log('Subscribed with email:', email);
    }
});
