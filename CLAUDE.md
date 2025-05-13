# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Reputa Fácil is a SAAS for Online Reputation Management built with Next.js. The application allows small business owners to connect their Google My Business accounts to view all their reviews in a unified dashboard with basic sentiment analysis.

### Tech Stack
- Next.js 15.3.2 with App Router
- TypeScript
- Tailwind CSS
- Supabase (for Auth and Database)
- Google My Business API

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint`

## Project Structure

This project follows the Next.js App Router structure:

- `/src/app/` - Next.js app router pages and layouts
- `/public/` - Static assets
- `/components/` - Planned location for React components
- `/lib/` - Planned location for utility functions and services
- `/app/api/` - Planned location for API routes

## Planned Architecture

The application will consist of several key components:

1. **Authentication System**
   - User signup/login via Supabase (email/password and Google OAuth)
   - Protected routes with middleware

2. **Google My Business Integration**
   - OAuth connection to Google My Business accounts
   - API routes to fetch and store reviews
   - Review synchronization

3. **Dashboard**
   - Display of reviews with filtering options
   - Basic sentiment analysis
   - User management of connected accounts

4. **Landing Page**
   - SEO-optimized content
   - Clear CTAs to drive user signup

## Database Structure (Planned)

The Supabase database will include:
- `reviews` table - Stores review data from Google My Business
- `gmn_connections` table - Stores OAuth tokens for GMB connections

## Notes for Implementation

When implementing new features, refer to the detailed planning in the PLANNING.MD file, which outlines the phased approach for building this application. The project is currently in the initial setup phase.