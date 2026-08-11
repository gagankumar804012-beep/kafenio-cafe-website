/* ==========================================================================
   KAFENIO CAFE & BISTRO - INTERACTIVE JAVASCRIPT ENGINE
   ========================================================================== */

// 1. Menu Dataset with Specialized High-Res Photos
const MENU_DATA = [
    // Specialty Coffee & Brews
    {
        id: 'c1',
        name: 'Spanish Iced Latte',
        category: 'coffee',
        diet: 'veg',
        price: 240,
        popular: true,
        tag: 'Barista Signature',
        prepTime: '6-8 Mins',
        image: 'assets/spanish_iced_latte.jpg',
        description: 'Double espresso layered over sweet condensed milk and chilled creamy milk over rock ice.'
    },
    {
        id: 'c2',
        name: 'Nitro Artisanal Cold Brew',
        category: 'coffee',
        diet: 'veg',
        price: 260,
        popular: true,
        tag: '18hr Cold Steeps',
        prepTime: 'Instant Serve',
        image: 'assets/specialty_coffee.jpg',
        description: 'Single-origin Ethiopian Sidamo beans steeped 18 hours, nitrogen-infused for velvety crema.'
    },
    {
        id: 'c3',
        name: 'Truffle Hazelnut Cappuccino',
        category: 'coffee',
        diet: 'veg',
        price: 220,
        popular: false,
        tag: 'House Roast',
        prepTime: '5-7 Mins',
        image: 'assets/specialty_coffee.jpg',
        description: 'Rich dark espresso shot with toasted hazelnut syrup and silky micro-foamed milk.'
    },
    {
        id: 'c4',
        name: 'Affogato Al Caffè',
        category: 'coffee',
        diet: 'veg',
        price: 210,
        popular: false,
        tag: 'Italian Classic',
        prepTime: '3-5 Mins',
        image: 'assets/specialty_coffee.jpg',
        description: 'Scoop of Madagascar vanilla bean gelato drowned in a freshly pulled double ristretto shot.'
    },

    // Wood-Fired Artisanal Pizzas
    {
        id: 'p1',
        name: 'Truffle Mushroom & Burrata Pizza',
        category: 'pizza',
        diet: 'veg',
        price: 540,
        popular: true,
        tag: '400°C Wood-Fired Oven',
        prepTime: '15-18 Mins',
        image: 'assets/artisanal_pizza.jpg',
        description: '400°C Neapolitan dough, black truffle oil, wild mushrooms, fior di latte & fresh creamy burrata.'
    },
    {
        id: 'p2',
        name: 'Spicy Peri-Peri Chicken Pizza',
        category: 'pizza',
        diet: 'non-veg',
        price: 580,
        popular: true,
        tag: 'Chef Favorite',
        prepTime: '15-18 Mins',
        image: 'assets/artisanal_pizza.jpg',
        description: 'Char-grilled peri-peri chicken breast, charred red bell peppers, jalapeños & melted mozzarella.'
    },
    {
        id: 'p3',
        name: 'Classic Margherita Extra',
        category: 'pizza',
        diet: 'veg',
        price: 460,
        popular: false,
        tag: 'Authentic Napoli',
        prepTime: '12-15 Mins',
        image: 'assets/artisanal_pizza.jpg',
        description: 'San Marzano tomato plum sauce, buffalo mozzarella, fresh Italian basil & extra virgin olive oil.'
    },
    {
        id: 'p4',
        name: 'Smoked Pepperoni Feast',
        category: 'pizza',
        diet: 'non-veg',
        price: 620,
        popular: false,
        tag: 'Artisan Pork Cured',
        prepTime: '15-18 Mins',
        image: 'assets/artisanal_pizza.jpg',
        description: 'Double layer of artisan pork pepperoni, chili honey drizzle, mozzarella & fresh oregano.'
    },

    // Pasta & Gourmet Mains
    {
        id: 'pa1',
        name: 'Gourmet Double Smash Burger',
        category: 'pasta',
        diet: 'non-veg',
        price: 520,
        popular: true,
        tag: 'Double Cheese Pull',
        prepTime: '12-15 Mins',
        image: 'assets/gourmet_burger.jpg',
        description: 'Seared smashed chicken patties, melted cheddar pull, caramelized onions & truffle mayo on brioche bun with fries.'
    },
    {
        id: 'pa2',
        name: 'Truffle Alfredo Fettuccine',
        category: 'pasta',
        diet: 'veg',
        price: 480,
        popular: true,
        tag: 'Hand-Rolled Pasta',
        prepTime: '14-16 Mins',
        image: 'assets/hero_ambiance.jpg',
        description: 'Hand-rolled fettuccine tossed in a rich parmesan truffle cream sauce with roasted garlic & herbs.'
    },
    {
        id: 'pa3',
        name: 'Penne Arrabbiata Piccante',
        category: 'pasta',
        diet: 'veg',
        price: 420,
        popular: false,
        tag: 'Fiery Italian Tomato',
        prepTime: '12-14 Mins',
        image: 'assets/hero_ambiance.jpg',
        description: 'Fiery Italian tomato sugo, crushed calabrian chili flakes, fresh garlic & chopped basil.'
    },
    {
        id: 'pa4',
        name: 'Loaded Mexican Quesadilla',
        category: 'pasta',
        diet: 'veg',
        price: 390,
        popular: false,
        tag: 'Crispy Cheese Stuffed',
        prepTime: '10-12 Mins',
        image: 'assets/gourmet_burger.jpg',
        description: 'Crispy grilled tortilla stuffed with sweet corn, black beans, melted jack cheese & avocado salsa.'
    },

    // Desserts
    {
        id: 'd1',
        name: 'Classic Soufflé Pancakes',
        category: 'desserts',
        diet: 'veg',
        price: 380,
        popular: true,
        tag: 'Freshly Flipped Fluffy',
        prepTime: '15-20 Mins',
        image: 'assets/gourmet_desserts.jpg',
        description: 'Triple stack of fluffy souffle pancakes topped with fresh berries, whipped cream & pure maple syrup.'
    },
    {
        id: 'd2',
        name: 'Nutella Chocolate Lava Cake',
        category: 'desserts',
        diet: 'veg',
        price: 320,
        popular: true,
        tag: 'Molten Nutella Core',
        prepTime: '10-12 Mins',
        image: 'assets/gourmet_desserts.jpg',
        description: 'Warm dark chocolate cake with a molten Nutella center, served with vanilla bean ice cream.'
    },
    {
        id: 'd3',
        name: 'New York Vanilla Cheesecake',
        category: 'desserts',
        diet: 'veg',
        price: 350,
        popular: false,
        tag: 'Classic Berry Compote',
        prepTime: 'Chilled Serve',
        image: 'assets/gourmet_desserts.jpg',
        description: 'Velvety smooth cream cheese filling on a buttery graham cracker crust with berry compote.'
    },

    // Mocktails & Shakes
    {
        id: 'dr1',
        name: 'Passionfruit Mint Mojito',
        category: 'drinks',
        diet: 'veg',
        price: 260,
        popular: true,
        tag: 'Botanical Craft Mix',
        prepTime: '5 Mins',
        image: 'assets/drinks_mocktails.jpg',
        description: 'Muddled fresh mint, passionfruit pulp, lime juice, sparkling soda over crushed crystal ice.'
    },
    {
        id: 'dr2',
        name: 'Biscoff Salted Caramel Shake',
        category: 'drinks',
        diet: 'veg',
        price: 290,
        popular: true,
        tag: 'Lotus Crumble Top',
        prepTime: '5-7 Mins',
        image: 'assets/drinks_mocktails.jpg',
        description: 'Creamy milk blended with Lotus Biscoff spread, salted caramel drizzle & crushed biscuit crumble.'
    },
    {
        id: 'dr3',
        name: 'Iced Japanese Matcha Latte',
        category: 'drinks',
        diet: 'veg',
        price: 270,
        popular: false,
        tag: 'Ceremonial Uji Grade',
        prepTime: '5 Mins',
        image: 'assets/drinks_mocktails.jpg',
        description: 'Ceremonial grade Uji matcha whisked with vanilla and silky oat milk over ice.'
    }
];

