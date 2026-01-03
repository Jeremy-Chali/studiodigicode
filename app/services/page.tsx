export default function ServicesPage() {
  const services = [
    {
      title: 'Custom Web Development',
      items: [
        'Responsive Website Design',
        'E-commerce Solutions',
        'Web Application Development',
        'API Integration',
        'Performance Optimization',
      ],
    },
    {
      title: 'Software Solutions',
      items: [
        'Enterprise Software',
        'Mobile Applications',
        'Cloud Migration',
        'System Architecture',
        'DevOps Implementation',
      ],
    },
    {
      title: 'UI/UX Design',
      items: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Interaction Design',
        'Design Strategy',
      ],
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Comprehensive digital solutions tailored to your business needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 text-blue-600 font-medium hover:text-blue-800">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}