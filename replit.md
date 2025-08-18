# Hassan Wilson Portfolio

## Overview

This is a professional portfolio website for Hassan Wilson, a Full Stack Software Engineer and Content Strategist with 10+ years of experience in digital strategy, political campaigns, and software development. The application serves as both a showcase of professional work and a demonstration of technical capabilities, featuring sections for about information, experience, portfolio work, and contact details. The site includes interactive email template previews and a sophisticated UI built with modern web technologies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing without the overhead of React Router
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional design system
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Modular component architecture with separate sections for hero, about, experience, portfolio, contact, and email templates

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the entire stack for consistency and type safety
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage**: In-memory storage implementation with interface for easy database migration
- **Email Service**: Integrated email service for sending template previews to potential clients
- **Development**: Hot module replacement via Vite integration for seamless development experience

### Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema**: Shared schema definitions between client and server using Drizzle-Zod for validation
- **Tables**: Users table for authentication, email_requests table for tracking sent email templates
- **Migrations**: Database migrations managed through Drizzle Kit
- **Connection**: Neon Database serverless connection for scalable PostgreSQL hosting

### Authentication & Security
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Input Validation**: Zod schemas for type-safe API request/response validation
- **CORS**: Configured for secure cross-origin requests
- **Environment Variables**: Secure configuration management for database URLs and API keys

## External Dependencies

- **Database**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL hosting
- **UI Framework**: Radix UI primitives for accessible, unstyled components
- **Email Service**: Custom email template system for showcasing content strategy work
- **Image Hosting**: Unsplash API for portfolio photography examples
- **Fonts**: Google Fonts (Inter, Architects Daughter, DM Sans, Fira Code) for typography
- **Development Tools**: Replit integration for cloud-based development environment
- **Build & Development**: Vite with React plugin for fast builds and HMR
- **CSS Framework**: Tailwind CSS with custom design tokens and theme configuration