// State Management
let cart = [];
let currentCategory = 'all';
let currentDiet = 'all';
let searchQuery = '';
let activeLightboxItemId = null;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderMenuGrid();
    setupEventListeners();
    setupBranchSwitcher();
    setupStickyHeader();
    setMinReservationDate();
    setupLightbox();
    registerServiceWorker();
    setupMobileBottomNav();
}

// Register PWA Service Worker for Mobile App Support
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Kafenio PWA Service Worker registered:', reg.scope))
            .catch(err => console.log('Service Worker registration failed:', err));
    }
}

// Mobile Bottom Navigation Event Binding
function setupMobileBottomNav() {
    const reserveBtn = document.getElementById('mobileBottomReserveBtn');
    const cartBtn = document.getElementById('mobileBottomCartBtn');
    const reserveModal = document.getElementById('reserveModal');
    const cartBackdrop = document.getElementById('cartDrawerBackdrop');

    if (reserveBtn && reserveModal) {
        reserveBtn.addEventListener('click', () => reserveModal.classList.add('active'));
    }

    if (cartBtn && cartBackdrop) {
        cartBtn.addEventListener('click', () => cartBackdrop.classList.add('active'));
    }
}

// 2. Menu Rendering
function renderMenuGrid() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    const filtered = MENU_DATA.filter(item => {
        // Category Filter
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        
        // Diet Filter
        const matchesDiet = currentDiet === 'all' || item.diet === currentDiet;
        
        // Search Filter
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              item.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesCategory && matchesDiet && matchesSearch;
    });

    if (filtered.length === 0) {
        menuGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <i class="fa-solid fa-cookie-bite" style="font-size: 3rem; color: var(--accent-gold); margin-bottom: 16px;"></i>
                <h3>No delicacies found</h3>
                <p>Try clearing your search query or choosing a different category filter.</p>
            </div>
        `;
        return;
    }

    menuGrid.innerHTML = filtered.map(item => `
        <div class="menu-card" data-id="${item.id}">
            <div class="menu-card-img" onclick="openPhotoLightbox('${item.id}')" title="Click to view full photo & details">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="badge-tag ${item.diet === 'veg' ? 'badge-veg' : 'badge-nonveg'}">
                    ${item.diet === 'veg' ? '● VEG' : '▲ NON-VEG'}
                </span>
                ${item.popular ? `<span class="badge-popular"><i class="fa-solid fa-fire"></i> POPULAR</span>` : ''}
                <div class="photo-zoom-hint">
                    <i class="fa-solid fa-expand"></i>
                </div>
            </div>
            <div class="menu-card-body">
                <h3 class="menu-card-title">${item.name}</h3>
                <p class="menu-card-desc">${item.description}</p>
                <div class="menu-card-footer">
                    <span class="price">₹${item.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
                        <i class="fa-solid fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// 3. Photo Lightbox Modal Logic
function openPhotoLightbox(itemId) {
    const item = MENU_DATA.find(i => i.id === itemId);
    if (!item) return;

    activeLightboxItemId = itemId;
    const modal = document.getElementById('photoLightboxModal');
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const price = document.getElementById('lightboxPrice');
    const desc = document.getElementById('lightboxDesc');
    const tag = document.getElementById('lightboxTag');
    const prepTime = document.getElementById('lightboxPrepTime');
    const dietBadge = document.getElementById('lightboxDietBadge');

    img.src = item.image;
    img.alt = item.name;
    title.textContent = item.name;
    price.textContent = `₹${item.price}`;
    desc.textContent = item.description;
    tag.innerHTML = `<i class="fa-solid fa-star"></i> ${item.tag || 'Chef Selection'}`;
    prepTime.textContent = item.prepTime || '12-15 Mins';

    dietBadge.className = `badge-tag ${item.diet === 'veg' ? 'badge-veg' : 'badge-nonveg'}`;
    dietBadge.textContent = item.diet === 'veg' ? '● VEG' : '▲ NON-VEG';

    modal.classList.add('active');
}

function setupLightbox() {
    const modal = document.getElementById('photoLightboxModal');
    const closeBtn = document.getElementById('closeLightboxBtn');
    const addBtn = document.getElementById('lightboxAddBtn');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            if (activeLightboxItemId) {
                addToCart(activeLightboxItemId);
                modal.classList.remove('active');
            }
        });
    }
}

