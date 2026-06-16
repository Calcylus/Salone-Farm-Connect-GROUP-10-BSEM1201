// =========================================================
// SaloneFarm Connect - Static LocalStorage Prototype
// =========================================================

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
}

const seedProducts = [
  {
    "id": "seed-rice-1",
    "name": "Rokupr Rice",
    "category": "Rice",
    "quantity": "15 bags",
    "price": "NLe 480 per bag",
    "district": "Kambia",
    "contact": "[Demo Farmer]",
    "description": "Locally grown rice from the Rokupr area, ready for traders and household customers.",
    "farmerId": "demo",
    "farmerName": "Rokupr Rice Farmers",
    "image": "images/products/roko-rice.svg",
    "status": "Published"
  },
  {
    "id": "seed-rice-2",
    "name": "Rolako Parboiled Rice",
    "category": "Rice",
    "quantity": "10 bags",
    "price": "NLe 520 per bag",
    "district": "Bombali",
    "contact": "[Demo Farmer]",
    "description": "Clean parboiled rice from Bombali District with good grain quality.",
    "farmerId": "demo",
    "farmerName": "Rolako Farmers Group",
    "image": "images/products/rolako-rice.svg",
    "status": "Published"
  },
  {
    "id": "seed-rice-3",
    "name": "Local Country Rice",
    "category": "Rice",
    "quantity": "6 bags",
    "price": "NLe 450 per bag",
    "district": "Bo",
    "contact": "[Demo Farmer]",
    "description": "Affordable local rice available for restaurants, homes, and community customers.",
    "farmerId": "demo",
    "farmerName": "Bo Produce Network",
    "image": "images/products/country-rice.svg",
    "status": "Published"
  },
  {
    "id": "seed-cassava-1",
    "name": "Fresh Cassava Leaves",
    "category": "Cassava",
    "quantity": "8 baskets",
    "price": "NLe 120 per basket",
    "district": "Western Area",
    "contact": "[Demo Farmer]",
    "description": "Fresh cassava leaves for saka-saka and market sellers.",
    "farmerId": "demo",
    "farmerName": "Western Area Gardeners",
    "image": "images/products/cassava-leaves.svg",
    "status": "Published"
  },
  {
    "id": "seed-cassava-2",
    "name": "Cassava Tubers",
    "category": "Cassava",
    "quantity": "30 bundles",
    "price": "NLe 65 per bundle",
    "district": "Waterloo",
    "contact": "[Demo Farmer]",
    "description": "Fresh cassava tubers harvested for garri, foofoo, and household cooking.",
    "farmerId": "demo",
    "farmerName": "Waterloo Cassava Farm",
    "image": "images/products/cassava-tubers.svg",
    "status": "Published"
  },
  {
    "id": "seed-cassava-3",
    "name": "Dried Cassava Chips",
    "category": "Cassava",
    "quantity": "12 sacks",
    "price": "NLe 210 per sack",
    "district": "Kenema",
    "contact": "[Demo Farmer]",
    "description": "Sun-dried cassava chips for processing and storage.",
    "farmerId": "demo",
    "farmerName": "Kenema Agro Sellers",
    "image": "images/products/cassava-chips.svg",
    "status": "Published"
  },
  {
    "id": "seed-veg-1",
    "name": "Market Vegetables",
    "category": "Vegetables",
    "quantity": "20 crates",
    "price": "NLe 95 per crate",
    "district": "Kenema",
    "contact": "[Demo Farmer]",
    "description": "Mixed vegetables ready for customers, restaurants, and market sellers.",
    "farmerId": "demo",
    "farmerName": "Kenema Market Farmers",
    "image": "images/products/market-vegetables.svg",
    "status": "Published"
  },
  {
    "id": "seed-veg-2",
    "name": "Fresh Pepper",
    "category": "Vegetables",
    "quantity": "9 baskets",
    "price": "NLe 150 per basket",
    "district": "Kono",
    "contact": "[Demo Farmer]",
    "description": "Fresh pepper suitable for retailers and food businesses.",
    "farmerId": "demo",
    "farmerName": "Kono Vegetable Sellers",
    "image": "images/products/fresh-pepper.svg",
    "status": "Published"
  },
  {
    "id": "seed-veg-3",
    "name": "Okra and Garden Eggs",
    "category": "Vegetables",
    "quantity": "14 baskets",
    "price": "NLe 110 per basket",
    "district": "Western Area",
    "contact": "[Demo Farmer]",
    "description": "Mixed okra and garden eggs for Freetown market customers.",
    "farmerId": "demo",
    "farmerName": "Urban Growers SL",
    "image": "images/products/okra-garden-eggs.svg",
    "status": "Published"
  },
  {
    "id": "seed-palm-1",
    "name": "Red Palm Oil",
    "category": "Palm Oil",
    "quantity": "18 gallons",
    "price": "NLe 320 per gallon",
    "district": "Pujehun",
    "contact": "[Demo Farmer]",
    "description": "Rich red palm oil for households, restaurants, and retailers.",
    "farmerId": "demo",
    "farmerName": "Pujehun Palm Sellers",
    "image": "images/products/red-palm-oil.svg",
    "status": "Published"
  },
  {
    "id": "seed-palm-2",
    "name": "Palm Kernel Oil",
    "category": "Palm Oil",
    "quantity": "10 gallons",
    "price": "NLe 280 per gallon",
    "district": "Moyamba",
    "contact": "[Demo Farmer]",
    "description": "Palm kernel oil supplied in clean containers for market use.",
    "farmerId": "demo",
    "farmerName": "Moyamba Oil Group",
    "image": "images/products/palm-kernel-oil.svg",
    "status": "Published"
  },
  {
    "id": "seed-groundnut-1",
    "name": "Raw Groundnut",
    "category": "Groundnut",
    "quantity": "7 bags",
    "price": "NLe 390 per bag",
    "district": "Port Loko",
    "contact": "[Demo Farmer]",
    "description": "Raw groundnut available for traders and food processors.",
    "farmerId": "demo",
    "farmerName": "Port Loko Growers",
    "image": "images/products/raw-groundnut.svg",
    "status": "Published"
  },
  {
    "id": "seed-groundnut-2",
    "name": "Roasted Groundnut",
    "category": "Groundnut",
    "quantity": "50 packs",
    "price": "NLe 20 per pack",
    "district": "Makeni",
    "contact": "[Demo Farmer]",
    "description": "Roasted groundnut prepared for small shops and school vendors.",
    "farmerId": "demo",
    "farmerName": "Makeni Small Traders",
    "image": "images/products/roasted-groundnut.svg",
    "status": "Published"
  },
  {
    "id": "seed-groundnut-3",
    "name": "Groundnut Paste",
    "category": "Groundnut",
    "quantity": "15 containers",
    "price": "NLe 85 per container",
    "district": "Bombali",
    "contact": "[Demo Farmer]",
    "description": "Processed groundnut paste for cooking and household use.",
    "farmerId": "demo",
    "farmerName": "Bombali Processors",
    "image": "images/products/groundnut-paste.svg",
    "status": "Published"
  },
  {
    "id": "seed-mixed-1",
    "name": "Farm Produce Combo",
    "category": "Vegetables",
    "quantity": "25 mixed packs",
    "price": "NLe 180 per pack",
    "district": "Freetown",
    "contact": "[Demo Farmer]",
    "description": "Mixed produce pack containing vegetables and seasonal farm items.",
    "farmerId": "demo",
    "farmerName": "Freetown Market Connect",
    "image": "images/products/farm-produce-combo.svg",
    "status": "Published"
  }
];

function safeJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch { return fallback; }
}
function getProducts(){ return [...seedProducts, ...safeJSON('sfcProducts', [])]; }
function setProducts(products){ localStorage.setItem('sfcProducts', JSON.stringify(products.filter(p => !String(p.id).startsWith('seed-')))); }
function getUser(){ return safeJSON('sfcUser', null); }
function setUser(user){ localStorage.setItem('sfcUser', JSON.stringify(user)); }
function getCart(){ return safeJSON('sfcCart', []); }
function setCart(cart){ localStorage.setItem('sfcCart', JSON.stringify(cart)); }
function userInitials(name='User'){ return name.split(' ').filter(Boolean).map(x=>x[0]).slice(0,2).join('').toUpperCase() || 'U'; }

function initAuthNavigation(){
  const user = getUser();
  document.querySelectorAll('[data-auth="guest"]').forEach(el => el.style.display = user ? 'none' : '');
  document.querySelectorAll('[data-auth="user"]').forEach(el => el.style.display = user ? '' : 'none');
  const logout = document.getElementById('logoutLink');
  if (logout) logout.addEventListener('click', e => { e.preventDefault(); logoutUser(); });
}
function logoutUser(){
  localStorage.removeItem('sfcUser');
  window.location.href = 'login.html';
}
window.logoutUser = logoutUser;
initAuthNavigation();

