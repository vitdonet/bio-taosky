import React, { useState } from 'react';
import { Github, Linkedin, Mail, Instagram, Twitter, Globe, MapPin, Briefcase, GraduationCap, Heart, ExternalLink } from 'lucide-react';

export default function BioWebsite() {
  const [activeTab, setActiveTab] = useState('about');
  
  // Bạn có thể thay đổi thông tin này
  const profile = {
    name: "Tên Của Bạn",
    title: "Developer | Designer | Creator",
    location: "Việt Nam",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
    bio: "Tôi là một người đam mê công nghệ và sáng tạo. Luôn học hỏi và khám phá những điều mới mỗi ngày.",
    email: "email@example.com",
    links: [
      { icon: Github, label: "GitHub", url: "https://github.com", color: "hover:bg-gray-700" },
      { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com", color: "hover:bg-blue-600" },
      { icon: Instagram, label: "Instagram", url: "https://instagram.com", color: "hover:bg-pink-600" },
      { icon: Twitter, label: "Twitter", url: "https://twitter.com", color: "hover:bg-sky-500" },
      { icon: Globe, label: "Website", url: "https://example.com", color: "hover:bg-green-600" },
    ],
    skills: [
      "React", "JavaScript", "TypeScript", "Python", 
      "Node.js", "CSS/Tailwind", "UI/UX Design", "Git"
    ],
    projects: [
      {
        title: "Dự Án 1",
        desc: "Mô tả ngắn về dự án của bạn",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
        tags: ["React", "Node.js"]
      },
      {
        title: "Dự Án 2",
        desc: "Một dự án thú vị khác",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        tags: ["Python", "AI"]
      },
      {
        title: "Dự Án 3",
        desc: "Sáng tạo và đổi mới",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        tags: ["Design", "UI/UX"]
      }
    ],
    experience: [
      {
        title: "Senior Developer",
        company: "Công Ty ABC",
        period: "2022 - Hiện tại",
        desc: "Phát triển và duy trì các ứng dụng web"
      },
      {
        title: "Junior Developer",
        company: "Startup XYZ",
        period: "2020 - 2022",
        desc: "Làm việc với team để xây dựng sản phẩm"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto p-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <img 
              src={profile.avatar} 
              alt="Avatar"
              className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-2xl shadow-purple-500/50 object-cover"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900"></div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <p className="text-xl text-gray-300 mb-4">{profile.title}</p>
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <MapPin size={18} />
            <span>{profile.location}</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 flex-wrap">
            {profile.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 bg-white/10 backdrop-blur ${link.color} text-white px-5 py-3 rounded-full transition-all hover:scale-110 hover:shadow-lg`}
              >
                <link.icon size={20} />
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {['about', 'projects', 'experience'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tab === 'about' && '👤 Giới Thiệu'}
              {tab === 'projects' && '💼 Dự Án'}
              {tab === 'experience' && '📚 Kinh Nghiệm'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Heart className="text-pink-400" size={24} />
                  Về Tôi
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">{profile.bio}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Kỹ Năng</h3>
                <div className="flex flex-wrap gap-3">
                  {profile.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Mail className="text-blue-400" size={20} />
                  Liên Hệ
                </h3>
                <a 
                  href={`mailto:${profile.email}`}
                  className="text-blue-400 hover:text-blue-300 text-lg transition"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="text-yellow-400" size={24} />
                Dự Án Nổi Bật
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {profile.projects.map((project, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 group"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:opacity-80 transition"
                    />
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="text-green-400" size={24} />
                Kinh Nghiệm Làm Việc
              </h2>
              <div className="space-y-6">
                {profile.experience.map((exp, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-purple-300 font-medium">{exp.company}</p>
                      </div>
                      <span className="bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-400">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400">
          <p>© 2024 {profile.name}. Made with 💜</p>
        </div>
      </div>
    </div>
  );
}