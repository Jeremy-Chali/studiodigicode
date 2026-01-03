export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Digital Solutions Engineered for Impact
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            We build scalable web applications, robust software, and intuitive user experiences.
          </p>
          <div className="space-x-4">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 inline-block">
              Start a Project
            </a>
            <a href="/projects" className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 inline-block">
              View Work
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Web Development</h3>
              <p className="text-gray-600">
                Modern, responsive websites and web applications using cutting-edge technologies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Software Development</h3>
              <p className="text-gray-600">
                Custom software solutions tailored to your business requirements and objectives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">UI/UX Design</h3>
              <p className="text-gray-600">
                User-centered design that enhances engagement and drives conversion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}