function setupSocialButtons(){
  document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const holder = document.getElementById('registerMessage') || document.getElementById('loginMessage');
      const message = 'This social login button is included for design presentation only. It is not functional in the static prototype.';
      if (holder) holder.textContent = message; else alert(message);
    });
  });
}
setupSocialButtons();

function renderRegisterState(){
  if (document.body.dataset.page !== 'register') return;
  const user = getUser();
  const form = document.getElementById('registerForm');
  const existing = document.getElementById('existingAccountBox');
  const title = document.getElementById('registerTitle');
  if (user && form && existing) {
    form.style.display = 'none';
    existing.style.display = 'block';
    if (title) title.textContent = 'Your account is already created.';
  }
}
renderRegisterState();

const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const registerMessage = document.getElementById('registerMessage');
    if (password.length < 4) {
      registerMessage.textContent = 'Password must be at least 4 characters for this demo.';
      return;
    }
    if (password !== confirmPassword) {
      registerMessage.textContent = 'Passwords do not match.';
      return;
    }
    const user = {
      id: 'user-' + Date.now(),
      name: document.getElementById('regName').value.trim(),
      role: document.getElementById('regRole').value,
      district: document.getElementById('regDistrict').value.trim(),
      phone: document.getElementById('regPhone').value.trim(),
      email: document.getElementById('regEmail').value.trim() || 'Not provided',
      password: document.getElementById('regPassword').value,
      interest: document.getElementById('regInterest').value.trim() || 'Not provided',
      bio: document.getElementById('regBio').value.trim() || 'No bio added yet',
      createdAt: new Date().toLocaleString()
    };
    setUser(user);
    window.location.href = 'profile.html';
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const user = getUser();
    const msg = document.getElementById('loginMessage');
    if (!user) {
      msg.textContent = 'No saved account found in this browser. Please create an account first.';
      return;
    }
    const identity = document.getElementById('loginIdentity').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    const email = String(user.email || '').toLowerCase();
    const phone = String(user.phone || '').toLowerCase();
    const identityMatches = identity === email || identity === phone || identity === user.name.toLowerCase();
    const passwordMatches = password === user.password;
    if (identityMatches && passwordMatches) {
      msg.textContent = 'Login successful. Redirecting to profile...';
      setTimeout(() => window.location.href = 'profile.html', 700);
    } else {
      msg.textContent = 'Demo login failed. Use the saved phone/email/full name and password from registration.';
    }
  });
}

function renderProfile(){
  const output = document.getElementById('profileOutput');
  if (!output) return;
  const user = getUser();
  if (!user) {
    output.innerHTML = `<div class="cart-empty"><h2>No profile found</h2><p>Please login or register first to create a profile.</p><br><div class="stacked-buttons"><a class="btn primary" href="login.html">Login</a><a class="btn secondary" href="register.html">Register Now</a></div></div>`;
    return;
  }
  output.innerHTML = `
    <div class="profile-avatar">${userInitials(user.name)}</div>
    <h2>${user.name}</h2>
    <p class="small-note">${user.role.toUpperCase()} PROFILE</p>
    <div class="profile-row"><span>Account Type</span><span>${user.role}</span></div>
    <div class="profile-row"><span>District</span><span>${user.district}</span></div>
    <div class="profile-row"><span>Phone</span><span>${user.phone}</span></div>
    <div class="profile-row"><span>Email</span><span>${user.email}</span></div>
    <div class="profile-row"><span>Main Interest</span><span>${user.interest}</span></div>
    <div class="profile-row"><span>Registered</span><span>${user.createdAt}</span></div>
    <br><h3>Bio / Business Description</h3><p>${user.bio}</p>
    <br><div class="stacked-buttons">
      ${user.role === 'farmer' ? '<a class="btn primary" href="farmer-dashboard.html">Go to Farmer Dashboard</a>' : '<a class="btn primary" href="market.html">Shop in Market</a>'}
      <button class="btn danger" onclick="logoutUser()">Logout</button>
    </div>
  `;
}
renderProfile();
function clearProfile(){ localStorage.removeItem('sfcUser'); window.location.href='register.html'; }
window.clearProfile = clearProfile;

