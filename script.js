// =============================
// DATABASE & INITIAL DATA
// =============================

// College Student Database (Simulated Backend)
const collegeDatabase = {
    "711524001": { name: "Akshay", email: "rahul.sharma@abccollege.edu", department: "CSE", year: "3rd" },
    "711524002": { name: "Dhineshwaran", email: "dhinesh@kitcollege.edu", department: "ECE", year: "2nd" },
    "711524003": { name: "Ratul", email: "ratul@kitcollege.edu", department: "ME", year: "4th" },
    "711524004": { name: "siva", email: "siva@kitcollege.edu", department: "CSE", year: "1st" },
    "711524005": { name: "Vikram", email: "vikram@kitcollege.edu", department: "EEE", year: "3rd" },
    "711524006": { name: "Sanjai", email: "sanjai@kitcollege.edu", department: "CE", year: "2nd" },
    "711524007": { name: "Lokesh", email: "lokesh@kitcollege.edu", department: "CSE", year: "4th" },
    "711524008": { name: "vishnu", email: "vishnu@kitcollege.edu", department: "ECE", year: "1st" }
};

// Admin and Chef Credentials
const systemUsers = {
    "ADMIN001": { password: "admin123", role: "admin", name: "System Admin" },
    "CHEF001": { password: "chef123", role: "chef", name: "Master Chef" }
};

