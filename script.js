// Add JavaScript for beautifying the website and implementing a slider

// Function to initialize the image slider
function initSlider() {
    const slides = document.querySelectorAll('.slider-item');
    let currentSlide = 0;

    function showSlide(slideIndex) {
        if (slideIndex < 0) {
            currentSlide = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            currentSlide = 0;
        }

        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        slides[currentSlide].style.display = 'block';
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    // Display the first slide
    showSlide(currentSlide);

    // Set up click events for next and previous buttons
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
}

// Call the slider initialization function
initSlider();

// Add any additional JavaScript for beautifying the website here


// Add JavaScript for the image slider in the "About Us" section



// Get all "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more-button');

// Loop through each button and add a click event listener
readMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Find the closest ".facewash-product" div
        const productDiv = button.closest('.facewash-product');

        // Find the ".full-description" span inside the product div
        const fullDescription = productDiv.querySelector('.full-description');

        // Toggle the visibility of the full description
        fullDescription.classList.toggle('visible');

        // Change the button text based on visibility
        if (fullDescription.classList.contains('visible')) {
            button.textContent = 'Read Less';
        } else {
            button.textContent = 'Read More';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const reviews = [
        { rating: 5, comment: "Great product! It really improved my skin's texture." },
        { rating: 4, comment: "I've been using this serum for a month, and I can see a noticeable difference." },
        // Add more reviews here
    ];

    // Function to calculate the average rating
    function calculateAverageRating(reviews) {
        if (reviews.length === 0) return 0;

        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (totalRating / reviews.length).toFixed(1);
    }

    // Function to display reviews
    function displayReviews() {
        const reviewSection = document.getElementById('review');
        const reviewContainer = document.createElement('div');
        reviewContainer.className = 'reviews-container';

        const averageRating = calculateAverageRating(reviews);

        // Display average rating
        const averageRatingElement = document.createElement('p');
        averageRatingElement.textContent = `Average Rating: ${averageRating}`;
        reviewContainer.appendChild(averageRatingElement);

        // Display individual reviews
        reviews.forEach((review, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review';

            // Display star rating (You can customize this part)
            const starRating = document.createElement('div');
            starRating.className = 'stars';
            starRating.textContent = '★'.repeat(review.rating);
            reviewDiv.appendChild(starRating);

            // Display customer comment
            const comment = document.createElement('p');
            comment.textContent = review.comment;
            reviewDiv.appendChild(comment);

            reviewContainer.appendChild(reviewDiv);
        });

        reviewSection.appendChild(reviewContainer);
    }

    // Call the function to display reviews
    displayReviews();
});





document.addEventListener('DOMContentLoaded', function() {
    const brandLinks = document.querySelectorAll('nav ul li a');

    brandLinks.forEach(function(brandLink) {
        brandLink.addEventListener('click', function(event) {
            event.preventDefault();
            const brandPage = brandLink.getAttribute('href');
            console.log(`Clicked on brand link: ${brandPage}`);
            window.location.href = brandPage;
        });
    });
});
