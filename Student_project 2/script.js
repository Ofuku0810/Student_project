
let currentImageIndex = 1;

// Function to add an item to the cart
function addToCart(itemName) {
    alert(itemName + ' added to cart!');
}

// Function to open the review form modal
function openReviewForm(itemId) {
    document.getElementById('reviewModal').style.display = 'block';
    // Pass the itemId to the form for processing
    document.getElementById('reviewModal').dataset.itemId = itemId;
}

// Function to close the review form modal
function closeReviewForm() {
    document.getElementById('reviewModal').style.display = 'none';
}

// Function to submit a review
function submitReview() {
    const itemId = document.getElementById('reviewModal').dataset.itemId;
    const reviewText = document.getElementById('reviewText').value;
    alert('Review submitted for Item ' + itemId + ': ' + reviewText);
    // Additional logic to handle the review submission (e.g., update ratings)
    closeReviewForm();
}

const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', function () {
    nav.classList.toggle('show');
});

document.querySelector('.order-now-button').addEventListener('click', function () {
    // Add your logic for handling the "Order Now" button click, e.g., redirecting to an order page
    alert('Order Now button clicked!');
});
function incrementQuantity() {
    var quantityInput = document.querySelector('.quantity-input');
    var currentValue = parseInt(quantityInput.value);
    if (currentValue < 10) {
        quantityInput.value = currentValue + 1;
    }
}

function decrementQuantity() {
    var quantityInput = document.querySelector('.quantity-input');
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function addToCart() {
    var productName = document.querySelector('.product-title').textContent;
    var price = document.querySelector('.price').textContent;
    var quantity = document.querySelector('.quantity-input').value;
    
    console.log('Product added to cart:', {
        productName: productName,
        price: price,
        quantity: quantity
    });
}

//let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');

function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    
    images.forEach((image, i) => {
        if (i === currentIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function changeImage(direction) {
    showImage(currentIndex + direction);
}

// Initially show the first image
showImage(currentIndex);

const ratings = [];

function updateRating() {
    const ratingInput = document.getElementById('rating');
    const selectedRating = document.getElementById('selectedRating');
    selectedRating.textContent = ratingInput.value;
}

function calculateAverage() {
    const ratingInput = document.getElementById('rating');
    const averageRating = document.getElementById('averageRating');
    
    const ratingValue = parseInt(ratingInput.value);
    if (!isNaN(ratingValue) && ratingValue >= 1 && ratingValue <= 10) {
        ratings.push(ratingValue);
        const average = ratings.reduce((sum, value) => sum + value, 0) / ratings.length;
        averageRating.textContent = `Average: ${average.toFixed(2)}`;
        ratingInput.value = ''; // Clear the input after entering a valid rating
    }
}

// Trigger calculateAverage function when Enter key is pressed
document.getElementById('rating').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        calculateAverage();
    }
});