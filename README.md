# Blacksof_assignment

Project Setup
This project was bootstrapped using Next.js with Vite as the build tool for faster development experience and optimized builds.

✅ Prerequisites
Make sure you have the following installed:

Node.js (v18+ recommended)

Yarn or npm

Git (for cloning the repository)

🛠️ Steps to Run the Project Locally
Clone the Repository

Link : https://github.com/vanshikasharma24/Blacksof_assignment.git
Navigate to the Project Folder

cd blacksof  # This is the actual Next.js project folder
Install Dependencies

yarn install
# or
npm install
Run the Development Server

yarn dev
# or
npm run dev
View in Browser

Open http://localhost:3000 to view the app in your browser.

📦 Building for Production
To build and preview the production version locally:

yarn build
yarn start
# or
npm run build
npm run start
🚀 Deployment
The project is deployed on Vercel with the root directory set to the blacksof folder.

Component Architecture
components/: Reusable UI components (Header, Footer, SectionBlocks)

sections/: Structured section components mapped to Figma layout (Hero, Features, etc.)

pages/index.tsx: Main page composed of various sections

utils/: Reusable helper functions/constants

Approach: Components are atomic and reusable, split by visual and logical concerns to maintain scalability.

📱 Responsive Design Strategy
Tailwind’s utility-first responsive classes (sm:, md:, lg:, xl:) were used to ensure the layout adapts across:

Mobile: 360px to 768px

Tablet: 768px to 1024px

Desktop: 1024px and above

Responsiveness tested using Chrome DevTools and actual devices.

⚡️ Performance Optimization
Code splitting via Next.js page-based routing

Lazy loading of images with next/image

Static optimization and caching via Vercel

Fonts hosted locally for better performance

♿ Accessibility
Semantic HTML (section, header, nav, etc.)

alt attributes for images

Keyboard navigable buttons

Color contrast from Figma matched WCAG guidelines

✨ Animations
Used Framer Motion for smooth transitions and entrance animations to elevate user experience.

Page load animations

Section fade-ins and slide-ups

Smooth transitions between vehicle types

🧪 Testing Strategy (Optional)
Due to tight timeline, formal tests weren't implemented. However, visual regression and manual testing across Chrome, Firefox, and Safari were performed.

Future scope includes:

Unit tests using Jest + React Testing Library

Integration tests for critical flows

🔍 Assumptions & Decisions
Only frontend implementation was required.

Static content used as backend integration was not part of scope.

Vite used for speed during development but Next.js build was used for production deployment.

Tailwind CSS selected for utility-first design and quicker responsiveness implementation.

🚧 Challenges
Pixel-perfect matching of complex sections across breakpoints.

Dealing with nested layouts and responsive reflows.

Initial Vercel deployment error due to incorrect root directory setup.

📌 Suggested Improvements
Add CMS (e.g. Sanity/Strapi) for dynamic content

Implement automated testing and Lighthouse CI

Introduce Dark Mode toggle

Accessibility audit with axe-core

🚀 Live Demo
🔗 [Visit Deployed Website on Vercel](https://blacksof-assignment-beta.vercel.app/)
