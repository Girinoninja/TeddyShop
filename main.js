// Product data
const products = [
    {
      id: 1,
      name: "Teddy - 10.5 Orso",
      image: "public/progetto-senza-titolo--21--1.png",
      price: "$24",
      rating: 3.5
    },
    {
      id: 2,
      name: "Trixy - 8.5 Tricerapoto",
      image: "public/progetto-senza-titolo--18--1.png",
      price: "$30",
      rating: 3.5
    },
    {
      id: 3,
      name: "Bunny - 10.5 Coniglio",
      image: "public/progetto-senza-titolo--14--1.png",
      price: "$25",
      rating: 3.5
    },
    {
      id: 4,
      name: "Gigi - 12.5 Giraffa",
      image: "public/progetto-senza-titolo--16--1.png",
      price: "$30",
      rating: 3.5
    }
  ];
  
  // Helper function to create star rating HTML
  function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHtml = '';
  
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<img src="public/vector-2.svg" alt="Full star" class="star">';
    }
  
    // Half star
    if (hasHalfStar) {
      starsHtml += '<img src="public/vector-4.svg" alt="Half star" class="star">';
    }
  
    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<img src="public/vector-16.svg" alt="Empty star" class="star">';
    }
  
    return starsHtml;
  }
  
  // Function to create product cards
  function createProductCard(product) {
    return `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <div class="product-rating">
            ${createStarRating(product.rating)}
          </div>
          <p class="product-price">${product.price}</p>
        </div>
      </div>
    `;
  }
  
  // Function to initialize the page
  function initializePage() {
    // Render products
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
      productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    }
  
    // Add event listeners for navigation
    const dropdownLinks = document.querySelectorAll('.has-dropdown');
    dropdownLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your dropdown logic here
      });
    });
  
    // Add event listeners for action buttons
    const actionButtons = document.querySelectorAll('.icon-btn, .cta-button');
    actionButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Add your button click logic here
      });
    });
  }
  
  // Initialize the page when DOM is loaded
  document.addEventListener('DOMContentLoaded', initializePage);