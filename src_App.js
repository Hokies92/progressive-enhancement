import React, { useState } from 'react';
import ProgressiveEnhancementModel from './components/ProgressiveEnhancementModel';

// Sample content for demonstration
const sampleContent = {
  basic: {
    title: "Value Proposition",
    content: "Our solution helps companies communicate more effectively."
  },
  intermediate: {
    title: "Enhanced Value Proposition",
    content: "Our solution increases engagement by 35% through progressive content delivery.",
    features: ["Adaptive UI", "Engagement Tracking", "Content Tiers"]
  },
  advanced: {
    title: "Comprehensive Value Analysis",
    content: "Our progressive enhancement framework drives 35% higher engagement and 28% better conversion rates through intelligent content delivery.",
    features: ["Adaptive UI", "Engagement Tracking", "Content Tiers", "Behavior Analysis"],
    caseStudies: [
      { name: "Company A", result: "42% increase in conversion" },
      { name: "Company B", result: "23% more user retention" }
    ]
  }
};

function App() {
  const [engagementLevel, setEngagementLevel] = useState('basic');
  
  const handleEngagementChange = (level) => {
    setEngagementLevel(level);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Progressive Enhancement for Value Communication
        </h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Engagement Level:</label>
            <div className="flex space-x-4">
              <button
                onClick={() => handleEngagementChange('basic')}
                className={`px-4 py-2 rounded-md ${
                  engagementLevel === 'basic' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Basic
              </button>
              <button
                onClick={() => handleEngagementChange('intermediate')}
                className={`px-4 py-2 rounded-md ${
                  engagementLevel === 'intermediate' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Intermediate
              </button>
              <button
                onClick={() => handleEngagementChange('advanced')}
                className={`px-4 py-2 rounded-md ${
                  engagementLevel === 'advanced' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Advanced
              </button>
            </div>
          </div>
          
          <ProgressiveEnhancementModel 
            content={sampleContent} 
            engagementLevel={engagementLevel} 
          />
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">About This Demo</h2>
          <p className="text-gray-700">
            This demonstration showcases how content can be progressively enhanced
            based on user engagement levels. Click the different engagement levels
            above to see how the value proposition adapts to different user states.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;