function farmerImage(category){
  const map = {Rice:'images/products/roko-rice.svg', Cassava:'images/products/cassava-tubers.svg', Vegetables:'images/products/market-vegetables.svg', 'Palm Oil':'images/products/red-palm-oil.svg', Groundnut:'images/products/raw-groundnut.svg'};
  return map[category] || 'images/products/farm-produce-combo.svg';
}

function renderFarmerDashboard(){
  const summary = document.getElementById('farmerSummary');
  const tbody = document.getElementById('farmerProductsTable');
  if (!summary || !tbody) return;
  const user = getUser();
  if (!user || user.role !== 'farmer') {
    summary.innerHTML = `<div class="cart-empty"><h2>Farmer account needed</h2><p>Login or register as a farmer to upload produce and manage your product table.</p><br><div class="stacked-buttons"><a class="btn primary" href="login.html">Login</a><a class="btn secondary" href="register.html">Register as Farmer</a></div></div>`;
    tbody.innerHTML = `<tr><td colspan="6">No farmer profile found.</td></tr>`;
    const form = document.getElementById('productForm'); if(form) form.style.display='none';
    return;
  }
  summary.innerHTML = `<div class="profile-avatar">${userInitials(user.name)}</div><h2>${user.name}</h2><p class="small-note">Registered farmer</p><div class="profile-row"><span>District</span><span>${user.district}</span></div><div class="profile-row"><span>Phone</span><span>${user.phone}</span></div><div class="profile-row"><span>Interest</span><span>${user.interest}</span></div><br><a class="btn secondary" href="profile.html">View Full Profile</a>`;
  const own = getProducts().filter(p => p.farmerId === user.id);
  tbody.innerHTML = own.length ? own.map(p => `<tr><td>${p.name}</td><td>${p.category}</td><td>${p.quantity}</td><td>${p.price}</td><td><span class="badge">${p.status}</span></td><td><button class="remove-btn" onclick="deleteProduct('${p.id}')">Remove</button></td></tr>`).join('') : `<tr><td colspan="6">No products uploaded yet. Use the form above to publish produce to the market.</td></tr>`;
}
renderFarmerDashboard();

const productForm = document.getElementById('productForm');
if (productForm) {
  productForm.addEventListener('submit', e => {
    e.preventDefault();
    const user = getUser();
    if (!user || user.role !== 'farmer') return;
    const category = document.getElementById('productCategory').value;
    const product = {
      id: 'prod-' + Date.now(),
      name: document.getElementById('productName').value.trim(),
      category,
      quantity: document.getElementById('productQuantity').value.trim(),
      price: document.getElementById('productPrice').value.trim(),
      district: document.getElementById('productDistrict').value.trim(),
      contact: document.getElementById('productContact').value.trim(),
      description: document.getElementById('productDescription').value.trim() || 'No description added',
      farmerId: user.id,
      farmerName: user.name,
      image: farmerImage(category),
      status: 'Published'
    };
    const products = getProducts(); products.push(product); setProducts(products);
    document.getElementById('productMessage').textContent = 'Product published to market successfully.';
    productForm.reset(); renderFarmerDashboard();
  });
}
function deleteProduct(id){ setProducts(getProducts().filter(p => p.id !== id)); renderFarmerDashboard(); }
window.deleteProduct = deleteProduct;

