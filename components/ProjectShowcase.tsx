import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github?: string;
}

interface ProjectShowcaseProps {
  project: Project;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
      {/* Hình ảnh dự án */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Nội dung chi tiết */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 flex-grow mb-4">{project.description}</p>

        {/* Danh sách công nghệ */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2">Công nghệ:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Link demo & GitHub */}
        <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-100">
          {project.demo ? (
            <a
              href={project.demo}
              className="text-indigo-600 hover:text-indigo-900 font-semibold text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Xem demo
            </a>
          ) : (
            <span className="text-gray-400 text-sm italic">Chưa có demo</span>
          )}

          {project.github && (
            <a
              href={project.github}
              className="text-gray-700 hover:text-gray-900 font-semibold text-sm flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> Mã nguồn
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
