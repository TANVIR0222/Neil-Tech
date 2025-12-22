# Neil-Tech

A comprehensive mobile application designed for nail technicians and beauty professionals to manage their business, track income, schedule appointments, learn new techniques, and shop for professional supplies.

## 📱 Project Overview

**Neil-Tech** is a React Native application built with Expo that provides nail technicians with an all-in-one platform to:
- Manage daily appointments and schedules
- Track income and analyze business performance
- Learn new nail art techniques through courses
- Shop for professional nail supplies
- Organize weekly tasks and goals
- Get inspired with nail design mood boards
- Earn rewards for achievements

**Target Audience:** Nail technicians, beauty salon professionals, and independent nail artists looking to streamline their business operations.

## 🛠️ Tech Stack

### Core Technologies
- **React Native** `0.81.5` - Cross-platform mobile development
- **Expo SDK** `54.0.21` - Development platform and tooling
- **TypeScript** `5.9.2` - Type-safe JavaScript
- **React** `19.1.0` - UI library

### Navigation & Routing
- **Expo Router** `6.0.14` - File-based routing system
- **React Navigation** `7.1.8` - Navigation library
  - Bottom Tabs Navigator `7.4.0`
  - Drawer Navigator `7.5.0`

### UI & Styling
- **TailwindCSS** (via `twrnc` `4.9.1`) - Utility-first styling
- **Expo Linear Gradient** `15.0.7` - Gradient components
- **Expo Blur** `15.0.7` - Blur effects
- **React Native SVG** `15.12.1` - SVG support
- **React Native Reanimated** `4.1.1` - Animations

### Forms & Validation
- **Formik** `2.4.6` - Form management
- **Yup** `1.7.1` - Schema validation

### Data Visualization & UI Components
- **React Native Calendars** `1.1313.0` - Calendar components
- **React Native Gifted Charts** `1.4.64` - Analytics charts
- **React Native Reanimated Carousel** `4.0.3` - Carousel component
- **React Native OTP Entry** `1.8.5` - OTP input

### Additional Features
- **Expo Image Picker** `17.0.8` - Image selection
- **Expo Haptics** `15.0.7` - Haptic feedback
- **DayJS** `1.11.18` - Date manipulation
- **Expo Checkbox** `5.0.7` - Checkbox component

## ✨ Key Features

### 🔐 Authentication
- User login and registration
- Password recovery with OTP verification
- Secure form validation

### 🏠 Home Dashboard
- Daily income overview carousel
- Appointments summary
- Weekly to-do list
- Continue learning section
- Quick access to rewards

### 📅 Planner
- Interactive calendar view
- Appointment scheduling and management
- Daily appointments overview
- Add/edit appointment functionality

### 🎓 Course Management
- Browse popular, trending, and subscribed courses
- Course details with instructor info
- Progress tracking for enrolled courses
- Points and pricing system
- Video lessons support

### 🛍️ Shop
- Product browsing with categories (Gel Polish, Nail Art, Tools, Accessories)
- Product details and pricing
- Points reward system
- Order summary and checkout

### 💰 Income Tracker
- Calendar-based income tracking
- Analytics graphs and visualizations
- Income entry and management
- Historical income data

### 🎨 Mani Mood Board
- Nail design inspiration gallery
- Album organization (French Tips, Minimal, Bridal, etc.)
- Image collections

### 📦 Stock Reorder List
- Track inventory levels
- Reorder reminders
- Supplier management

### 🏆 Rewards System
- Points for completing tasks
- Achievement tracking
- Reward redemption

### 👤 Profile Management
- User profile editing
- Settings and preferences
- Terms and conditions

### 📝 Additional Features
- Daily affirmations
- Weekly to-do list management
- Dark/light mode support

## 📂 Project Structure