function renderMarket(){
  const box = document.getElementById('marketProducts'); if(!box) return;
  const filter = document.getElementById('marketFilter')?.value || 'all';
  const products = getProducts().filter(p => p.status === 'Published' && (filter === 'all' || p.category === filter));
  box.innerHTML = products.map(p => `<article class="product-card"><img src="${p.image}" alt="${p.name}"><div class="product-content"><span class="badge">${p.category}</span><h3>${p.name}</h3><p class="price">${p.price}</p><p>${p.description}</p><p class="meta"><strong>Quantity:</strong> ${p.quantity}<br><strong>District:</strong> ${p.district}<br><strong>Farmer:</strong> ${p.farmerName}</p><button class="btn primary" onclick="addToCart('${p.id}')">Add to Cart</button></div></article>`).join('') || `<div class="cart-empty">No products found for this category.</div>`;
}
window.renderMarket = renderMarket;
renderMarket();
function addToCart(id){
  const product = getProducts().find(p => p.id === id); if(!product) return;
  const cart = getCart();
  const found = cart.find(item => item.id === id);
  if (found) found.cartQty += 1; else cart.push({...product, cartQty:1});
  setCart(cart);
  alert('Product added to order cart.');
}
window.addToCart = addToCart;

function renderCart(){
  const box = document.getElementById('cartItems'); if(!box) return;
  const cart = getCart();
  if (!cart.length) { box.innerHTML = `<div class="cart-empty">Your cart is empty. Go to the market page and add products.</div>`; return; }
  box.innerHTML = cart.map(item => `<div class="cart-item"><img src="${item.image}" alt="${item.name}"><div><h3>${item.name}</h3><p class="meta">${item.category} • ${item.quantity} • ${item.district}<br>${item.price}<br>Farmer: ${item.farmerName}</p></div><div><strong>Qty: ${item.cartQty}</strong><br><button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button></div></div>`).join('');
}
renderCart();
function removeFromCart(id){ setCart(getCart().filter(i => i.id !== id)); renderCart(); }
window.removeFromCart = removeFromCart;
const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) checkoutForm.addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('orderMessage');
  if (!getCart().length) { msg.textContent = 'Cart is empty. Add products first.'; return; }
  const order = {
    name: document.getElementById('customerName').value,
    phone: document.getElementById('customerPhone').value,
    location: document.getElementById('customerLocation').value,
    note: document.getElementById('customerNote').value,
    cart:getCart(),
    date:new Date().toLocaleString()
  };
  localStorage.setItem('sfcLastOrder', JSON.stringify(order));
  setCart([]); renderCart(); checkoutForm.reset();
  msg.textContent = 'Order placed successfully in this static prototype.';
});

function recommendCrop(){
  const d = document.getElementById('districtSelect').value; const s = document.getElementById('seasonSelect').value;
  let advice = `${d}: For ${s}, farmers should plan around rainfall, soil condition, and market demand.`;
  if(['Kambia','Bombali'].includes(d)) advice += ' Rice and groundnut are strong recommendations.';
  if(['Bo','Kenema'].includes(d)) advice += ' Cassava, rice, vegetables, and tree crops can perform well.';
  if(d === 'Western Area') advice += ' Short-cycle vegetables and urban market produce are useful.';
  document.getElementById('cropAdvice').textContent = advice;
}
function showPestAlert(){
  const crop = document.getElementById('pestCrop').value;
  const map = {Rice:'Watch for birds, weeds, stem borers, and water control issues.', Cassava:'Watch for cassava mosaic symptoms and keep fields clean.', Vegetables:'Watch for aphids, caterpillars, and fungal disease after rain.', Groundnut:'Watch for leaf spot and proper drying after harvest.'};
  document.getElementById('pestAdvice').textContent = map[crop];
}
function checkMarketPrice(){
  const crop = document.getElementById('priceCrop').value;
  const map = {Rice:'Estimated range: NLe 420 - NLe 520 per bag depending on quality and district.', Cassava:'Estimated range: NLe 90 - NLe 140 per basket/bundle.', 'Palm Oil':'Estimated range: NLe 250 - NLe 380 per gallon depending on location.', Vegetables:'Estimated range: NLe 80 - NLe 130 per crate.'};
  document.getElementById('priceAdvice').textContent = map[crop];
}
window.recommendCrop = recommendCrop;
window.showPestAlert = showPestAlert;
window.checkMarketPrice = checkMarketPrice;

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const status = document.getElementById('contactMessageStatus');
    const name = document.getElementById('contactName').value.trim();
    const contact = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    if (!name || !contact || !subject || !message) {
      status.textContent = 'Please fill in every field before sending your message.';
      return;
    }
    status.textContent = `Thank you, ${name}. Your message about "${subject}" has been received. In this static prototype no email is sent, but a real deployment would forward this to the project team.`;
    contactForm.reset();
  });
}
