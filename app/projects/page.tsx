const projects = [
  {
    title: 'Property Tax Management System',
    description: 'A comprehensive property management tool for property owners to effectively manage thier property.',
    tech: ['React', 'Node.js', 'I dont know what database you used mutale!', 'I dont know which APIs either'],
    category: 'Web Development',
  },
  {
    title: 'Later projects',
    description: '',
    tech: ['', '', ''],
    category: 'Software Development',
  },
  {
    title: 'Later Projects',
    description: '',
    tech: ['', '', '', ''],
    category: 'UI/UX Design',
  },
  {
    title: 'Later Projects',
    description: '',
    tech: ['', '', '', ''],
    category: 'Web Development',
  },
  {
    title: 'Later Projects',
    description: '',
    tech: ['', '', '', ''],
    category: 'Software Development',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Our Projects
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Selected work showcasing our technical expertise and design approach.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="h-48 bg-gradient-to-r from-blue-50 to-gray-50 p-8">
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-800">
                    View Live Demo →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}