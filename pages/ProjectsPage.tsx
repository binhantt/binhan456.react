import React from 'react';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { projectsData } from '../data/projects';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Dự Án</h1>
        <p className="mt-4 text-lg text-gray-500">Một số dự án tôi đã xây dựng và đóng góp.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.projects.map(project => (
          <ProjectShowcase key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};
