
import React from 'react';
import type { Post } from '../types';
import { BlogPostCard } from '../components/BlogPostCard';

interface BlogPageProps {
  posts: Post[];
  onSelectPost: (id: number) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ posts, onSelectPost }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Bài Viết</h1>
        <p className="mt-4 text-lg text-gray-500">Khám phá các bài viết về lập trình Java, JavaScript và hơn thế nữa.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <BlogPostCard key={post.id} post={post} onReadMore={onSelectPost} />
        ))}
      </div>
    </div>
  );
};
