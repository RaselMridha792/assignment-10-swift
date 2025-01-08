# swift: Sports Equipment Online Store  

Welcome to **swift**, your one-stop online store for premium sports equipment and accessories. This e-commerce platform allows customers to browse, purchase, and manage their sports accessories needs effortlessly.  

## Live client Site URL 
[EquiSports Live](https://sports-auth-a50fc.web.app/)

##Live server Site URL
[EquiSports Live](https://a-sports-equipment-store-server.vercel.app/)


## 🚀Key Features  

- **User-Friendly Interface**:  
  - Responsive design tailored for mobile, tablet, and desktop users.  
  - Dark/light theme toggle for enhanced user experience.  

- **Secure User Authentication**:  
  - Email-password-based authentication.  
  - Google Sign-In for quick access.  
  - Conditional rendering of Navbar options based on login status.  

- **Dynamic Product Management**:  
  - Add, update, view, and delete products with ease.  
  - Logged-in users can manage their personal equipment list.  

- **Interactive Design Enhancements**:  
  - Animations using **React Awesome Reveal**.  
  - Tooltips for hover on user image to showing name with **React Tooltip**.  

- **Robust Features**:  
  - Private routes to secure user data and actions.  
  - Real-time sorting of products by price by decending order.  
  - Fully functional 404 error page.  

---

## 🖥️ Pages Overview  

### **Navbar**:  
- Dynamic buttons for login, registration, and logout.  
- Navigation links for Home, All Equipment, Add Equipment, and My Equipment List.  

### **Home Page**:  
- A banner slider with sports-themed content.  
- Product showcase with details and categories section.  
- Additional sections for shiping and our brands and review sections.  

### **Add Equipment** *(Private)*:  
- A detailed form to add products with fields like image, description, customization options, etc.  

### **All Sports Equipment**:  
- Displays products in a table format.  
- Includes sort functionality and detailed view navigation.  

### **View Details** *(Private)*:  
- Showcases complete information of selected equipment in a visually appealing format.  

### **My Equipment List** *(Private)*:  
- Displays equipment added by the logged-in user.  
- Includes update and delete functionalities.  

### **Update Page** *(Private)*:  
- Pre-filled form for updating product details.  

### **404 Page**:  
- A creative page to handle non-existent routes.  

---

##  dependencies

    "@emotion/react": "^11.13.5",
    "firebase": "^11.0.2",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-awesome-reveal": "^4.2.14",
    "react-dom": "^18.3.1",
    "react-fast-marquee": "^1.6.5",
    "react-helmet": "^6.1.0",
    "react-icons": "^5.4.0",
    "react-responsive-carousel": "^3.2.23",
    "react-router-dom": "^7.0.2",
    "react-toastify": "^10.0.6",
    "react-tooltip": "^5.28.0",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.14.5",
    "swiper": "^11.2.0"

## devDependencies"
    "@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.23",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^6.0.1"


## Installing
1.git clone 

- git clone https://github.com/RaselMridha792/assignment-10-swift
  
2. npm install to install dependency
3. create a .env.local and paste your firebase api keys

## 🌐 Deployment  

- **Client-side Hosting**: Firebase 
- **Server-side Hosting**: Vercel  

---

## 🔒 Environment Variables  

- Firebase configuration keys and MongoDB credentials are securely stored in environment variables.
- environment variable for server keys

---

