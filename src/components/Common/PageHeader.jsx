import React from 'react';

export function PageHeader({ title, children }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex gap-2">
        {children}
      </div>
    </div>
  );
}