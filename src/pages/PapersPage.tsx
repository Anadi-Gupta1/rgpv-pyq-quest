
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter, Download, Calendar } from 'lucide-react';
import Layout from '@/components/Layout';

const PapersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  
  // Dummy data
  const papers = [
    {
      id: 1,
      title: 'Software Engineering',
      code: 'CS-503',
      branch: 'CSE',
      semester: '5',
      year: '2022',
      downloadCount: '3.2k',
    },
    {
      id: 2,
      title: 'Data Structures',
      code: 'CS-302',
      branch: 'CSE',
      semester: '3',
      year: '2022',
      downloadCount: '2.8k',
    },
    {
      id: 3,
      title: 'Database Management Systems',
      code: 'CS-404',
      branch: 'CSE',
      semester: '4',
      year: '2022',
      downloadCount: '2.5k',
    },
    {
      id: 4,
      title: 'Digital Electronics',
      code: 'EC-303',
      branch: 'ECE',
      semester: '3',
      year: '2022',
      downloadCount: '2.1k',
    },
    {
      id: 5,
      title: 'Computer Networks',
      code: 'CS-603',
      branch: 'CSE',
      semester: '6',
      year: '2022',
      downloadCount: '1.9k',
    },
    {
      id: 6,
      title: 'Operating Systems',
      code: 'CS-504',
      branch: 'IT',
      semester: '5',
      year: '2022',
      downloadCount: '1.7k',
    },
    {
      id: 7,
      title: 'Machine Learning',
      code: 'CS-701',
      branch: 'CSE',
      semester: '7',
      year: '2021',
      downloadCount: '2.3k',
    },
    {
      id: 8,
      title: 'Artificial Intelligence',
      code: 'CS-704',
      branch: 'CSE',
      semester: '7',
      year: '2021',
      downloadCount: '2.2k',
    },
    {
      id: 9,
      title: 'Electronic Devices',
      code: 'EC-202',
      branch: 'ECE',
      semester: '2',
      year: '2021',
      downloadCount: '1.5k',
    }
  ];
  
  // Filter papers based on search and filters
  const filteredPapers = papers.filter(paper => {
    // Search term filter
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          paper.code.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Branch filter
    const matchesBranch = selectedBranch === 'all' || paper.branch === selectedBranch;
    
    // Semester filter
    const matchesSemester = selectedSemester === 'all' || paper.semester === selectedSemester;
    
    // Year filter
    const matchesYear = selectedYear === 'all' || paper.year === selectedYear;
    
    return matchesSearch && matchesBranch && matchesSemester && matchesYear;
  });

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-rgpv-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 ai-gradient-text">
              Question Papers
            </h1>
            
            {/* Search and filter area */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by subject name or code..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rgpv-red/50"
                  />
                </div>
                
                <Button className="bg-rgpv-red hover:bg-rgpv-red/90 text-white button-shadow">
                  <Search className="w-4 h-4 mr-2" /> Search
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="w-full sm:w-auto">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-rgpv-red/50"
                  >
                    <option value="all">All Branches</option>
                    <option value="CSE">Computer Science</option>
                    <option value="IT">Information Technology</option>
                    <option value="ECE">Electronics & Communication</option>
                    <option value="EE">Electrical Engineering</option>
                    <option value="ME">Mechanical Engineering</option>
                  </select>
                </div>
                
                <div className="w-full sm:w-auto">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
                  <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-rgpv-red/50"
                  >
                    <option value="all">All Semesters</option>
                    <option value="1">1st Semester</option>
                    <option value="2">2nd Semester</option>
                    <option value="3">3rd Semester</option>
                    <option value="4">4th Semester</option>
                    <option value="5">5th Semester</option>
                    <option value="6">6th Semester</option>
                    <option value="7">7th Semester</option>
                    <option value="8">8th Semester</option>
                  </select>
                </div>
                
                <div className="w-full sm:w-auto">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-rgpv-red/50"
                  >
                    <option value="all">All Years</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                  </select>
                </div>
                
                <div className="w-full sm:w-auto flex items-end">
                  <Button variant="outline" className="border-rgpv-dark text-rgpv-dark">
                    <Filter className="w-4 h-4 mr-2" /> Reset Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Results count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredPapers.length} results
              </p>
            </div>
            
            {/* Papers listing */}
            <div className="grid grid-cols-1 gap-4">
              {filteredPapers.map((paper) => (
                <div key={paper.id} className="paper-card flex flex-col md:flex-row justify-between p-4 md:p-6">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-start">
                      <span className="inline-block bg-rgpv-red text-white text-xs font-semibold px-2.5 py-1 rounded mr-2">
                        {paper.year}
                      </span>
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded">
                        {paper.code}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-rgpv-dark mt-2">{paper.title}</h3>
                    <div className="text-gray-600 text-sm mt-2 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Semester {paper.semester} • {paper.branch}</span>
                      <span className="mx-2">•</span>
                      <span>{paper.downloadCount} downloads</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm" className="border-rgpv-red text-rgpv-red hover:bg-rgpv-red hover:text-white">
                      View Paper
                    </Button>
                    <Button className="bg-rgpv-dark hover:bg-rgpv-dark/90 text-white">
                      <Download className="w-4 h-4 mr-2" /> Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button size="sm" className="bg-rgpv-red text-white">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PapersPage;