```
nail-tech/
├── src/
│   ├── app/                          # File-based routing (Expo Router)
│   │   ├── (drawer)/                 # Drawer navigation group
│   │   │   ├── (tabs)/               # Bottom tabs navigation
│   │   │   │   ├── index.tsx         # Home screen
│   │   │   │   ├── planner.tsx       # Planner screen
│   │   │   │   ├── course.tsx        # Courses screen
│   │   │   │   ├── shop-page.tsx     # Shop screen
│   │   │   │   └── profile.tsx       # Profile screen
│   │   │   └── _layout.tsx           # Drawer layout
│   │   ├── auth/                     # Authentication screens
│   │   ├── income-tracker/           # Income tracking screens
│   │   ├── shop/                     # Shop screens
│   │   ├── course-details/           # Course detail screens
│   │   ├── planner-view/             # Planner detail screens
│   │   ├── mani-mood-board/          # Mood board screens
│   │   ├── stock-reorder-list/       # Stock management screens
│   │   ├── reward/                   # Rewards screens
│   │   ├── weekly/                   # Weekly tasks screens
│   │   ├── daily-affirmation/        # Affirmations screens
│   │   ├── common/                   # Common screens (settings, etc.)
│   │   └── onboarding/               # Onboarding screens
│   ├── components/                   # Reusable UI components
│   │   ├── ui/                       # Feature-specific components
│   │   ├── GlobalTopBar.tsx          # Top navigation bar
│   │   ├── MainButton.tsx            # Primary button component
│   │   ├── CalendarComponent.tsx     # Calendar component
│   │   └── ...                       # Other shared components
│   ├── constants/                    # App constants
│   │   └── app-color.ts              # Color palette
│   ├── context/                      # React Context providers
│   │   └── ScrollContext.tsx         # Scroll state management
│   ├── lib/                          # Third-party library configs
│   │   └── tailwind.ts               # Tailwind configuration
│   ├── utils/                        # Utility functions
│   │   ├── dammy-data.ts             # Mock data for development
│   │   ├── auth-validationSchema.ts  # Form validation schemas
│   │   └── utils.ts                  # Helper functions
│   └── type/                         # TypeScript type definitions
├── assets/                           # Static assets
│   ├── images/                       # Image files
│   └── icons.ts                      # SVG icons
├── app.json                          # Expo configuration
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.js                # Tailwind configuration
└── README.md                         # This file
```

## 🚀 Setup & Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Expo CLI** - Install globally: `npm install -g expo-cli`
- **Expo Go** app on your mobile device (for testing)
- **Android Studio** (for Android development) or **Xcode** (for iOS development)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nail-tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (optional)
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env and add your API keys if needed
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

5. **Run on your preferred platform**
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Scan QR code with Expo Go app for physical device

## 🔐 Environment Variables

This project uses environment variables for sensitive configuration. Create a `.env` file in the root directory based on `.env.example`:

```env
# Google Maps API (if needed for location features)
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Payment Gateway (if implementing payments)
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here

# Backend API URL (if connecting to a backend)
EXPO_PUBLIC_API_URL=https://your-api-url.com

# Other API Keys
# Add any additional API keys your app requires
```

> **⚠️ Security Note:** Never commit the `.env` file to version control. It's already included in `.gitignore`.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the Expo development server |
| `npm run android` | Run the app on Android emulator/device |
| `npm run ios` | Run the app on iOS simulator/device |
| `npm run web` | Run the app in web browser |
| `npm run lint` | Run ESLint to check code quality |
| `npm run reset-project` | Reset the project to a clean state |

## 📸 Screenshots

> **Note:** Screenshots will be added here to showcase the app's features.

### Planned Screenshot Sections:
- **Authentication Flow** - Login, Register, Password Recovery
- **Home Dashboard** - Main overview with carousel and widgets
- **Planner** - Calendar and appointment management
- **Courses** - Course browsing and learning interface
- **Shop** - Product catalog and checkout
- **Income Tracker** - Analytics and income management
- **Profile** - User settings and preferences

## 🎨 Design System

The app uses a consistent gold-themed color palette defined in `src/constants/app-color.ts`:

- **Primary Gold:** `#C9A227`
- **Light Gold:** `#F2DA87`
- **Border Gold:** `#AF925F`
- **Button Text:** `#3B3B3B`

Gradients are used throughout the app for a premium, polished look.

## 🏗️ Architecture

### Navigation Structure
```
Root
├── Auth Stack (Login, Register, Password Recovery)
└── Drawer Navigator
    └── Tab Navigator
        ├── Home
        ├── Planner
        ├── Courses
        ├── Shop
        └── Profile
```

### State Management
- **React Context** - For global state (scroll position, etc.)
- **Formik** - For form state management
- **Local State** - Component-level state with React hooks

### Data Flow
Currently using mock data from `src/utils/dammy-data.ts`. In production, this should be replaced with API calls to a backend service.

## 🧪 Testing

> **Note:** Testing infrastructure is not yet set up. Consider adding:
- **Jest** - Unit testing
- **React Native Testing Library** - Component testing
- **Detox** - E2E testing

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time appointment notifications
- [ ] Payment gateway integration
- [ ] Social media sharing for nail designs
- [ ] Client management system
- [ ] Inventory management with barcode scanning
- [ ] Multi-language support
- [ ] Dark mode implementation
- [ ] Offline mode support

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow the existing code style
- Use TypeScript for type safety
- Run `npm run lint` before committing
- Write meaningful commit messages

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Paige Louise Rose**
- Package: `com.paigelouiserose.neiltech`

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- UI components inspired by modern design principles
- Icons from [@expo/vector-icons](https://icons.expo.fyi/)

## 📞 Support

For support, please open an issue in the repository or contact the development team.

---

**Made with ❤️ for nail technicians worldwide**
