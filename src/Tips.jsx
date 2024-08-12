import React from 'react';

const tips = [
  'Turn off lights when not in use.',
  'Use energy-efficient LED bulbs.',
  'Unplug electronics when not in use.',
  'Use ceiling fans instead of air conditioning.',
  'Opt for solar water heaters.',
  'Cook with pressure cookers to save gas.',
  'Use natural light during the day.',
];

function Tips() {
  return (
    <div>
      <h2>Energy-Saving Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tips;
