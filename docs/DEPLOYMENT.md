# Deployment Guide

## Overview

This project is configured with automated CI/CD pipelines that handle building, testing, and optional deployment to Vercel.

## CI/CD Pipeline

The CI/CD pipeline runs on every push and pull request and includes:

- **Code Quality**: Type checking, linting, and formatting validation
- **Testing**: Unit tests with coverage reporting
- **Build**: Production build generation
- **Security**: Dependency auditing and vulnerability scanning
- **Deployment**: Optional Vercel deployment (when configured)

## Vercel Deployment (Optional)

### Current Status

Vercel deployment is **optional** and only runs when properly configured. The pipeline will skip deployment steps if Vercel secrets are not set up.

### Setup Instructions

To enable Vercel deployment, you need to:

1. **Create a Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)
   - Install the Vercel CLI: `npm i -g vercel`

2. **Configure Your Project**
   ```bash
   # Login to Vercel
   vercel login
   
   # Initialize your project
   vercel
   ```

3. **Get Required Values**
   - **Vercel Token**: Generate at [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - **Org ID**: Found in your team settings or by running `vercel org list`
   - **Project ID**: Found in project settings or by running `vercel project list`

4. **Add GitHub Secrets**
   Go to your repository settings → Secrets and variables → Actions, and add:
   
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

### Deployment Behavior

Once configured:

- **Pull Requests**: Deploy to preview URLs automatically
- **Main Branch**: Deploy to production automatically
- **Failed Builds**: No deployment occurs

### Manual Deployment

You can also deploy manually:

```bash
# Preview deployment
npm run build
vercel --cwd dist

# Production deployment
npm run build
vercel --cwd dist --prod
```

## Environment Variables

For production deployment, ensure your environment variables are configured:

1. Copy `.env.example` to `.env.local`
2. Fill in your actual API keys and configuration
3. Add production environment variables to Vercel dashboard

## Build Artifacts

The build process generates:

- `dist/`: Production-ready static files
- `coverage/`: Test coverage reports
- Build artifacts are automatically uploaded in CI/CD

## Troubleshooting

### Common Issues

1. **"Input required and not supplied: vercel-token"**
   - This is expected if Vercel secrets are not configured
   - The deployment step will be skipped automatically

2. **Build Failures**
   - Check TypeScript errors: `npm run type-check`
   - Check linting errors: `npm run lint`
   - Check formatting: `npm run format:check`

3. **Test Failures**
   - Run tests locally: `npm test`
   - Check coverage: `npm run test:coverage`

### Getting Help

- Check the [GitHub Actions logs](../../actions) for detailed error information
- Review the [project documentation](../README.md) for setup instructions
- Open an issue if you encounter persistent problems