// Menu Data with categories
const menuData = {
    "Main Course": [
        { id: 1, name: "Butter Chicken", price: 220, description: "Tender chicken in rich buttery tomato gravy", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "non-veg", health: "normal" },
        { id: 2, name: "Paneer Butter Masala", price: 180, description: "Cottage cheese in creamy tomato gravy", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "normal" },
        { id: 3, name: "Chicken Biryani", price: 200, description: "Fragrant basmati rice with spiced chicken", image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "non-veg", health: "normal" },
        { id: 4, name: "Veg Biryani", price: 150, description: "Fragrant rice with mixed vegetables", image: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "healthy" },
        { id: 5, name: "Dal Tadka", price: 120, description: "Lentils tempered with spices", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "healthy" }
    ],
    "Fast Food (Junk Food)": [
        { id: 6, name: "Samosa", price: 30, description: "Crispy pastry filled with spiced potatoes", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "junk" },
        { id: 7, name: "Burger", price: 80, description: "Vegetable burger with cheese", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "junk" },
        { id: 8, name: "French Fries", price: 60, description: "Crispy golden fries", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "junk" },
        { id: 9, name: "Pizza Slice", price: 90, description: "Cheese pizza slice", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "junk" }
    ],
    "Healthy Options": [
        { id: 10, name: "Fresh Salad", price: 70, description: "Mixed vegetable salad", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "healthy" },
        { id: 11, name: "Fruit Bowl", price: 60, description: "Seasonal fresh fruits", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "healthy" },
        { id: 12, name: "Steamed Vegetables", price: 80, description: "Fresh steamed seasonal vegetables", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "healthy" }
    ],
    "Beverages": [
        { id: 13, name: "Fresh Juice", price: 50, description: "Seasonal fruit juice", image: "https://images.unsplash.com/photo-1628992682633-bf2d40cb595f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "healthy" },
        { id: 14, name: "Masala Chai", price: 20, description: "Traditional Indian spiced tea", image: "https://images.unsplash.com/photo-1561121949-b7d348a7c8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "normal" },
        { id: 15, name: "Cold Coffee", price: 80, description: "Chilled coffee with milk", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", category: "veg", health: "normal" }
    ]
};

// Healthy food recommendations
const healthyFoods = [
    { id: 4, name: "Veg Biryani", price: 150, description: "Fragrant rice with mixed vegetables", image: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Dal Tadka", price: 120, description: "Lentils tempered with spices", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "Fresh Salad", price: 70, description: "Mixed vegetable salad", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Fruit Bowl", price: 60, description: "Seasonal fresh fruits", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 13, name: "Fresh Juice", price: 50, description: "Seasonal fruit juice", image: "https://images.unsplash.com/photo-1628992682633-bf2d40cb595f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
];

// =============================
// APPLICATION STATE
// =============================
let currentUser = null;
let currentRole = "customer";
let cart = [];
let orders = [];
let notifications = [];
let userOrderHistory = {};
let currentOrderId = 100;

// =============================
// BACKEND INTEGRATION
// =============================
const API_URL = 'http://localhost:5000/api';
let authToken = '';
const socket = io('http://localhost:5000');

socket.on('newOrder', (order) => {
    if (currentRole === 'chef' || currentRole === 'admin') {
        fetchOrders();
    }
});

socket.on('orderStatusUpdated', (order) => {
    fetchOrders();
    if (currentRole === 'customer') {
        addNotification('customer', `Your order status was updated`, new Date());
        loadCustomerNotifications();
    }
});

async function fetchOrders() {
    if (!authToken) return;
    try {
        const res = await fetch(`${API_URL}/orders`, {
            headers: { 'Authorization': `Bearer ${authToken}` }
        });
        if (res.ok) {
            const data = await res.json();
            orders = data.map(o => ({
                id: o.orderId || o._id,
                _id: o._id, // Keep mongo ID just in case
                customerId: currentRole === 'customer' ? currentUser.id : o.user,
                customerName: 'Student', // Ideally fetched from populated user
                items: o.orderItems,
                total: o.totalPrice,
                status: o.status.toLowerCase(),
                timestamp: o.createdAt,
                healthType: 'normal'
            }));

            // Rebuild history
            userOrderHistory = {};
            orders.forEach(order => {
                if (!userOrderHistory[order.customerId]) {
                    userOrderHistory[order.customerId] = [];
                }
                userOrderHistory[order.customerId].push(order);
            });

            // Refresh UI
            if (currentRole === 'chef') loadChefOrders();
            if (currentRole === 'admin') { loadAdminDashboard(); loadManageOrders(); }
            if (currentRole === 'customer') { loadCustomerOrderHistory(); checkHealthAlert(); loadRecommendations(); }
        }
    } catch (err) {
        console.error('Error fetching orders:', err);
    }
}

// Sample initial orders for demonstration
const initialOrders = [
    {
        id: "CANT-001",
        customerId: "ABC2023001",
        customerName: "Rahul Sharma",
        items: [{ id: 6, name: "Samosa", price: 30, quantity: 2 }, { id: 7, name: "Burger", price: 80, quantity: 1 }],
        total: 140,
        status: "delivered",
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        healthType: "junk"
    },
    {
        id: "CANT-002",
        customerId: "ABC2023001",
        customerName: "Rahul Sharma",
        items: [{ id: 8, name: "French Fries", price: 60, quantity: 1 }, { id: 9, name: "Pizza Slice", price: 90, quantity: 2 }],
        total: 240,
        status: "delivered",
        timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        healthType: "junk"
    },
    {
        id: "CANT-003",
        customerId: "ABC2023001",
        customerName: "Rahul Sharma",
        items: [{ id: 6, name: "Samosa", price: 30, quantity: 3 }, { id: 15, name: "Cold Coffee", price: 80, quantity: 1 }],
        total: 170,
        status: "delivered",
        timestamp: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
        healthType: "junk"
    },
    {
        id: "CANT-004",
        customerId: "ABC2023002",
        customerName: "Priya Patel",
        items: [{ id: 4, name: "Veg Biryani", price: 150, quantity: 1 }, { id: 10, name: "Fresh Salad", price: 70, quantity: 1 }],
        total: 220,
        status: "preparing",
        timestamp: new Date().toISOString(),
        healthType: "healthy"
    },
    {
        id: "CANT-005",
        customerId: "ABC2023003",
        customerName: "Amit Kumar",
        items: [{ id: 1, name: "Butter Chicken", price: 220, quantity: 1 }, { id: 3, name: "Chicken Biryani", price: 200, quantity: 1 }],
        total: 420,
        status: "pending",
        timestamp: new Date().toISOString(),
        healthType: "normal"
    }
];

orders = [...initialOrders];

// Initialize user order history
initialOrders.forEach(order => {
    if (!userOrderHistory[order.customerId]) {
        userOrderHistory[order.customerId] = [];
    }
    userOrderHistory[order.customerId].push(order);
});

// =============================
// DOM ELEMENTS
// =============================
const loginPage = document.getElementById('loginPage');
const appContainer = document.getElementById('appContainer');
const roleBadge = document.getElementById('roleBadge');
const roleBtns = document.querySelectorAll('.role-btn');
const userIdInput = document.getElementById('userId');
const adminPasswordGroup = document.getElementById('adminPasswordGroup');
const chefPasswordGroup = document.getElementById('chefPasswordGroup');
const adminPassword = document.getElementById('adminPassword');
const chefPassword = document.getElementById('chefPassword');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const navTabs = document.querySelectorAll('.nav-tab');

// Health alert
const healthAlert = document.getElementById('healthAlert');
const healthAlertMessage = document.getElementById('healthAlertMessage');

// Recommendation panel
const recommendationPanel = document.getElementById('recommendationPanel');
const recommendationText = document.getElementById('recommendationText');
const recommendedItems = document.getElementById('recommendedItems');

// =============================
// EVENT LISTENERS
// =============================

// Role selection
roleBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        roleBtns.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        currentRole = this.dataset.role;

        // Show/hide password fields based on role
        if (currentRole === 'admin') {
            adminPasswordGroup.style.display = 'block';
            chefPasswordGroup.style.display = 'none';
            userIdInput.placeholder = "Enter Admin ID";
            document.getElementById('userIdLabel').textContent = "Admin ID";
        } else if (currentRole === 'chef') {
            adminPasswordGroup.style.display = 'none';
            chefPasswordGroup.style.display = 'block';
            userIdInput.placeholder = "Enter Chef ID";
            document.getElementById('userIdLabel').textContent = "Chef ID";
        } else {
            adminPasswordGroup.style.display = 'none';
            chefPasswordGroup.style.display = 'none';
            userIdInput.placeholder = "Enter Student ID";
            document.getElementById('userIdLabel').textContent = "Student ID";
        }
    });
});

// Login button
loginBtn.addEventListener('click', handleLogin);

// Logout button
if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
}

userIdInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') handleLogin();
});
adminPassword.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') handleLogin();
});
chefPassword.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') handleLogin();
});

// Tab navigation
navTabs.forEach(tab => {
    tab.addEventListener('click', function () {
        if (this.style.display !== 'none') {
            switchTab(this.dataset.tab);
        }
    });
});

// =============================
// CORE FUNCTIONS
// =============================

