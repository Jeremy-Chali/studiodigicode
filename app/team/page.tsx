const teamMembers = [
  {
    name: 'Mutale Musona',
    role: 'Lead Full-Stack Developer',
    description: "Specializes in React, Node.js, and API intergration. He's the brains behind our talent.",
    portfolio: 'deny deny deny',
    imageColor: 'bg-blue-100',
  },
  {
    name: 'Mapalo Chifota',
    role: 'UI/UX Design Lead',
    description: "Creates intuitive user experiences with expertise in Figma. You want the best designs around? He's your guy!",
    portfolio: 'Koko ni anata no saito o hatte kure, kyoudai',
    imageColor: 'bg-gray-100',
  },
  {
    name: 'Reuben Sichinsambwe',
    role: 'Security Specialist',
    description: "You want fast and secure access to your websites? He's got you covered",
    portfolio: 'your site here buddy',
    imageColor: 'bg-blue-100',
  },
  {
    name: 'Jeremiah Chali',
    role: 'Frontend Specialist',
    description: 'Ensures performance optimization and uses modern JavaScript frameworks to give you the best on site experience!',
    portfolio: 'https://stellarnet.netlify.app',
    imageColor: 'bg-gray-100',
  },
];

export default function TeamPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Our Team
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Meet the experts behind Digicode Studio.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`h-48 ${member.imageColor} flex items-center justify-center`}>
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                  <span className="text-3xl text-gray-700">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6">
                  {member.description}
                </p>
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  View Portfolio →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}