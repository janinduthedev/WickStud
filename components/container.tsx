// components/Container.tsx
import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      {children}
    </div>
  );
}