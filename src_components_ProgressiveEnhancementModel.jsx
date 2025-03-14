import React from 'react';

/**
 * ProgressiveEnhancementModel - A component that displays content according to user engagement level
 * 
 * @param {Object} props
 * @param {Object} props.content - Object containing content for different engagement levels
 * @param {string} props.engagementLevel - Current engagement level ('basic', 'intermediate', 'advanced')
 * @returns {React.ReactElement}
 */
const ProgressiveEnhancementModel = ({ content, engagementLevel }) => {
  // Select the appropriate content based on engagement level
  const currentContent = content[engagementLevel];
  
  if (!currentContent) {
    return (
      <div className="bg-red-100 p-4 rounded-md">
        <p className="text-red-700">No content available for the selected engagement level.</p>
      </div>
    );
  }
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">{currentContent.title}</h2>
      <p className="text-gray-700 mb-4">{currentContent.content}</p>
      
      {/* Features list - shown for intermediate and advanced levels */}
      {currentContent.features && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {currentContent.features.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Case studies - shown only for advanced level */}
      {currentContent.caseStudies && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Case Studies:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentContent.caseStudies.map((study, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-medium text-blue-900">{study.name}</h4>
                <p className="text-blue-700">{study.result}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Call to action - enhanced for higher engagement levels */}
      <div className="mt-6">
        {engagementLevel === 'basic' && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Learn More
          </button>
        )}
        
        {engagementLevel === 'intermediate' && (
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center">
            <span>See Demo</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        
        {engagementLevel === 'advanced' && (
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 flex items-center justify-center">
              <span>Get Started</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-md hover:bg-blue-50">
              Schedule Consultation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressiveEnhancementModel;