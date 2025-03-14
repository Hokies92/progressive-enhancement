# Progressive Enhancement for Value Communication

This project implements a progressive enhancement model for more effective value communication in digital interfaces.

## Features

- Adaptive content presentation based on user engagement levels
- Multi-tiered information architecture 
- Responsive design with Tailwind CSS
- React-based component architecture

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Hokies92/progressive-enhancement.git
cd progressive-enhancement
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Usage

The progressive enhancement model can be imported and used in your components:

```jsx
import ProgressiveEnhancementModel from './components/ProgressiveEnhancementModel';

function MyComponent() {
  return (
    <ProgressiveEnhancementModel 
      content={contentObject}
      engagementLevel={userEngagementLevel} 
    />
  );
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.