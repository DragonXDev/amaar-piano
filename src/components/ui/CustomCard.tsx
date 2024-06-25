import React from 'react';

interface CustomCardProps {
  title: string;
  children: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, children }) => {
  return (
    <div className="custom-card bg-glass p-6 border border-white rounded-lg shadow-lg">
      <div className="card-header mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default CustomCard;
