# GitHub Trending Repositories

A modern React application for discovering and tracking trending GitHub repositories from the last week. Built with TypeScript, React, and Vitest for a robust and type-safe development experience.

> **Frontend Coding Challenge for Redcare Pharmacy**

## 🎯 Challenge Overview

This project implements a client application that allows users to:

- Browse trending GitHub repositories from the last week
- Star/unstar repositories (stored locally)
- Filter repositories by programming language
- Switch between all repositories and starred repositories
- View essential repository information

## ✨ Features

### Core Features

- ✅ **Trending Repositories**: Fetches and displays the most popular repositories from the last week
- ✅ **Star System**: Local starring functionality with persistent storage
- ✅ **Repository Information**: Shows repo name, GitHub link, description, star count, and more
- ✅ **Tab Navigation**: Switch between "All Repositories" and "Starred" views

### Bonus Features

- ✅ **Language Filter**: Filter repositories by programming language
- ✅ **Responsive Design**: Mobile-friendly interface
- ✅ **Dark Mode Support**: Automatic dark/light theme detection
- ✅ **Comprehensive Testing**: Unit tests with high coverage

### Additional Enhancements

- 🎨 **Modern UI/UX**: Clean design with consistent spacing and typography
- ♿ **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- 🏗️ **Component Architecture**: Reusable components following BEM methodology
- 📱 **Mobile Responsive**: Optimized for all device sizes
- 🔄 **Error Handling**: Graceful error states and loading indicators

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: CSS with BEM methodology + CSS Custom Properties
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library + jsdom
- **Icons**: React Icons
- **Code Quality**: ESLint + Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd github-trending-repos
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint

# Testing
npm test             # Run tests in watch mode
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage report
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Container/          # Layout container component
│   ├── FilterTabs/         # Tab navigation component
│   ├── Footer/            # Footer component
│   ├── Header/            # Header component
│   ├── LanguageFilter/    # Language filter dropdown
│   ├── RepoCard/          # Repository card component
│   └── RepositoryList/    # Main repository list component
├── hooks/
│   ├── useRepositories.ts    # Hook for fetching repositories
│   └── useStarredRepos.ts   # Hook for managing starred repos
├── test/
│   ├── setup.ts           # Test configuration
│   └── utils.tsx          # Test utilities and mocks
├── types/
│   └── index.ts           # TypeScript type definitions
├── App.jsx                # Main app component
├── main.jsx              # App entry point
└── index.css             # Global styles and CSS variables
```

## 🧪 Testing

The project includes comprehensive test coverage:

- **Unit Tests**: All components and hooks are tested
- **Integration Tests**: Repository list functionality
- **Mocking**: localStorage, fetch API, and custom hooks
- **Coverage**: Detailed coverage reports available

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests with UI (browser-based)
npm run test:ui
```

### Test Files

- `src/components/*/[Component].test.tsx` - Component tests
- `src/hooks/[hook].test.ts` - Hook tests
- `src/test/utils.tsx` - Shared test utilities and mock data

## 🎨 Design System

The application uses a consistent design system with:

### CSS Custom Properties

- **Colors**: Primary, secondary, neutral, and semantic colors
- **Spacing**: Consistent spacing scale (xs, sm, md, lg, xl, 2xl)
- **Typography**: Font sizes, weights, and line heights
- **Shadows**: Elevation system for depth
- **Transitions**: Consistent animation timings

### BEM Methodology

All CSS classes follow BEM (Block Element Modifier) naming convention:

```css
.component-name {
}
.component-name__element {
}
.component-name__element--modifier {
}
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- **Semantic HTML**: Proper use of HTML5 semantic elements
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color combinations
- **Focus Management**: Visible focus indicators

## 🔧 API Integration

The app integrates with GitHub's public search API:

```
https://api.github.com/search/repositories?q=created:>{date}&sort=stars&order=desc&per_page=50
```

- Fetches repositories created in the last week
- Sorted by star count in descending order
- Limited to 50 results for performance

## 💾 Data Storage

- **Starred Repositories**: Stored in `localStorage` as `starred-repos`
- **Persistence**: Stars persist across browser sessions
- **Error Handling**: Graceful handling of corrupted localStorage data

## 🐛 Error Handling

- **Network Errors**: User-friendly error messages
- **API Failures**: Retry functionality available
- **Loading States**: Clear loading indicators
- **Empty States**: Helpful messages when no data is available

## 🔄 State Management

The application uses React's built-in state management with custom hooks:

- `useRepositories`: Manages repository fetching and caching
- `useStarredRepos`: Handles starring functionality and localStorage

## 🎯 Performance Optimizations

- **Efficient Rendering**: Optimized component re-renders
- **Data Caching**: Repository data cached during session
- **Image Optimization**: Lazy loading for avatar images
- **Bundle Optimization**: Code splitting and tree shaking with Vite

## 🚦 Code Quality

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code linting with React-specific rules
- **Prettier**: Code formatting (configured in `.vscode/settings.json`)
- **Testing**: High test coverage with meaningful tests

## 🔮 Future Enhancements

Potential improvements for the application:

- [ ] Infinite scrolling for large result sets
- [ ] Repository search functionality
- [ ] Sort options (stars, forks, recency)
- [ ] Export starred repositories
- [ ] GitHub authentication for real starring
- [ ] Repository comparison feature
- [ ] Advanced filtering options

## 📄 License

This project is part of a coding challenge for **Redcare Pharmacy** and is for educational purposes.

## 🤝 Contributing

This is a coding challenge project for **Redcare Pharmacy**. For educational purposes, feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

---

**Built with ❤️ for the Redcare Pharmacy Frontend Coding Challenge**