// 4. Event Listeners Setup
function setupEventListeners() {
    // Category Tabs
    const categoryTabs = document.getElementById('categoryTabs');
    if (categoryTabs) {
        categoryTabs.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (!btn) return;

            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderMenuGrid();
        });
    }

    // Dietary Filter Buttons
    document.querySelectorAll('.diet-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diet-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentDiet = btn.dataset.diet;
            renderMenuGrid();
        });
    });

    // Search Input
    const searchInput = document.getElementById('menuSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            clearBtn.style.display = searchQuery ? 'block' : 'none';
            renderMenuGrid();
        });

        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearBtn.style.display = 'none';
            renderMenuGrid();
        });
    }

    // Modal Triggers
    const reserveModal = document.getElementById('reserveModal');
    const openReserveModalBtn = document.getElementById('openReserveModalBtn');
    const heroBookBtn = document.getElementById('heroBookBtn');
    const closeReserveModalBtn = document.getElementById('closeReserveModalBtn');

    const openModal = () => reserveModal.classList.add('active');
    const closeModal = () => reserveModal.classList.remove('active');

    if (openReserveModalBtn) openReserveModalBtn.addEventListener('click', openModal);
    if (heroBookBtn) heroBookBtn.addEventListener('click', openModal);
    if (closeReserveModalBtn) closeReserveModalBtn.addEventListener('click', closeModal);

    // Close modal on backdrop click
    if (reserveModal) {
        reserveModal.addEventListener('click', (e) => {
            if (e.target === reserveModal) closeModal();
        });
    }

    // Branch specific table booking buttons
    document.querySelectorAll('.reserve-branch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const branch = btn.dataset.branch;
            const resBranchSelect = document.getElementById('resBranch');
            if (resBranchSelect) resBranchSelect.value = branch;
            openModal();
        });
    });

    // Event booking buttons
    document.querySelectorAll('.reserve-event-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const eventName = btn.dataset.event;
            const resNote = document.getElementById('resNote');
            if (resNote) resNote.value = `Reserving for event: ${eventName}`;
            openModal();
        });
    });

    // Reservation Form Submit
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('resName').value;
            const branch = document.getElementById('resBranch').value;
            const date = document.getElementById('resDate').value;
            const time = document.getElementById('resTime').value;

            closeModal();
            showToast(`Table confirmed for ${name} at ${branch} on ${date} (${time})! Ref: #KAF-${Math.floor(1000 + Math.random() * 9000)}`);
            reservationForm.reset();
        });
    }

    // Cart Drawer Triggers
    const cartTriggerBtn = document.getElementById('cartTriggerBtn');
    const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
    const closeCartBtn = document.getElementById('closeCartBtn');

    if (cartTriggerBtn) {
        cartTriggerBtn.addEventListener('click', () => cartDrawerBackdrop.classList.add('active'));
    }
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => cartDrawerBackdrop.classList.remove('active'));
    }
    if (cartDrawerBackdrop) {
        cartDrawerBackdrop.addEventListener('click', (e) => {
            if (e.target === cartDrawerBackdrop) cartDrawerBackdrop.classList.remove('active');
        });
    }

    // Checkout Button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            const orderType = document.querySelector('input[name="orderType"]:checked').value;
            const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

            cartDrawerBackdrop.classList.remove('active');
            showToast(`Order #${orderId} placed successfully (${orderType})! Kitchen is preparing your meal.`);
            cart = [];
            updateCartUI();
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Thank you for subscribing! Check your inbox for your 15% discount voucher.');
            newsletterForm.reset();
        });
    }

    // Mobile Navigation Toggle
    const mobileToggleBtn = document.getElementById('mobileToggleBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggleBtn && navMenu) {
        mobileToggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('active'));
        });
    }
}

