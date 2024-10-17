const products = [
    { id: 1, name: 'JBL Headset', price: 1999, image: 'images/download (4).jpeg' },
    { id: 2, name: 'Firebolt watch', price: 2499, image: 'images/WhatsApp Image 2024-10-10 at 10.55.05_2cbd2045.jpg' },
    { id: 3, name: 'Amazon Alexa', price: 999, image: 'images/download.jpeg' },
    { id: 4, name: 'SONY Camera', price: 5, image: 'images/download (1).jpeg' },
    { id: 5, name: 'Meta Quest 3', price: 3499, image: 'images/vr-virtual-reality-headset-on-260nw-2294638591.webp' },
    { id: 6, name: 'Philips Trimmer', price: 1799, image: 'images/WhatsApp Image 2024-10-10 at 11.47.05_b7f0191c.jpg' },
    { id: 7, name: 'JBL Bluetooth Speaker', price: 1299, image: 'images/WhatsApp Image 2024-10-10 at 11.47.06_cd3fea25.jpg' },
    { id: 8, name: 'DJI mini 3 pro DroneCam', price: 2199, image: 'images/download (2).jpeg' },
    { id: 9, name: 'red magic 9 pro', price: 2199, image: 'images/ImageGrabber-6.jpg' },
    { id: 10, name: 'Horizon Prebuild PC', price: 2199, image: 'images/download (3).jpeg' }
];

let cart = [];

// Display products on the page
function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Price: ₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} has been added to the cart!`);
}

// Update cart item count
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Modal functionality for "Contact Us" and "About Us"

// Get modal elements
var contactModal = document.getElementById("contactModal");
var aboutModal = document.getElementById("aboutModal");

// Get "Contact Us" and "About Us" links
var contactUsLink = document.getElementById("contactUsLink");
var aboutUsLink = document.getElementById("aboutUsLink");

// Get close buttons
var closeContactModal = document.getElementById("closeContactModal");
var closeAboutModal = document.getElementById("closeAboutModal");

// Open the "Contact Us" modal
contactUsLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    contactModal.style.display = "block"; // Show modal
});

// Open the "About Us" modal
aboutUsLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    aboutModal.style.display = "block"; // Show modal
});

// Close the "Contact Us" modal
closeContactModal.addEventListener("click", function() {
    contactModal.style.display = "none"; // Hide modal
});

// Close the "About Us" modal
closeAboutModal.addEventListener("click", function() {
    aboutModal.style.display = "none"; // Hide modal
});

// Close modals if user clicks outside of them
window.addEventListener("click", function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none"; // Hide modal
    }
    if (event.target == aboutModal) {
        aboutModal.style.display = "none"; // Hide modal
    }
});

// On page load
window.onload = function() {
    displayProducts();
};