// Handle logout
function handleLogout() {
    // Clear current user
    currentUser = null;
    cart = []; // Optional: clear cart on logout

    // Reset UI
    appContainer.style.display = 'none';
    loginPage.style.display = 'block';
    roleBadge.style.display = 'none';
    if (document.getElementById('logoutBtn')) {
        document.getElementById('logoutBtn').style.display = 'none';
    }

    // Clear inputs
    userIdInput.value = '';
    adminPassword.value = '';
    chefPassword.value = '';

    // Show success message
    showAlert("Logged out successfully", "success");
}

// Handle login with validation
async function handleLogin() {
    const userId = userIdInput.value.trim().toUpperCase();

    let dummyEmail = '';
    let dummyName = '';
    let dummyPass = '';
    let backendRole = '';

    if (currentRole === 'customer') {
        // Customer login - validate against college database
        if (!collegeDatabase[userId]) {
            showAlert("Student ID not found in college database. Access denied.", "danger");
            return;
        }

        currentUser = {
            id: userId,
            name: collegeDatabase[userId].name,
            role: 'customer'
        };

        dummyEmail = collegeDatabase[userId].email;
        dummyName = collegeDatabase[userId].name;
        dummyPass = 'student123';
        backendRole = 'Customer';

        showAlert(`Welcome ${collegeDatabase[userId].name}!`, "success");

    } else if (currentRole === 'admin') {
        // Admin login
        if (!systemUsers[userId] || systemUsers[userId].role !== 'admin') {
            showAlert("Invalid Admin ID", "danger");
            return;
        }

        if (adminPassword.value !== systemUsers[userId].password) {
            showAlert("Invalid Admin Password", "danger");
            return;
        }

        currentUser = {
            id: userId,
            name: systemUsers[userId].name,
            role: 'admin'
        };

        dummyEmail = 'admin@system.com';
        dummyName = systemUsers[userId].name;
        dummyPass = adminPassword.value;
        backendRole = 'Admin';

        showAlert(`Welcome Admin ${systemUsers[userId].name}!`, "success");

    } else if (currentRole === 'chef') {
        // Chef login
        if (!systemUsers[userId] || systemUsers[userId].role !== 'chef') {
            showAlert("Invalid Chef ID", "danger");
            return;
        }

        if (chefPassword.value !== systemUsers[userId].password) {
            showAlert("Invalid Chef Password", "danger");
            return;
        }

        currentUser = {
            id: userId,
            name: systemUsers[userId].name,
            role: 'chef'
        };

        dummyEmail = 'chef@system.com';
        dummyName = systemUsers[userId].name;
        dummyPass = chefPassword.value;
        backendRole = 'Chef';

        showAlert(`Welcome Chef ${systemUsers[userId].name}!`, "success");
    }

    try {
        // Sync with backend
        let res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: dummyEmail, password: dummyPass })
        });

        let data = await res.json();

        if (!res.ok) {
            res = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: dummyName, email: dummyEmail, password: dummyPass, role: backendRole })
            });
            data = await res.json();
        }

        if (data.token) {
            authToken = data.token;
            await fetchOrders(); // load orders from DB
        }
    } catch (err) {
        console.error('Backend auth failed:', err);
    }

    // Update UI based on role
    updateUIForRole();

    // Show app, hide login
    loginPage.style.display = "none";
    appContainer.style.display = "block";

    // Show logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.style.display = "flex";

    // Set up initial tab
    switchTab(currentRole === 'admin' ? 'adminDashboard' :
        currentRole === 'chef' ? 'chefOrders' : 'menu');

    // Check for health alert for customers
    if (currentRole === 'customer') {
        checkHealthAlert();
        loadRecommendations();
    }

    // Load initial data
    loadInitialData();
}

// Update UI based on user role
function updateUIForRole() {
    // Update role badge
    roleBadge.textContent = currentUser.role.toUpperCase();
    roleBadge.className = `role-badge ${currentUser.role}-badge`;
    roleBadge.style.display = 'block';

    // Update displayed user ID
    const displayUserId = document.getElementById('displayUserId');
    if (displayUserId) {
        displayUserId.textContent = currentUser.id;
    }

    // Show/hide tabs based on role
    navTabs.forEach(tab => {
        if (tab.dataset.role === currentUser.role) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });

    // Update active tab styling
    navTabs.forEach(tab => {
        tab.classList.remove('active', 'admin-active', 'chef-active', 'customer-active');
        if (tab.style.display !== 'none') {
            tab.classList.add(`${currentUser.role}-active`);
        }
    });
}

// Switch between tabs
function switchTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });

    // Remove active class from all tabs
    navTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab content
    const tabContent = document.getElementById(tabName + 'Tab');
    if (tabContent) {
        tabContent.style.display = 'block';

        // Add active class to corresponding tab button
        navTabs.forEach(tab => {
            if (tab.dataset.tab === tabName) {
                tab.classList.add('active');
            }
        });

        // Load data for specific tabs
        if (tabName === 'menu') {
            loadMenu();
            updateCartDisplay();
        } else if (tabName === 'chefOrders') {
            loadChefOrders();
        } else if (tabName === 'adminDashboard') {
            loadAdminDashboard();
        } else if (tabName === 'manageOrders') {
            loadManageOrders();
        } else if (tabName === 'manageUsers') {
            loadManageUsers();
        } else if (tabName === 'systemReports') {
            loadSystemReports();
        } else if (tabName === 'history') {
            loadCustomerOrderHistory();
        }
    }
}

