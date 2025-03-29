
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';

const SubjectsPage = () => {
  const branches = [
    {
      name: 'Computer Science Engineering',
      shortName: 'CSE',
      totalSubjects: 48,
      totalPapers: 128,
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    {
      name: 'Information Technology',
      shortName: 'IT',
      totalSubjects: 42,
      totalPapers: 112,
      color: 'bg-green-100 text-green-800 border-green-200'
    },
    {
      name: 'Electronics & Communication',
      shortName: 'ECE',
      totalSubjects: 45,
      totalPapers: 98,
      color: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    {
      name: 'Electrical Engineering',
      shortName: 'EE',
      totalSubjects: 40,
      totalPapers: 87,
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    },
    {
      name: 'Mechanical Engineering',
      shortName: 'ME',
      totalSubjects: 38,
      totalPapers: 92,
      color: 'bg-red-100 text-red-800 border-red-200'
    },
    {
      name: 'Civil Engineering',
      shortName: 'CE',
      totalSubjects: 36,
      totalPapers: 84,
      color: 'bg-orange-100 text-orange-800 border-orange-200'
    }
  ];
  
  // Common subjects across branches
  const commonSubjects = [
    {
      name: 'Engineering Mathematics',
      code: 'MA-101',
      papers: 24,
      color: 'bg-teal-100 text-teal-800 border-teal-200'
    },
    {
      name: 'Physics',
      code: 'PH-102',
      papers: 22,
      color: 'bg-indigo-100 text-indigo-800 border-indigo-200'
    },
    {
      name: 'Chemistry',
      code: 'CH-103',
      papers: 20,
      color: 'bg-rose-100 text-rose-800 border-rose-200'
    },
    {
      name: 'Communication Skills',
      code: 'HU-104',
      papers: 18,
      color: 'bg-amber-100 text-amber-800 border-amber-200'
    },
    {
      name: 'Engineering Graphics',
      code: 'ME-105',
      papers: 16,
      color: 'bg-emerald-100 text-emerald-800 border-emerald-200'
    },
    {
      name: 'Basic Electrical Engineering',
      code: 'EE-106',
      papers: 15,
      color: 'bg-cyan-100 text-cyan-800 border-cyan-200'
    },
    {
      name: 'Programming Fundamentals',
      code: 'CS-107',
      papers: 20,
      color: 'bg-sky-100 text-sky-800 border-sky-200'
    },
    {
      name: 'Environmental Studies',
      code: 'ES-108',
      papers: 14,
      color: 'bg-lime-100 text-lime-800 border-lime-200'
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-rgpv-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 ai-gradient-text">
              Browse Subjects
            </h1>
            
            {/* Branches section */}
            <h2 className="text-2xl font-semibold mb-4 text-rgpv-dark">Branches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {branches.map((branch, index) => (
                <div 
                  key={index} 
                  className={`paper-card p-6 flex justify-between items-center card-hover border-l-4 ${branch.color.split(' ')[0]} border-l-${branch.color.split(' ')[1].split('-')[0]}-500`}
                >
                  <div>
                    <h3 className="text-xl font-semibold">{branch.name}</h3>
                    <p className="text-gray-600 mt-1">
                      {branch.totalSubjects} subjects • {branch.totalPapers} papers
                    </p>
                  </div>
                  <Button className="bg-rgpv-red hover:bg-rgpv-red/90 text-white">
                    Explore <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            {/* Common subjects section */}
            <h2 className="text-2xl font-semibold mb-4 text-rgpv-dark">Common Subjects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {commonSubjects.map((subject, index) => (
                <div 
                  key={index} 
                  className={`paper-card p-4 flex flex-col card-hover ${subject.color}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-xs font-medium px-2 py-1 rounded bg-white/50">
                      {subject.code}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{subject.name}</h3>
                  <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-sm">{subject.papers} papers</span>
                    <Button variant="ghost" size="sm" className="text-rgpv-dark hover:text-rgpv-red">
                      View Papers <ChevronRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Semesters section */}
            <h2 className="text-2xl font-semibold mb-4 text-rgpv-dark">Explore by Semester</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
                <div 
                  key={semester} 
                  className="paper-card p-4 text-center card-hover"
                >
                  <h3 className="text-xl font-semibold mb-2">Semester {semester}</h3>
                  <Button className="w-full bg-rgpv-dark hover:bg-rgpv-dark/90 text-white mt-2">
                    View Subjects
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubjectsPage;
