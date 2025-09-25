# Web3 Interface

A comprehensive Web3 user interface for decentralized applications, built with modern web technologies and best practices.

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF.svg)

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Web3 Integration**: Seamless wallet connection and blockchain interaction
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark/Light Theme**: Built-in theme switching capability
- **Type Safety**: Full TypeScript support with strict type checking
- **Modular Architecture**: Scalable and maintainable code structure
- **Testing Ready**: Vitest setup with coverage reporting
- **Linting & Formatting**: ESLint and Prettier configuration
- **CI/CD Ready**: GitHub Actions workflow templates

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Web3 Libraries**: Ethers.js, Wagmi, Viem
- **State Management**: React hooks and context
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- A Web3 wallet (MetaMask recommended)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/nibertinvestments/WEB3INTERFACE.git
   cd WEB3INTERFACE
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Quick Start

### Basic Usage

```tsx
import { useWallet } from '@/hooks';
import { Button } from '@/components';

function MyComponent() {
  const { walletInfo, connect, disconnect } = useWallet();

  return (
    <div>
      {walletInfo.isConnected ? (
        <Button onClick={disconnect}>Disconnect</Button>
      ) : (
        <Button onClick={connect}>Connect Wallet</Button>
      )}
    </div>
  );
}
```

### Custom Components

```tsx
import { Card, Button } from '@/components';

function CustomDashboard() {
  return (
    <Card title='My Dashboard' description='Welcome to Web3'>
      <Button variant='primary' size='lg'>
        Get Started
      </Button>
    </Card>
  );
}
```

## 📝 Available Scripts

| Command                 | Description               |
| ----------------------- | ------------------------- |
| `npm run dev`           | Start development server  |
| `npm run build`         | Build for production      |
| `npm run preview`       | Preview production build  |
| `npm run lint`          | Run ESLint                |
| `npm run lint:fix`      | Fix ESLint errors         |
| `npm run type-check`    | Run TypeScript checks     |
| `npm run format`        | Format code with Prettier |
| `npm run format:check`  | Check code formatting     |
| `npm run test`          | Run tests                 |
| `npm run test:ui`       | Run tests with UI         |
| `npm run test:coverage` | Run tests with coverage   |

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   ├── WalletConnect.tsx
│   └── index.ts
├── hooks/              # Custom React hooks
│   ├── useTheme.ts
│   ├── useWallet.ts
│   └── index.ts
├── layouts/            # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── index.ts
├── pages/              # Page components
│   ├── Dashboard.tsx
│   └── index.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── index.ts
├── config/             # Configuration files
│   └── index.ts
├── test/               # Test setup and utilities
│   └── setup.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Styling & Theming

This project uses Tailwind CSS with a custom design system that includes:

- **Color Palette**: Primary, secondary, success, warning, and danger colors
- **Typography**: Inter font family with multiple weights
- **Components**: Pre-built component classes (web3-card, web3-button, etc.)
- **Dark Mode**: Automatic theme switching based on user preference
- **Responsive Design**: Mobile-first approach with breakpoint utilities

### Custom CSS Classes

```css
.gradient-text {
  /* Gradient text effect */
}
.web3-card {
  /* Styled card component */
}
.web3-button {
  /* Base button styles */
}
.web3-button-primary {
  /* Primary button variant */
}
.web3-button-secondary {
  /* Secondary button variant */
}
.web3-input {
  /* Styled input component */
}
```

## 🔌 Web3 Integration

### Supported Features

- **Wallet Connection**: MetaMask and other Web3 wallets
- **Multi-Chain Support**: Ethereum, Polygon, BSC, and testnets
- **Transaction Management**: Send, receive, and track transactions
- **Token Handling**: ERC-20 token support
- **Network Switching**: Automatic network detection and switching

### Supported Networks

- Ethereum Mainnet
- Ethereum Sepolia Testnet
- Polygon
- Polygon Mumbai Testnet
- Binance Smart Chain
- BSC Testnet

## 🧪 Testing

We use Vitest for testing with React Testing Library for component testing.

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

### Writing Tests

```tsx
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Button from '@/components/Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the dist folder to Netlify
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing code style (ESLint + Prettier)
- Write tests for new features
- Update documentation as needed

## 📚 Documentation

- [Architecture Overview](docs/ARCHITECTURE.md)
- [Component Documentation](docs/COMPONENTS.md)
- [API Reference](docs/API.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Keys
VITE_ALCHEMY_API_KEY=your_alchemy_api_key
VITE_INFURA_PROJECT_ID=your_infura_project_id

# Application Settings
VITE_APP_NAME=Web3 Interface
VITE_API_BASE_URL=http://localhost:3000/api

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_NOTIFICATIONS=true
```

### Customization

You can customize the application by modifying:

- `src/config/index.ts` - Application configuration
- `tailwind.config.js` - Design system and styling
- `src/types/index.ts` - TypeScript types
- `src/utils/index.ts` - Utility functions

## 📈 Performance

- **Bundle Size**: Optimized with Vite's tree shaking
- **Code Splitting**: Automatic route-based code splitting
- **Asset Optimization**: Automatic image and asset optimization
- **Caching**: Service worker ready for PWA features

## 🔒 Security

- **Input Validation**: All user inputs are validated
- **XSS Protection**: Content is properly sanitized
- **Wallet Security**: Private keys never leave the user's wallet
- **API Security**: Secure API communication patterns

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Ethers.js](https://ethers.org/) - Web3 library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📞 Support

- 📧 Email: contact@nibertinvestments.com
- 🐦 Twitter: [@nibertinvest](https://twitter.com/nibertinvest)
- 💬 Discord: [Join our community](https://discord.gg/your-invite)
- 📚 Documentation: [Read the docs](https://docs.your-domain.com)

---

Made with ❤️ by [Nibert Investments](https://github.com/nibertinvestments)
