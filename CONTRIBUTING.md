# Contributing to Web3 Interface

We love your input! We want to make contributing to Web3 Interface as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Development Setup

1. **Clone your fork of the repo**
   ```bash
   git clone https://github.com/yourusername/WEB3INTERFACE.git
   cd WEB3INTERFACE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Code Style

We use ESLint and Prettier to maintain code quality and consistency.

### Before submitting:

```bash
# Lint your code
npm run lint

# Format your code
npm run format

# Run type checking
npm run type-check

# Run tests
npm run test
```

### Code Style Guidelines

- Use TypeScript for all new code
- Follow React functional component patterns
- Use custom hooks for reusable logic
- Write meaningful commit messages
- Add JSDoc comments for complex functions
- Follow the existing folder structure

## Testing

- Write unit tests for utility functions
- Write component tests for UI components
- Write integration tests for features
- Aim for high test coverage
- Use meaningful test descriptions

Example test:

```tsx
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Button from '@/components/Button';

test('should render button with correct variant', () => {
  render(<Button variant="primary">Test Button</Button>);
  const button = screen.getByRole('button', { name: /test button/i });
  expect(button).toHaveClass('web3-button-primary');
});
```

## Documentation

- Update README.md if you change functionality
- Update component documentation for UI changes
- Add JSDoc comments for new functions
- Update type definitions for new interfaces

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding or updating tests
- `chore:` maintenance tasks

Examples:
```
feat: add wallet connection status indicator
fix: resolve theme switching issue in mobile view
docs: update API documentation for useWallet hook
```

## Issue and Bug Report Process

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/nibertinvestments/WEB3INTERFACE/issues).

### Bug Reports

Great Bug Reports tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Feature Requests

Feature requests are welcome! Please provide:

- Clear description of the feature
- Use case and motivation
- Possible implementation approach
- Any relevant examples or mockups

## Project Structure

When contributing, please follow the existing project structure:

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── layouts/       # Layout components
├── pages/         # Page components
├── types/         # TypeScript types
├── utils/         # Utility functions
├── config/        # Configuration
└── test/          # Test utilities
```

## Adding New Components

When adding new components:

1. Create the component in the appropriate directory
2. Export it from the directory's index.ts
3. Add TypeScript types
4. Write tests
5. Update documentation

Example component structure:

```tsx
import React from 'react';
import { cn } from '@/utils';

interface MyComponentProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({
  children,
  variant = 'primary',
  className,
}) => {
  return (
    <div className={cn('base-classes', variantClasses[variant], className)}>
      {children}
    </div>
  );
};

export default MyComponent;
```

## Environment Setup

### Required Tools

- Node.js 18+
- npm or yarn
- Git
- A Web3 wallet for testing

### Recommended VS Code Extensions

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
VITE_ALCHEMY_API_KEY=your_key_here
VITE_INFURA_PROJECT_ID=your_project_id
```

## Review Process

All pull requests will be reviewed by maintainers. We look for:

- Code quality and style consistency
- Test coverage
- Documentation updates
- Performance considerations
- Security implications

## Community

- Be respectful and inclusive
- Help others learn and grow
- Share knowledge and best practices
- Provide constructive feedback

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to contact us:
- Open an issue for project-related questions
- Email: contact@nibertinvestments.com
- Twitter: [@nibertinvest](https://twitter.com/nibertinvest)

Thank you for contributing! 🚀