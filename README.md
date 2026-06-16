# SaloneFarm Connect

SaloneFarm Connect is a presentation-ready static Web Design 1 project focused on farmer advisory and market access in Sierra Leone.

## What was added

- Multi-page website structure instead of one long page
- Actual SVG logo stored in the images folder
- All images are stored locally in the images folder
- Register page with farmer/customer profile creation
- Login page with demo phone/email and password fields
- Non-functional Google and Facebook login/signup buttons
- Dynamic navigation that hides Register/Login after account creation
- Profile page showing registered user details
- Farmer dashboard with unique farmer product upload
- Farmer-only previous products table
- Products published from farmer dashboard appear on the marketplace
- Customer marketplace with Add to Cart buttons
- Order cart and static checkout form
- Advisory tools with JavaScript interaction
- Responsive layout for desktop, tablet, and mobile

## Pages

- index.html - Home
- advisory.html - Farmer advisory tools
- market.html - Customer marketplace
- farmer-dashboard.html - Farmer product dashboard
- cart.html - Customer order cart
- login.html - Login
- register.html - Registration
- profile.html - User profile
- contact.html - Contact placeholder

## Important note

This is a static prototype. It uses browser localStorage for demo profile, farmer products, and cart features. A future full system can use a backend, database, real authentication, SMS alerts, and payment processing.


## Final Repair Notes

- Registration now includes password and confirm password fields.
- Login checks the saved phone/email/full name together with the saved password.
- Problem and Solution navigation links were removed from the presentation flow.
- Marketplace products now use unique local images stored inside `images/products/`.

## Presentation Polish Pass

- Contact page rebuilt into a working contact form (name, email/phone, subject, message) with validation and an on-screen confirmation, matching the rest of the site.
- Contact and Advisory links added to the main navigation and footer on every page so no page is orphaned.
- Added a site favicon using the existing logo.
- Compressed the oversized rice-fields-rokupr.jpg image (4.2MB at 3648x2736) down to ~200KB at 1600px wide with no visible quality loss, cutting total page weight significantly.
- Verified end-to-end with automated tests: register (farmer and customer), login (correct/incorrect credentials, email and phone identity), profile rendering, farmer product upload and farmer-only dashboard access, marketplace filtering, add-to-cart, checkout, advisory tools, and full link/ID integrity across all 9 pages.
