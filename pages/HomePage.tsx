import React from 'react';
import { ProfileCard } from '../components/ProfileCard';

export const HomePage: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ProfileCard />
      </div>
    </div>
  );
};
