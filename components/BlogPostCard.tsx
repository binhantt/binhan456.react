import React from 'react';
import type { Post } from '../types';

interface BlogPostCardProps {
  post: Post;
  onReadMore: (id: number) => void;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onReadMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <img className="h-56 w-full object-cover" src={post.imageUrl} alt={post.title} />
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{post.date}</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h3>
          <p className="text-gray-700 text-base mb-4">{post.excerpt}</p>
        </div>
        <div className="mt-auto">
          <button 
            onClick={() => onReadMore(post.id)} 
            className="text-indigo-600 hover:text-indigo-900 font-semibold"
          >
            Đọc thêm &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
