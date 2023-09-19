// JavaScript for dynamic content
document.addEventListener('DOMContentLoaded', function () {
    // Featured product data
    const featuredProduct = {
        image: 'images/g400.jpg',
        description: 'The ultimate golf club set for pros and enthusiasts alike.',
        buyLink: 'buy-product.html',
    };

    // Update featured product section
    const productImage = document.getElementById('product-image');
    productImage.style.backgroundImage = `url('${featuredProduct.image}')`;

    const productDescription = document.getElementById('product-description');
    productDescription.textContent = featuredProduct.description;

    const buyNowButton = document.getElementById('buy-now');
    buyNowButton.addEventListener('click', function () {
        window.location.href = featuredProduct.buyLink;
    });
});

// JavaScript for form submission (newsletter)
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission (for demonstration purposes)
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const userEmail = emailInput.value;
    alert(`Subscribed with email: ${userEmail}`);
    emailInput.value = ''; // Clear the input field after submission (for demonstration purposes)
});