// Check for health alert for customer
function checkHealthAlert() {
    if (!userOrderHistory[currentUser.id]) {
        healthAlert.style.display = 'none';
        return;
    }

    const recentOrders = userOrderHistory[currentUser.id]
        .filter(order => order.status === 'completed')
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 4); // Last 4 orders

    // Check if all recent orders are junk food
    const allJunk = recentOrders.length >= 4 &&
        recentOrders.every(order => order.healthType === 'junk');

    if (allJunk) {
        healthAlert.style.display = 'block';
        healthAlertMessage.textContent =
            `You have ordered junk food ${recentOrders.length} consecutive times. ` +
            `Consider ordering vegetarian or healthy food today for a healthier choice.`;
    } else {
        healthAlert.style.display = 'none';
    }
}

// Load food recommendations
function loadRecommendations() {
    if (!userOrderHistory[currentUser.id]) {
        recommendationPanel.style.display = 'none';
        return;
    }

    // Show recommendations if user has ordered junk food recently
    const recentOrders = userOrderHistory[currentUser.id]
        .filter(order => order.status === 'completed')
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 3);

    const hasJunkFood = recentOrders.some(order => order.healthType === 'junk');

    if (hasJunkFood && recentOrders.length > 0) {
        recommendationPanel.style.display = 'block';
        recommendationText.textContent =
            "Based on your recent orders, we recommend trying these healthier options:";

        // Show 3 random healthy foods
        recommendedItems.innerHTML = '';
        const shuffled = [...healthyFoods].sort(() => 0.5 - Math.random());
        shuffled.slice(0, 3).forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.innerHTML = `
                        <div class="item-image" style="background-image: url('${item.image}'); height: 120px;"></div>
                        <div class="item-details">
                            <div class="item-name-price">
                                <span class="item-name">${item.name}</span>
                                <span class="item-price">₹${item.price}</span>
                            </div>
                            <p class="item-description">${item.description}</p>
                            <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
                        </div>
                    `;
            recommendedItems.appendChild(itemElement);
        });
    } else {
        recommendationPanel.style.display = 'none';
    }
}

// Load initial data based on role
function loadInitialData() {
    if (currentRole === 'customer') {
        loadMenu();
        updateCartDisplay();
        loadCustomerNotifications();
    } else if (currentRole === 'chef') {
        loadChefOrders();
        loadChefNotifications();
    } else if (currentRole === 'admin') {
        loadAdminDashboard();
        loadAdminNotifications();
    }
}

// =============================
// CUSTOMER FUNCTIONS
// =============================

// Load menu for customer
function loadMenu() {
    const menuContainer = document.getElementById('menuContainer');
    if (!menuContainer) return;

    menuContainer.innerHTML = '';

    for (const category in menuData) {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'menu-category';

        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = `<i class="fas fa-utensils"></i> ${category}`;

        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'menu-items';

        // Add items for this category
        menuData[category].forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';

            itemElement.innerHTML = `
                        <div class="item-image" style="background-image: url('${item.image}');"></div>
                        <div class="item-details">
                            <div class="item-name-price">
                                <span class="item-name">${item.name}</span>
                                <span class="item-price">₹${item.price}</span>
                            </div>
                            <p class="item-description">${item.description}</p>
                            ${item.health === 'healthy' ? '<div style="color: var(--success-green); margin-bottom: 10px;"><i class="fas fa-heart"></i> Healthy Choice</div>' : ''}
                            <div class="item-actions">
                                <div class="quantity-selector" data-id="${item.id}">
                                    <button class="quantity-btn minus" onclick="adjustQuantity(${item.id}, -1)">-</button>
                                    <span class="quantity" id="qty-${item.id}">0</span>
                                    <button class="quantity-btn plus" onclick="adjustQuantity(${item.id}, 1)">+</button>
                                </div>
                                <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
                            </div>
                        </div>
                    `;

            itemsContainer.appendChild(itemElement);
        });

        categoryElement.appendChild(categoryTitle);
        categoryElement.appendChild(itemsContainer);
        menuContainer.appendChild(categoryElement);
    }
}

// Add item to cart
function addToCart(itemId) {
    // Find the item in the menu
    let item = null;
    let categoryName = "";

    for (const category in menuData) {
        const foundItem = menuData[category].find(menuItem => menuItem.id === itemId);
        if (foundItem) {
            item = foundItem;
            categoryName = category;
            break;
        }
    }

    if (!item) return;

    // Check if item is already in cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId);

    if (existingItemIndex >= 0) {
        // Increase quantity if already in cart
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item to cart
        cart.push({
            ...item,
            quantity: 1,
            category: categoryName
        });
    }

    // Update the quantity display in the menu
    document.getElementById(`qty-${itemId}`).textContent =
        cart.find(cartItem => cartItem.id === itemId).quantity;

    // Update cart display
    updateCartDisplay();

    // Show success message
    showAlert(`${item.name} added to cart`, "success");
}

