import React from 'react';
import type { Post } from '../types';

interface PostPageProps {
  post: Post;
  onBack: () => void;
}

export const PostPage: React.FC<PostPageProps> = ({ post, onBack }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack} 
          className="mb-8 text-indigo-600 hover:text-indigo-900 font-semibold flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Quay lại danh sách bài viết
        </button>

        <article className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{post.date}</span>
          </div>
          <img className="w-full h-auto rounded-lg mb-8" src={post.imageUrl} alt={post.title} />
          <div 
            className="prose lg:prose-xl max-w-none" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
           <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-800">Tags:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
