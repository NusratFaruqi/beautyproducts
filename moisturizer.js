document.addEventListener('DOMContentLoaded', function() {
    function toggleDescription(productId) {
        const fullDescription = document.getElementById(`full-description${productId}`);
        const readMoreButton = document.getElementById(`read-more-button${productId}`);
    
        if (fullDescription.classList.contains('expanded')) {
            fullDescription.classList.remove('expanded');
            readMoreButton.textContent = 'Read More';
        } else {
            fullDescription.classList.add('expanded');
            readMoreButton.textContent = 'Read Less';
        }
    }
    
    // Add click event listeners for each "Read More" button on the moisturizer page
    document.getElementById('read-more-button1').onclick = function() {
        toggleDescription('1');
    };
    
    document.getElementById('read-more-button2').onclick = function() {
        toggleDescription('2');
    };
    // Add more event listeners for other products on the moisturizer page if needed
});
