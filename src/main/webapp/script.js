// Product data
const products = {
    laptops: [
        {
            id: 'lp1',
            name: 'Apple MacBook Air M1',
            price: 89990,
            originalPrice: 99990,
            image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg',
            rating: '★★★★★',
            ratingCount: 1245,
            badge: 'BESTSELLER'
        },
        {
            id: 'lp2',
            name: 'Dell Inspiron 15',
            price: 54990,
            originalPrice: 62990,
            image: 'https://m.media-amazon.com/images/I/61YiZ25KQFL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 876,
            badge: 'LIMITED'
        },
        {
            id: 'lp3',
            name: 'HP Pavilion 14',
            price: 62990,
            originalPrice: 69990,
            image: 'https://m.media-amazon.com/images/I/71S8sK0yQhL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 932
        },
        {
            id: 'lp4',
            name: 'Lenovo IdeaPad Slim 3',
            price: 42990,
            originalPrice: 49990,
            image: 'https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg',
            rating: '★★★☆☆',
            ratingCount: 567,
            badge: 'SAVE 14%'
        },
        {
            id: 'lp5',
            name: 'Asus VivoBook 15',
            price: 47990,
            originalPrice: 54990,
            image: 'https://m.media-amazon.com/images/I/81fstJkUlaL._SL1500_.jpg',
            rating: '★★★☆☆',
            ratingCount: 721
        },
        {
            id: 'lp6',
            name: 'Acer Aspire 5',
            price: 51990,
            originalPrice: 57990,
            image: 'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 843,
            badge: 'TRENDING'
        },
        {
            id: 'lp7',
            name: 'Microsoft Surface Laptop 4',
            price: 99990,
            originalPrice: 109990,
            image: 'https://m.media-amazon.com/images/I/71qod7R6-DL._SL1500_.jpg',
            rating: '★★★★★',
            ratingCount: 1054
        },
        {
            id: 'lp8',
            name: 'MSI GF63 Thin',
            price: 69990,
            originalPrice: 79990,
            image: 'https://m.media-amazon.com/images/I/61R1Zbj413L._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 689,
            badge: 'GAMING'
        },
        {
            id: 'lp9',
            name: 'Lenovo ThinkPad E14',
            price: 58990,
            originalPrice: 65990,
            image: 'https://m.media-amazon.com/images/I/61YvCH3g+IL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 782
        },
        {
            id: 'lp10',
            name: 'HP Victus Gaming Laptop',
            price: 72990,
            originalPrice: 82990,
            image: 'https://m.media-amazon.com/images/I/71RD3vsjIYL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 917,
            badge: 'HOT DEAL'
        }
    ],
    mobiles: [
        {
            id: 'mb1',
            name: 'iPhone 14 Pro',
            price: 129900,
            originalPrice: 139900,
            image: 'https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg',
            rating: '★★★★★',
            ratingCount: 2456,
            badge: 'BESTSELLER'
        },
        {
            id: 'mb2',
            name: 'Samsung Galaxy S23 Ultra',
            price: 124999,
            originalPrice: 134999,
            image: 'https://m.media-amazon.com/images/I/61RZDb5m6aL._SL1500_.jpg',
            rating: '★★★★★',
            ratingCount: 1987
        },
        {
            id: 'mb3',
            name: 'OnePlus 11 5G',
            price: 56999,
            originalPrice: 61999,
            image: 'https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 1543,
            badge: 'FLAGSHIP'
        },
        {
            id: 'mb4',
            name: 'Xiaomi 12 Pro',
            price: 49999,
            originalPrice: 54999,
            image: 'https://m.media-amazon.com/images/I/61LiK9QVKAL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 1123
        },
        {
            id: 'mb5',
            name: 'Google Pixel 7 Pro',
            price: 74999,
            originalPrice: 84999,
            image: 'https://m.media-amazon.com/images/I/71Gh1Z2GqWL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 987,
            badge: 'NEW'
        },
        {
            id: 'mb6',
            name: 'Vivo X80 Pro',
            price: 79990,
            originalPrice: 89990,
            image: 'https://m.media-amazon.com/images/I/71K9lSbppLL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 876
        },
        {
            id: 'mb7',
            name: 'OPPO Reno 8 Pro',
            price: 45990,
            originalPrice: 49990,
            image: 'https://m.media-amazon.com/images/I/71V+4xYQq7L._SL1500_.jpg',
            rating: '★★★☆☆',
            ratingCount: 654,
            badge: 'CAMERA'
        },
        {
            id: 'mb8',
            name: 'Realme GT Neo 3',
            price: 34999,
            originalPrice: 39999,
            image: 'https://m.media-amazon.com/images/I/61iRBf+QJEL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 1345,
            badge: 'BUDGET'
        },
        {
            id: 'mb9',
            name: 'Nothing Phone (1)',
            price: 32999,
            originalPrice: 35999,
            image: 'https://m.media-amazon.com/images/I/61cCfNxZLbL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 1765,
            badge: 'TRENDING'
        },
        {
            id: 'mb10',
            name: 'Motorola Edge 30 Ultra',
            price: 54999,
            originalPrice: 59999,
            image: 'https://m.media-amazon.com/images/I/61+UTLZJmZL._SL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 765
        }
    ],
    clothes: [
        {
            id: 'cl1',
            name: 'Men\'s Cotton T-Shirt (Pack of 3)',
            price: 899,
            originalPrice: 1299,
            image: 'https://m.media-amazon.com/images/I/71tX1OSx1EL._UL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 4567,
            badge: 'BESTSELLER'
        },
        {
            id: 'cl2',
            name: 'Women\'s Ethnic Kurta Set',
            price: 1299,
            originalPrice: 1799,
            image: 'https://m.media-amazon.com/images/I/71+Q3c9XrVL._UL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 3245,
            badge: 'TRENDING'
        },
        {
            id: 'cl3',
            name: 'Men\'s Formal Shirt',
            price: 799,
            originalPrice: 999,
            image: 'https://m.media-amazon.com/images/I/61+8bX3AyFL._UL1500_.jpg',
            rating: '★★★☆☆',
            ratingCount: 2345
        },
        {
            id: 'cl4',
            name: 'Women\'s Jeans',
            price: 1499,
            originalPrice: 1999,
            image: 'https://m.media-amazon.com/images/I/71Hn+W5YkVL._UL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 2876,
            badge: 'NEW'
        },
        {
            id: 'cl5',
            name: 'Men\'s Track Pants',
            price: 999,
            originalPrice: 1299,
            image: 'https://m.media-amazon.com/images/I/71x9b1+5WoL._UL1500_.jpg',
            rating: '★★★☆☆',
            ratingCount: 1876
        },
        {
            id: 'cl6',
            name: 'Women\'s Casual Top',
            price: 599,
            originalPrice: 899,
            image: 'https://m.media-amazon.com/images/I/71+9+5eXmVL._UL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 3456,
            badge: 'SAVE 33%'
        },
        {
            id: 'cl7',
            name: 'Men\'s Denim Jacket',
            price: 1999,
            originalPrice: 2499,
            image: 'https://m.media-amazon.com/images/I/61+0S4+9QVL._UL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 1234
        },
        {
            id: 'cl8',
            name: 'Women\'s Summer Dress',
            price: 1599,
            originalPrice: 1999,
            image: 'https://m.media-amazon.com/images/I/71+5+5eXmVL._UL1500_.jpg',
            rating: '★★★★★',
            ratingCount: 4321,
            badge: 'HOT'
        },
        {
            id: 'cl9',
            name: 'Men\'s Winter Sweater',
            price: 1299,
            originalPrice: 1599,
            image: 'https://m.media-amazon.com/images/I/71+5+5eXmVL._UL1500_.jpg',
            rating: '★★★☆☆',
            ratingCount: 987
        },
        {
            id: 'cl10',
            name: 'Women\'s Leggings (Pack of 2)',
            price: 699,
            originalPrice: 999,
            image: 'https://m.media-amazon.com/images/I/71+5+5eXmVL._UL1500_.jpg',
            rating: '★★★★☆',
            ratingCount: 5432,
            badge: 'VALUE'
        }
    ]
};

