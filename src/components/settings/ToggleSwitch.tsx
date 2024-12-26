import React, { useState } from 'react';

interface ToggleSwitchProps {
  label: string;
  initialChecked?: boolean;
  onToggle?: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, initialChecked = false, onToggle }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onToggle) {
      onToggle(!isChecked);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-white font-dana-demi">{label}</span>
      <div
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
          isChecked ? 'bg-indigo-600' : 'bg-gray-400'
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${
            isChecked ? 'transform translate-x-6' : ''
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;