// Adjust item quantity
function adjustQuantity(itemId, change) {
    const itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex >= 0) {
        cart[itemIndex].quantity += change;

        // Remove item if quantity becomes 0
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }

        // Update the quantity display in the menu
        const newQty = cart.find(cartItem => cartItem.id === itemId)?.quantity || 0;
        document.getElementById(`qty-${itemId}`).textContent = newQty;

        // Update cart display
        updateCartDisplay();
    }
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const emptyCartMessage = document.getElementById('emptyCartMessage');

    if (!cartItems) return;

    // Clear current cart display
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.appendChild(emptyCartMessage);
        cartTotal.textContent = "₹0";
        if (placeOrderBtn) {
            placeOrderBtn.disabled = true;
            placeOrderBtn.style.opacity = "0.7";
            placeOrderBtn.style.cursor = "not-allowed";
        }
        return;
    }

    if (placeOrderBtn) {
        placeOrderBtn.disabled = false;
        placeOrderBtn.style.opacity = "1";
        placeOrderBtn.style.cursor = "pointer";

        // Add event listener for placing order
        placeOrderBtn.onclick = placeOrder;
    }

    // Calculate total
    let total = 0;

    // Add each item to cart display
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
                    <div class="cart-item-name">${item.name} <span style="color: var(--dark-gray);">(x${item.quantity})</span></div>
                    <div class="cart-item-price">₹${itemTotal}</div>
                `;

        cartItems.appendChild(cartItemElement);
    });

    // Update total
    cartTotal.textContent = `₹${total}`;
}

// Place order
async function placeOrder() {
    if (cart.length === 0) {
        showAlert("Your cart is empty. Add items before placing an order.", "warning");
        return;
    }

    // Generate order ID
    currentOrderId++;
    const orderId = `CANT-${currentOrderId.toString().padStart(3, '0')}`;

    // Calculate order total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Determine health type (check if contains junk food)
    const hasJunkFood = cart.some(item => item.health === 'junk');
    const hasHealthyFood = cart.some(item => item.health === 'healthy');
    const healthType = hasJunkFood ? 'junk' : (hasHealthyFood ? 'healthy' : 'normal');

    // Create order object
    const order = {
        id: orderId,
        customerId: currentUser.id,
        customerName: currentUser.name,
        items: [...cart],
        total: total,
        status: 'pending',
        timestamp: new Date().toISOString(),
        healthType: healthType
    };

    // Push local first for instant feedback
    orders.push(order);
    if (!userOrderHistory[currentUser.id]) userOrderHistory[currentUser.id] = [];
    userOrderHistory[currentUser.id].push(order);

    // Push to Backend
    try {
        const orderItems = cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image || ''
        }));

        if (authToken) {
            const res = await fetch(`${API_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ orderId, orderItems, totalPrice: total })
            });
            if (res.ok) {
                await fetchOrders();
            }
        }
    } catch (err) {
        console.error('Backend order fallback:', err);
    }

    // Add notification for customer
    addNotification('customer', `Order ${orderId} placed successfully!`, new Date());

    // Add notification for admin
    addNotification('admin', `New order ${orderId} placed by ${currentUser.name}`, new Date());

    // Add notification for chef
    addNotification('chef', `New order ${orderId} received for preparation`, new Date());

    // Show confirmation
    showAlert(`Order ${orderId} placed successfully!`, "success");

    // Reset cart
    cart = [];

    // Update displays
    updateCartDisplay();

    // Reset menu quantities
    for (const category in menuData) {
        menuData[category].forEach(item => {
            const qtyElement = document.getElementById(`qty-${item.id}`);
            if (qtyElement) {
                qtyElement.textContent = "0";
            }
        });
    }

    // Switch to track order tab
    setTimeout(() => {
        switchTab('track');
        // Auto-fill track order input
        const trackOrderInput = document.getElementById('trackOrderInput');
        if (trackOrderInput) {
            trackOrderInput.value = orderId;
            // Trigger track order
            setTimeout(() => {
                if (document.getElementById('trackOrderBtn')) {
                    document.getElementById('trackOrderBtn').click();
                }
            }, 500);
        }
    }, 1000);

    // Update notifications
    loadCustomerNotifications();
}

// Load customer notifications
function loadCustomerNotifications() {
    const customerNotifications = document.getElementById('customerNotifications');
    if (!customerNotifications) return;

    // Filter notifications for this customer
    const customerOrders = orders.filter(order => order.customerId === currentUser.id);

    customerNotifications.innerHTML = '';

    // Add notifications for each order
    customerOrders.slice(-5).reverse().forEach(order => {
        let message = '';
        let time = new Date(order.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        switch (order.status) {
            case 'pending':
                message = `Waiting for chef`;
                break;
            case 'preparing':
                message = `Preparing your food`;
                break;
            case 'ready':
                message = `Your food is ready`;
                break;
            case 'delivered':
                message = `Order completed`;
                break;
        }

        const notification = document.createElement('div');
        notification.className = 'notification customer';
        notification.innerHTML = `
                    <p>${message}</p>
                    <div class="notification-time">${time}</div>
                `;
        customerNotifications.appendChild(notification);
    });

    // Add welcome message if no orders
    if (customerOrders.length === 0) {
        const notification = document.createElement('div');
        notification.className = 'notification customer';
        notification.innerHTML = `
                    <p>Welcome! You'll receive notifications about your orders here.</p>
                    <div class="notification-time">Just now</div>
                `;
        customerNotifications.appendChild(notification);
    }
}

// Load customer order history
function loadCustomerOrderHistory() {
    const customerOrderHistory = document.getElementById('customerOrderHistory');
    const noOrderHistory = document.getElementById('noOrderHistory');

    if (!customerOrderHistory || !noOrderHistory) return;

    customerOrderHistory.innerHTML = '';

    const userOrders = userOrderHistory[currentUser.id] || [];

    if (userOrders.length === 0) {
        noOrderHistory.style.display = 'block';
        return;
    }

    noOrderHistory.style.display = 'none';

    userOrders.slice().reverse().forEach(order => {
        const row = document.createElement('tr');
        const itemsText = order.items.map(item => `${item.quantity}x ${item.name}`).join(', ');
        const date = new Date(order.timestamp).toLocaleDateString();

        const statusMap = {
            'pending': 'Waiting for chef',
            'preparing': 'Preparing your food',
            'ready': 'Your food is ready',
            'delivered': 'Order completed'
        };
        const displayStatus = statusMap[order.status.toLowerCase()] || order.status;

        row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${date}</td>
                    <td>${itemsText}</td>
                    <td>₹${order.total}</td>
                    <td><span class="order-status status-${order.status.toLowerCase()}">${displayStatus}</span></td>
                `;
        customerOrderHistory.appendChild(row);
    });
}

// =============================
// CHEF FUNCTIONS
// =============================

// Load chef orders
function loadChefOrders() {
    const chefOrdersTable = document.getElementById('chefOrdersTable');
    const pendingOrdersCount = document.getElementById('pendingOrdersCount');
    const preparingOrdersCount = document.getElementById('preparingOrdersCount');
    const completedOrdersCount = document.getElementById('completedOrdersCount');

    if (!chefOrdersTable) return;

    chefOrdersTable.innerHTML = '';

    // Filter orders that are pending or preparing
    const kitchenOrders = orders.filter(order => order.status === 'pending' || order.status === 'preparing');
    const preparingOrders = orders.filter(order => order.status === 'preparing');
    const completedOrders = orders.filter(order => order.status === 'ready' || order.status === 'delivered');

    // Update counts
    if (pendingOrdersCount) pendingOrdersCount.textContent = kitchenOrders.length;
    if (preparingOrdersCount) preparingOrdersCount.textContent = preparingOrders.length;
    if (completedOrdersCount) completedOrdersCount.textContent = completedOrders.length;

    // Add orders to table
    kitchenOrders.forEach(order => {
        const row = document.createElement('tr');
        const itemsText = order.items.map(item => `${item.quantity}x ${item.name}`).join(', ');
        const time = new Date(order.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.customerId}</td>
                    <td>${itemsText}</td>
                    <td>${time}</td>
                    <td><span class="order-status status-${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></td>
                    <td>
                        ${order.status === 'pending' ?
                `<button class="action-btn btn-update" onclick="updateOrderStatus('${order.id}', 'preparing')">Start Preparing</button>` :
                `<button class="action-btn btn-update" onclick="updateOrderStatus('${order.id}', 'ready')">Mark as Ready</button>`
            }
                    </td>
                `;
        chefOrdersTable.appendChild(row);
    });

    // Show message if no orders
    if (kitchenOrders.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="6" style="text-align: center; padding: 40px; color: var(--dark-gray);">No orders in kitchen</td>`;
        chefOrdersTable.appendChild(row);
    }
}

// Update order status (for chef)
async function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    const oldStatus = order.status;
    order.status = newStatus;

    // Push to backend
    if (authToken) {
        try {
            let endpoint = '';
            if (newStatus === 'preparing') endpoint = 'prepare';
            if (newStatus === 'ready') endpoint = 'ready';
            if (newStatus === 'delivered') endpoint = 'deliver';

            // Find backend internal Mongo _id for API call since track order uses the friendly id
            const backendId = order._id || order.id;

            const res = await fetch(`${API_URL}/orders/${backendId}/${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            if (res.ok) {
                await fetchOrders();
                return; // fetchOrders will refresh UI and show alerts properly via socket
            }
        } catch (err) {
            console.error('Failed to update backend status:', err);
        }
    }

    // Add notification for customer
    let customerMessage = '';
    if (newStatus === 'preparing') {
        customerMessage = `Preparing your food`;
    } else if (newStatus === 'ready') {
        customerMessage = `Your food is ready`;
    } else if (newStatus === 'delivered') {
        customerMessage = `Order completed`;
    }

    if (customerMessage) {
        addNotification('customer', customerMessage, new Date());
    }

    // Add notification for admin
    addNotification('admin', `Order ${orderId} status changed from ${oldStatus} to ${newStatus}`, new Date());

    // Show alert for chef
    showAlert(`Order ${orderId} status updated to ${newStatus}`, "success");

    // Reload chef orders
    loadChefOrders();

    // Reload chef notifications
    loadChefNotifications();
}

// Load chef notifications
function loadChefNotifications() {
    const chefNotifications = document.getElementById('chefNotifications');
    if (!chefNotifications) return;

    // Filter notifications for chef
    const recentNotifications = notifications
        .filter(notif => notif.role === 'chef')
        .slice(-5)
        .reverse();

    chefNotifications.innerHTML = '';

    recentNotifications.forEach(notif => {
        const notification = document.createElement('div');
        notification.className = 'notification chef';
        const time = notif.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        notification.innerHTML = `
                    <p>${notif.message}</p>
                    <div class="notification-time">${time}</div>
                `;
        chefNotifications.appendChild(notification);
    });

    // Add default message if no notifications
    if (recentNotifications.length === 0) {
        const notification = document.createElement('div');
        notification.className = 'notification chef';
        notification.innerHTML = `
                    <p>New orders will appear here. Update status when prepared.</p>
                    <div class="notification-time">System</div>
                `;
        chefNotifications.appendChild(notification);
    }
}

// =============================
// ADMIN FUNCTIONS
// =============================

// Load admin dashboard
function loadAdminDashboard() {
    const adminTodayOrders = document.getElementById('adminTodayOrders');
    const activeUsersCount = document.getElementById('activeUsersCount');
    const todayRevenue = document.getElementById('todayRevenue');
    const kitchenEfficiency = document.getElementById('kitchenEfficiency');

    if (!adminTodayOrders) return;

    // Calculate today's date
    const today = new Date().toDateString();

    // Filter today's orders
    const todayOrders = orders.filter(order => {
        const orderDate = new Date(order.timestamp).toDateString();
        return orderDate === today;
    });

    // Calculate unique users
    const uniqueUsers = [...new Set(todayOrders.map(order => order.customerId))];

    // Calculate total revenue
    const revenue = todayOrders.reduce((sum, order) => sum + order.total, 0);

    // Calculate kitchen efficiency (orders delivered/ready instead of completed)
    const completedOrders = orders.filter(order => order.status === 'ready' || order.status === 'delivered');
    const efficiency = completedOrders.length > 0 ?
        Math.round((completedOrders.length / orders.length) * 100) : 0;

    // Update dashboard
    adminTodayOrders.textContent = todayOrders.length;
    activeUsersCount.textContent = uniqueUsers.length;
    todayRevenue.textContent = `₹${revenue}`;
    kitchenEfficiency.textContent = `${efficiency}%`;
}

// Load manage orders
function loadManageOrders() {
    const adminOrdersTable = document.getElementById('adminOrdersTable');
    if (!adminOrdersTable) return;

    adminOrdersTable.innerHTML = '';

    orders.slice().reverse().forEach(order => {
        const row = document.createElement('tr');
        const itemsText = order.items.map(item => `${item.quantity}x ${item.name}`).join(', ');
        const time = new Date(order.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.customerId} (${order.customerName})</td>
                    <td>${itemsText}</td>
                    <td>₹${order.total}</td>
                    <td>${time}</td>
                    <td><span class="order-status status-${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></td>
                    <td>
                        <button class="action-btn btn-view" onclick="viewOrderDetails('${order.id}')">View</button>
                    </td>
                `;
        adminOrdersTable.appendChild(row);
    });
}

// Load manage users
function loadManageUsers() {
    const usersTable = document.getElementById('usersTable');
    if (!usersTable) return;

    usersTable.innerHTML = '';

    // Combine college students with system users
    const allUsers = [...Object.entries(collegeDatabase).map(([id, data]) => ({
        id,
        name: data.name,
        role: 'student',
        email: data.email,
        orders: userOrderHistory[id] ? userOrderHistory[id].length : 0,
        lastOrder: userOrderHistory[id] && userOrderHistory[id].length > 0 ?
            new Date(userOrderHistory[id][userOrderHistory[id].length - 1].timestamp).toLocaleDateString() : 'Never'
    })), {
        id: 'ADMIN001',
        name: 'System Admin',
        role: 'admin',
        email: 'admin@abccollege.edu',
        orders: '-',
        lastOrder: '-'
    }, {
        id: 'CHEF001',
        name: 'Master Chef',
        role: 'chef',
        email: 'chef@abccollege.edu',
        orders: '-',
        lastOrder: '-'
    }];

    allUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td><span class="order-status status-${user.role}">${user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span></td>
                    <td>${user.email}</td>
                    <td>${user.orders}</td>
                    <td>${user.lastOrder}</td>
                    <td><span class="order-status status-active">Active</span></td>
                `;
        usersTable.appendChild(row);
    });
}

// Load system reports
function loadSystemReports() {
    // Order trends chart
    const orderTrendsCtx = document.getElementById('orderTrendsChart').getContext('2d');

    // Sample data for charts
    const orderTrendsData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Orders',
            data: [45, 52, 48, 65, 72, 55, 40],
            borderColor: '#FF6B35',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
            fill: true
        }]
    };

    new Chart(orderTrendsCtx, {
        type: 'line',
        data: orderTrendsData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Category distribution chart
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');

    const categoryData = {
        labels: ['Main Course', 'Fast Food', 'Healthy', 'Beverages'],
        datasets: [{
            data: [35, 25, 20, 20],
            backgroundColor: ['#FF6B35', '#FFA500', '#2ecc71', '#3498db']
        }]
    };

    new Chart(categoryCtx, {
        type: 'pie',
        data: categoryData,
        options: {
            responsive: true
        }
    });

    // Peak hours chart
    const peakHoursCtx = document.getElementById('peakHoursChart').getContext('2d');

    const peakHoursData = {
        labels: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM'],
        datasets: [{
            label: 'Orders',
            data: [10, 25, 45, 60, 40, 30, 15],
            backgroundColor: 'rgba(52, 152, 219, 0.5)',
            borderColor: '#3498db',
            borderWidth: 1
        }]
    };

    new Chart(peakHoursCtx, {
        type: 'bar',
        data: peakHoursData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Load admin notifications
function loadAdminNotifications() {
    const adminNotifications = document.getElementById('adminNotifications');
    if (!adminNotifications) return;

    // Filter notifications for admin
    const recentNotifications = notifications
        .filter(notif => notif.role === 'admin')
        .slice(-5)
        .reverse();

    adminNotifications.innerHTML = '';

    recentNotifications.forEach(notif => {
        const notification = document.createElement('div');
        notification.className = 'notification admin';
        const time = notif.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        notification.innerHTML = `
                    <p>${notif.message}</p>
                    <div class="notification-time">${time}</div>
                `;
        adminNotifications.appendChild(notification);
    });

    // Add default message if no notifications
    if (recentNotifications.length === 0) {
        const notification = document.createElement('div');
        notification.className = 'notification admin';
        notification.innerHTML = `
                    <p>System notifications will appear here.</p>
                    <div class="notification-time">System</div>
                `;
        adminNotifications.appendChild(notification);
    }
}

// View order details (admin)
function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    const itemsText = order.items.map(item => `${item.quantity}x ${item.name} (₹${item.price})`).join('\n');
    const total = order.total;
    const status = order.status;
    const customer = `${order.customerName} (${order.customerId})`;
    const time = new Date(order.timestamp).toLocaleString();

    alert(`Order Details:\n\nOrder ID: ${orderId}\nCustomer: ${customer}\nStatus: ${status}\nTime: ${time}\n\nItems:\n${itemsText}\n\nTotal: ₹${total}`);
}

// =============================
// UTILITY FUNCTIONS
// =============================

// Add notification
function addNotification(role, message, timestamp) {
    notifications.push({
        role,
        message,
        timestamp
    });
}

// Show alert message
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());

    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;

    // Set icon based on type
    let icon = 'fas fa-info-circle';
    if (type === 'success') icon = 'fas fa-check-circle';
    if (type === 'warning') icon = 'fas fa-exclamation-triangle';
    if (type === 'danger') icon = 'fas fa-times-circle';

    alert.innerHTML = `
                <i class="${icon}"></i>
                <span>${message}</span>
            `;

    // Add to document
    document.body.appendChild(alert);

    // Remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.parentNode.removeChild(alert);
        }
    }, 5000);
}

