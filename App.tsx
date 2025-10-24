import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { PostPage } from './pages/PostPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { posts } from './data/posts';
import type { Post } from './types';

type Page = 'home' | 'blog' | 'projects' | 'skills' | 'contact';

interface AppState {
  currentPage: Page;
  selectedPostId: number | null;
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({ currentPage: 'home', selectedPostId: null });

  const handleNavigate = (page: Page) => {
    setState({ currentPage: page, selectedPostId: null });
    window.scrollTo(0, 0);
  };

  const handleSelectPost = (id: number) => {
    setState({ ...state, selectedPostId: id });
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setState({ ...state, selectedPostId: null });
    window.scrollTo(0, 0);
  }

  const renderPage = () => {
    if (state.currentPage === 'blog' && state.selectedPostId) {
      const selectedPost = posts.find(p => p.id === state.selectedPostId);
      return selectedPost ? <PostPage post={selectedPost} onBack={handleBackToBlog} /> : <BlogPage posts={posts} onSelectPost={handleSelectPost} />;
    }

    switch (state.currentPage) {
      case 'home':
        return <HomePage />;
      case 'blog':
        return <BlogPage posts={posts} onSelectPost={handleSelectPost} />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col font-sans">
      <Header currentPage={state.currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