// 5. Cart Operations
function addToCart(itemId) {
    const item = MENU_DATA.find(i => i.id === itemId);
    if (!item) return;

    const existing = cart.find(c => c.id === itemId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
    showToast(`Added "${item.name}" to your cart!`);
}

function updateCartQuantity(itemId, change) {
    const existing = cart.find(c => c.id === itemId);
    if (!existing) return;

    existing.quantity += change;
    if (existing.quantity <= 0) {
        cart = cart.filter(c => c.id !== itemId);
    }

    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const mobileCartCount = document.getElementById('mobileCartCount');
    const cartBody = document.getElementById('cartBody');
    const cartFooter = document.getElementById('cartFooter');

    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    if (cartCount) cartCount.textContent = totalCount;
    if (mobileCartCount) mobileCartCount.textContent = totalCount;

    if (!cartBody) return;

    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-utensils empty-icon"></i>
                <h4>Your cart is empty</h4>
                <p>Explore our handcrafted menu and add your favorite coffee, pizzas, or desserts!</p>
            </div>
        `;
        if (cartFooter) cartFooter.style.display = 'none';
        return;
    }

    if (cartFooter) cartFooter.style.display = 'block';

    cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-price">₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</div>
            </div>
            <div class="cart-qty-controls">
                <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)"><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
    `).join('');

    // Summary Calculations
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + tax;

    document.getElementById('cartSubtotal').textContent = `₹${subtotal}`;
    document.getElementById('cartTax').textContent = `₹${tax}`;
    document.getElementById('cartTotal').textContent = `₹${total}`;
}

// 6. Branch Switcher
function setupBranchSwitcher() {
    const mohaliBtn = document.getElementById('branchMohaliBtn');
    const ludhianaBtn = document.getElementById('branchLudhianaBtn');
    const mohaliCard = document.getElementById('mohaliCard');
    const ludhianaCard = document.getElementById('ludhianaCard');

    if (!mohaliBtn || !ludhianaBtn) return;

    mohaliBtn.addEventListener('click', () => {
        mohaliBtn.classList.add('active');
        ludhianaBtn.classList.remove('active');
        mohaliCard.style.display = 'grid';
        ludhianaCard.style.display = 'none';
    });

    ludhianaBtn.addEventListener('click', () => {
        ludhianaBtn.classList.add('active');
        mohaliBtn.classList.remove('active');
        ludhianaCard.style.display = 'grid';
        mohaliCard.style.display = 'none';
    });
}

// 7. Header Scroll Effect
function setupStickyHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// 8. Toast Notification System
function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Set Minimum Date for Reservation to Today
function setMinReservationDate() {
    const resDate = document.getElementById('resDate');
    if (resDate) {
        const today = new Date().toISOString().split('T')[0];
        resDate.min = today;
        resDate.value = today;
    }
}
