import React from 'react';
import { Github, Linkedin, Apple as WhatsApp } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5) blur(8px)',
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-3xl w-full bg-white/20 backdrop-blur-lg rounded-xl shadow-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                <img
                  src="/images/blob.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-100">Sainudeen Safar</h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-6">DevOps Engineer</h2>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <a
                  href="https://github.com/sainupopzienz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-all duration-200 px-6 py-2 rounded-full text-sm font-medium"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/sainudeensafar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-all duration-200 px-6 py-2 rounded-full text-sm font-medium"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/6282656572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-all duration-200 px-6 py-2 rounded-full text-sm font-medium"
                >
                  <WhatsApp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-4">
                {['Git', 'Linux', 'AWS', 'CI/CD', 'Docker', 'Terraform', 'Kubernetes', 'CostOptimization', "RCA", "Monitoring"].map((skill) => (
                  <span key={skill} className="bg-white/10 px-4 py-2 rounded-full text-sm text-gray-200 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• DevOps Engineer with expertise in cloud infrastructure</li>
                <li>• Skilled in containerization and orchestration</li>
                <li>• Experience with automation and CI/CD pipelines</li>
                <li>• Proficient in security tools such as SonarQube, Trivy for static code analysis and vulnerability scanning</li>
                <li>• Experience with monitoring, alerting, and observability tools like Prometheus, Grafana, Sentry, and Loki</li>
              </ul>
            </div>

            {/* Certifications Section */}
            <div className="md:col-span-2 bg-white/5 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://rhtapps.redhat.com/verify?certId=230-018-053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-lg flex items-center gap-4"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold">Red Hat Certification</h4>
                    <p className="text-sm text-gray-300">Certification ID: 230-018-053</p>
                  </div>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Verify →</span>
                </a>
                <a
                  href="https://www.credly.com/badges/f7ac6116-2a43-4afb-a8fb-59f7769990d6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-lg flex items-center gap-4"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold">CKA</h4>
                    <p className="text-sm text-gray-300">Certification ID: f7ac6116-2a43-4afb-a8fb-59f7769990d6</p>
                  </div>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">View Badge →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
