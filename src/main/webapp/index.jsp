<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShopNest - Online Shopping</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo">FLIPKART</div>
        <div class="tagline">Your One-Stop Shopping Destination</div>
    </header>
    
    <nav>
        <a href="#laptops" class="active"><i class="fas fa-laptop"></i> Laptops</a>
        <a href="#mobiles"><i class="fas fa-mobile-alt"></i> Mobiles</a>
        <a href="#clothes"><i class="fas fa-tshirt"></i> Clothes</a>
        <a href="#offers"><i class="fas fa-tag"></i> Offers</a>
        <a href="#contact"><i class="fas fa-envelope"></i> Contact</a>
    </nav>
    
    <div class="cart-icon" onclick="toggleCart()">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-count" id="cartCount">0</span>
    </div>
    
    <div class="overlay" id="overlay"></div>
    
    <div class="cart-modal" id="cartModal">
        <div class="cart-header">
            <h3>Your Shopping Cart</h3>
            <button class="close-cart" onclick="toggleCart()">&times;</button>
        </div>
        <div class="cart-items" id="cartItems">
            <!-- Cart items will be inserted here by JavaScript -->
        </div>
        <div class="cart-summary" id="cartSummary">
            <!-- Cart summary will be inserted here by JavaScript -->
        </div>
    </div>
    
    <div class="container">
        <section id="laptops">
            <h2 class="section-title">Laptops</h2>
            <div class="product-grid" id="laptops-grid">
                <!-- Laptop products will be inserted here by JavaScript -->
            </div>
        </section>
        
        <section id="mobiles">
            <h2 class="section-title">Smartphones</h2>
            <div class="product-grid" id="mobiles-grid">
                <!-- Mobile products will be inserted here by JavaScript -->
            </div>
        </section>
        
        <section id="clothes">
            <h2 class="section-title">Fashion</h2>
            <div class="product-grid" id="clothes-grid">
                <!-- Clothing products will be inserted here by JavaScript -->
            </div>
        </section>
    </div>
    
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>ShopNest is your one-stop destination for all your shopping needs.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <a href="#laptops">Laptops</a>
                <a href="#mobiles">Mobiles</a>
                <a href="#clothes">Clothes</a>
            </div>
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Email: contact@shopnest.com</p>
                <p>Phone: +91 9876543210</p>
            </div>
        </div>
        <div class="copyright">
            &copy; 2023 ShopNest. All rights reserved.
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
