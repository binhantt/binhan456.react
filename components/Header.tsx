import React from 'react';

type Page = 'home' | 'blog' | 'projects' | 'skills' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navLinkClasses = (page: Page) => 
    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      currentPage === page 
        ? 'bg-gray-900 text-white' 
        : 'text-gray-700 hover:bg-gray-200'
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-gray-900">
              Binh An
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => onNavigate('home')} className={navLinkClasses('home')}>Trang Chủ</button>
              <button onClick={() => onNavigate('blog')} className={navLinkClasses('blog')}>Bài Viết</button>
              <button onClick={() => onNavigate('projects')} className={navLinkClasses('projects')}>Dự Án</button>
              <button onClick={() => onNavigate('skills')} className={navLinkClasses('skills')}>Kỹ Năng</button>
              <button onClick={() => onNavigate('contact')} className={navLinkClasses('contact')}>Liên Hệ</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
