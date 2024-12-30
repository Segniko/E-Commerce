const AboutUsPage = () => {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover who we are, what drives us, and how we are shaping the future.
            </p>
          </div>
        </section>
  
        {/* Company History Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Story</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Founded in <span className="font-semibold">2015</span>, we started with a simple mission: to revolutionize the way people experience [Industry/Field]. Over the years, we have grown into a trusted leader, serving thousands of customers worldwide and making a meaningful impact.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/company-history.jpg" 
                alt="Company History" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
  
        {/* Meet the Team Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "John Doe", role: "CEO", description: "Visionary leader with a passion for innovation.", image: "/images/john-doe.jpg" },
                { name: "Jane Smith", role: "CTO", description: "Tech expert shaping our digital future.", image: "/images/jane-smith.jpg" },
                { name: "Emily Johnson", role: "CMO", description: "Creative strategist driving marketing excellence.", image: "/images/emily-johnson.jpg" },
              ].map((member, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Brand Philosophy Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Philosophy</h2>
            <p className="text-lg max-w-4xl mx-auto text-gray-700 leading-relaxed">
              At <span className="font-semibold">[Company Name]</span>, we are driven by our core values: <span className="text-blue-600 font-semibold">Innovation</span>, <span className="text-blue-600 font-semibold">Excellence</span>, and <span className="text-blue-600 font-semibold">Customer-Centricity</span>. Our mission is to deliver exceptional value, empower our clients, and inspire progress in everything we do.
            </p>
          </div>
        </section>
  
        {/* Timeline Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Journey</h2>
            <div className="relative border-l-4 border-blue-600 pl-8">
              {[
                { year: "2015", event: "Founded with a groundbreaking vision." },
                { year: "2017", event: "Launched our first flagship product." },
                { year: "2019", event: "Reached 10,000 satisfied customers worldwide." },
                { year: "2022", event: "Expanded into global markets, achieving record-breaking growth." },
              ].map((milestone, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">{milestone.year}</h3>
                  <p className="text-gray-700 text-lg">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Michael Brown", feedback: "This company exceeded my expectations. Their service is top-notch!" },
                { name: "Sarah Wilson", feedback: "Working with them has been a game-changer for my business." },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
                  <p className="text-blue-600 font-semibold">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-700 py-16 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Learn More?</h2>
            <p className="text-lg mb-6">
              Join us on our journey to make a difference. Explore more about what we offer and how we can help you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    );
  };
  
  export default AboutUsPage;
  