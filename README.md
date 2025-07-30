# 🚀 Crypto-Harbor - Cryptocurrency Tracking Application

A modern, responsive cryptocurrency tracking web application built with React.js that provides real-time cryptocurrency data, market analysis, and exchange information.

## 🚀 Live Demo

- **Live Demo on netlify**: [https://crypto-harbor-using-react.netlify.app/](https://crypto-harbor-using-react.netlify.app/)

- **Live Demo on vercel**: [https://crypto-harbor-cv05frlog-abhinavsharma486.vercel.app/](https://crypto-harbor-cv05frlog-abhinavsharma486.vercel.app/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Components Breakdown](#components-breakdown)
- [Key Features Explained](#key-features-explained)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Crypto-Harbor is a comprehensive cryptocurrency tracking platform that allows users to:
- Browse and track cryptocurrency prices in real-time
- View detailed coin information and market statistics
- Analyze price charts with multiple timeframes
- Explore cryptocurrency exchanges
- Switch between different currencies (INR, USD, EUR)
- Experience a modern, responsive design with dark/light theme support

## ✨ Features

### 🏠 Home Page
- Animated Bitcoin logo with smooth floating animation
- Modern landing page with "Crypto-Harbor" branding
- Responsive design with gold accent colors

### 🪙 Cryptocurrency Listings
- **Real-time Data**: Live cryptocurrency prices from CoinGecko API
- **Multi-Currency Support**: View prices in INR (₹), USD ($), EUR (€)
- **Pagination**: Browse through 132 pages of cryptocurrency data
- **Interactive Cards**: Hover effects and clickable coin cards
- **Currency Toggle**: Easy switching between different currencies

### 📊 Coin Details & Analytics
- **Comprehensive Statistics**: Market cap, supply, price changes
- **Interactive Charts**: Price history with Chart.js integration
- **Multiple Timeframes**: 24h, 7d, 14d, 30d, 60d, 200d, 365d, max
- **Price Indicators**: High/low 24h range with visual progress bars
- **Market Rankings**: Coin ranking and market position
- **Real-time Updates**: Last updated timestamps

### 🏢 Exchange Information
- **Exchange Listings**: Browse cryptocurrency exchanges
- **Trust Rankings**: View exchange trust scores
- **Direct Links**: Click to visit exchange websites
- **Visual Cards**: Exchange logos and information display

### 🎨 User Interface
- **Dark/Light Theme**: Toggle between themes with floating button
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion animations throughout
- **Loading States**: Professional loading spinners
- **Error Handling**: User-friendly error messages
- **Modern UI**: Chakra UI components for consistent design

## 🛠 Technologies Used

### Frontend Framework
- **React.js 18.2.0**: Modern JavaScript library for building user interfaces
- **React Router DOM 6.16.0**: Client-side routing for single-page application

### UI Framework & Styling
- **Chakra UI 2.8.1**: Modern component library with built-in dark mode
- **Emotion 11.11.1**: CSS-in-JS styling solution
- **Framer Motion 10.16.4**: Animation library for smooth transitions

### Data Visualization
- **Chart.js 4.4.0**: JavaScript charting library
- **React Chart.js 2 5.2.0**: React wrapper for Chart.js

### HTTP Client & API
- **Axios 1.5.0**: Promise-based HTTP client for API requests
- **CoinGecko API**: Free cryptocurrency data API

### Icons & Assets
- **React Icons 4.11.0**: Popular icon library
- **Custom Assets**: Bitcoin logo and profile images

### Development Tools
- **Create React App**: React development environment
- **ESLint**: Code linting and formatting
- **Web Vitals**: Performance monitoring

## 📁 Project Structure

```
Crypto-Harbor_using_react/
├── public/
│   ├── index.html              # Main HTML template
│   ├── favicon.ico             # App icon
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots file
├── src/
│   ├── assets/
│   │   ├── abhinav_profile.jpg # Developer profile image
│   │   └── btc.png             # Bitcoin logo
│   ├── components/
│   │   ├── Chart.jsx           # Price chart component
│   │   ├── CoinCard.jsx        # Individual coin display card
│   │   ├── CoinDetails.jsx     # Detailed coin information page
│   │   ├── Coins.jsx           # Main coins listing page
│   │   ├── ErrorComponent.jsx  # Error handling component
│   │   ├── Exchanges.jsx       # Cryptocurrency exchanges page
│   │   ├── Footer.jsx          # Application footer
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Home.jsx            # Landing page
│   │   └── Loader.jsx          # Loading spinner component
│   ├── App.js                  # Main application component
│   ├── ColorThemeSwitcher.js   # Dark/light theme toggle
│   └── index.js                # Application entry point
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
└── README.md                   # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Crypto-Harbor_using_react
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open Application**
   - The application will open automatically in your default browser
   - Default URL: `http://localhost:3000`

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (not recommended)
npm run eject
```

## 📱 Usage

### Navigation
- **Home**: Landing page with animated Bitcoin logo
- **Coins**: Browse all cryptocurrencies with pagination
- **Exchanges**: View cryptocurrency exchange listings
- **Coin Details**: Click on any coin card to view detailed information

### Currency Switching
- Use the radio buttons (INR/USD/EUR) to switch between currencies
- All prices and charts will update automatically

### Theme Toggle
- Click the moon/sun icon in the top-right corner
- Switch between dark and light themes

### Chart Timeframes
- Select different time periods (24h, 7d, 14d, 30d, 60d, 200d, 365d, max)
- Charts will update to show price history for selected timeframe

## 🔌 API Integration

### CoinGecko API
The application uses the CoinGecko API for real-time cryptocurrency data:

```javascript
const server = `https://api.coingecko.com/api/v3`
```

### API Endpoints Used
- `/coins/markets` - Get cryptocurrency market data
- `/coins/{id}` - Get detailed coin information
- `/coins/{id}/market_chart` - Get price chart data
- `/exchanges` - Get exchange listings

### Rate Limiting
- CoinGecko API has rate limits for free tier
- Application includes error handling for API failures
- Loading states provide user feedback during API calls

## 🧩 Components Breakdown

### Core Components

#### `App.js`
- Main application component with routing setup
- Uses React Router for navigation
- Includes Header and Footer components

#### `Header.jsx`
- Navigation bar with gold accent colors
- Links to Home, Exchanges, and Coins pages
- Responsive design with Chakra UI

#### `Home.jsx`
- Landing page with animated Bitcoin logo
- Uses Framer Motion for floating animation
- "Crypto-Harbor" branding with large typography

#### `Coins.jsx`
- Main cryptocurrency listing page
- Currency selection (INR/USD/EUR)
- Pagination with 132 pages
- Grid layout of coin cards
- Error handling and loading states

#### `CoinCard.jsx`
- Individual cryptocurrency display card
- Hover effects with scale transformation
- Links to detailed coin page
- Displays coin image, symbol, name, and price

#### `CoinDetails.jsx`
- Comprehensive coin information page
- Interactive price charts with multiple timeframes
- Market statistics and rankings
- Price change indicators with arrows
- Supply and market cap information

#### `Chart.jsx`
- Price chart component using Chart.js
- Line chart with customizable timeframes
- Responsive design with proper scaling
- Color-coded price data

#### `Exchanges.jsx`
- Cryptocurrency exchange listings
- Exchange cards with logos and rankings
- Direct links to exchange websites
- Trust score rankings

#### `ColorThemeSwitcher.js`
- Dark/light theme toggle button
- Fixed position in top-right corner
- Uses Chakra UI color mode
- Moon/sun icon indicators

#### `Loader.jsx`
- Loading spinner component
- Centered on screen during data fetching
- Scaled for better visibility

#### `ErrorComponent.jsx`
- Error message display
- Fixed position at bottom of screen
- Alert styling with icons

#### `Footer.jsx`
- Application footer with about information
- Developer profile and contact details
- Responsive layout with stack components

## 🔑 Key Features Explained

### Real-time Data Fetching
```javascript
useEffect(() => {
    const fetchCoins = async () => {
        try {
            const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
            setCoins(data)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }
    fetchCoins()
}, [currency, page])
```

### Interactive Charts
```javascript
const Chart = ({ arr = [], currency, days }) => {
    const prices = [];
    const date = []
    
    for (let i = 0; i < arr.length; i++) {
        if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
        else date.push(new Date(arr[i][0]).toLocaleDateString());
        prices.push(arr[i][1]);
    }
    
    const data = {
        labels: date,
        datasets: [{
            label: `Prices in ${currency}`,
            data: prices,
            borderColor: "rgb(255,33,132)",
            backgroundColor: "rgba(255,33,132,0.5)"
        }]
    }
    
    return <Line options={{ responsive: true }} data={data} />
}
```

### Theme Switching
```javascript
const ColorModeSwitcher = props => {
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
        <IconButton
            variant="ghost"
            color="white"
            position={'fixed'}
            top={4}
            right={4}
            zIndex={'overlay'}
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            {...props}
        />
    );
};
```

### Responsive Design
- Mobile-first approach with Chakra UI responsive props
- Flexible layouts that adapt to different screen sizes
- Touch-friendly interface elements
- Optimized for desktop, tablet, and mobile devices

## 📸 Screenshots

*[Screenshots would be added here showing the different pages and features]*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use functional components with hooks
- Maintain consistent code formatting
- Add proper error handling
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Abhinav Sharma**
- Profile: [GitHub Profile]
- Email: [Contact Email]
- LinkedIn: [LinkedIn Profile]

## 🙏 Acknowledgments

- **CoinGecko API** for providing free cryptocurrency data
- **Chakra UI** for the excellent component library
- **React Community** for the amazing ecosystem
- **Chart.js** for powerful charting capabilities
- **Framer Motion** for smooth animations

## 📞 Support

If you encounter any issues or have questions:
1. Check the existing issues in the repository
2. Create a new issue with detailed description
3. Contact the developer directly

---

**Made with ❤️ by Abhinav Sharma**

*This project is for educational and demonstration purposes. Cryptocurrency investments carry risks, and this application is not financial advice.*