// Track order function
window.trackOrder = function () {
    const orderId = document.getElementById('trackOrderInput').value.trim().toUpperCase();
    const trackOrderResult = document.getElementById('trackOrderResult');
    const trackOrderMessage = document.getElementById('trackOrderMessage');
    const trackOrderId = document.getElementById('trackOrderId');
    const trackOrderStatus = document.getElementById('trackOrderStatus');
    const trackOrderItems = document.getElementById('trackOrderItems');
    const trackOrderTotal = document.getElementById('trackOrderTotal');
    const trackOrderReady = document.getElementById('trackOrderReady');

    if (!orderId) {
        showAlert("Please enter an order number", "warning");
        return;
    }

    const order = orders.find(o => o.id === orderId);

    if (!order) {
        trackOrderResult.style.display = 'none';
        trackOrderMessage.innerHTML = `
                    <i class="fas fa-times-circle" style="font-size: 3rem; margin-bottom: 15px; color: var(--danger-red);"></i>
                    <p>Order #${orderId} not found. Please check the order number.</p>
                `;
        trackOrderMessage.style.display = 'block';
        return;
    }

    // Check if customer is viewing their own order
    if (currentRole === 'customer' && order.customerId !== currentUser.id) {
        showAlert("You can only track your own orders", "warning");
        return;
    }

    // Display order details
    trackOrderId.textContent = order.id;
    trackOrderStatus.textContent = order.status.charAt(0).toUpperCase() + order.status.slice(1);

    // Format items
    const itemsText = order.items.map(item => `${item.quantity}x ${item.name}`).join(", ");
    trackOrderItems.textContent = itemsText;

    trackOrderTotal.textContent = `₹${order.total}`;

    // Calculate estimated ready time
    const orderTime = new Date(order.timestamp);
    let readyTime = new Date(orderTime);

    if (order.status === 'pending') {
        readyTime.setMinutes(readyTime.getMinutes() + 25);
    } else if (order.status === 'preparing') {
        readyTime.setMinutes(readyTime.getMinutes() + 15);
    } else {
        readyTime.setMinutes(readyTime.getMinutes() + 5);
    }

    const readyTimeText = readyTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    trackOrderReady.textContent = (order.status === 'ready' || order.status === 'delivered') ? 'Ready for pickup' : `${readyTimeText}`;

    // Show result
    trackOrderResult.style.display = 'block';
    trackOrderMessage.style.display = 'none';

    // Highlight status
    const statusElement = trackOrderStatus;
    statusElement.style.fontWeight = 'bold';

    if (order.status === 'ready' || order.status === 'delivered') {
        statusElement.style.color = "var(--success-green)";
    } else if (order.status === 'preparing') {
        statusElement.style.color = "var(--warning-yellow)";
    } else {
        statusElement.style.color = "var(--primary-orange)";
    }
};

// Make functions available globally for onclick events
window.addToCart = addToCart;
window.adjustQuantity = adjustQuantity;
window.updateOrderStatus = updateOrderStatus;
window.viewOrderDetails = viewOrderDetails;

// Initialize track order button
document.addEventListener('DOMContentLoaded', function () {
    const trackOrderBtn = document.getElementById('trackOrderBtn');
    if (trackOrderBtn) {
        trackOrderBtn.addEventListener('click', window.trackOrder);
    }
});