// Shopping cart
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts('laptops', 'laptops-grid');
    renderProducts('mobiles', 'mobiles-grid');
    renderProducts('clothes', 'clothes-grid');
    updateCartCount();
    
    // Set active nav link based on scroll position
    window.addEventListener('scroll', setActiveNavLink);
    setActiveNavLink();
});

// Render products for a category
function renderProducts(category, elementId) {
    const grid = document.getElementById(elementId);
    grid.innerHTML = '';
    
    products[category].forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let badgeHTML = '';
        if (product.badge) {
            badgeHTML = `<div class="product-badge">${product.badge}</div>`;
        }
        
        productCard.innerHTML = `
            ${badgeHTML}
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                    <span class="discount">${discount}% off</span>
                </div>
                <div class="product-rating">
                    <span class="stars">${product.rating}</span>
                    <span class="rating-count">(${product.ratingCount})</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="addToCart('${category}', '${product.id}')">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="wishlist" onclick="addToWishlist('${category}', '${product.id}')">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(category, productId) {
    const product = products[category].find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    showToast(`${product.name} added to cart!`);
}

// Add product to wishlist (placeholder)
function addToWishlist(category, productId) {
    const product = products[category].find(p => p.id === productId);
    showToast(`${product.name} added to wishlist!`);
}

// Update cart count display
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
    
    // Update cart modal if open
    if (document.getElementById('cartModal').classList.contains('open')) {
        renderCart();
    }
}

// Toggle cart visibility
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    const overlay = document.getElementById('overlay');
    
    if (cartModal.classList.contains('open')) {
        cartModal.classList.remove('open');
        overlay.classList.remove('active');
    } else {
        cartModal.style.display = 'block';
        setTimeout(() => {
            cartModal.classList.add('open');
            overlay.classList.add('active');
        }, 10);
        renderCart();
    }
}

// Render cart items
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartSummary.innerHTML = '';
        return;
    }
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
            </div>
            <div class="remove-item" onclick="removeFromCart('${item.id}')">
                <i class="fas fa-times"></i>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    const total = calculateTotal();
    cartSummary.innerHTML = `
        <div class="cart-total">
            <span>Total:</span>
            <span>₹${total.toLocaleString('en-IN')}</span>
        </div>
        <button class="checkout-btn" onclick="checkout()">
            <i class="fas fa-credit-card"></i> Proceed to Checkout
        </button>
    `;
}

// Update item quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        
        updateCartCount();
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    showToast('Item removed from cart');
}

// Calculate cart total
function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Checkout (placeholder)
function checkout() {
    if (cart.length === 0) return;
    
    alert(`Order placed successfully!\nTotal: ₹${calculateTotal().toLocaleString('en-IN')}`);
    cart = [];
    updateCartCount();
    toggleCart();
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Set active nav link based on scroll position
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `
