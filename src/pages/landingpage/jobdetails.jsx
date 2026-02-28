import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Navbar from '../../components/landingpage/Navbar';
import JobDetails from '../../components/landingpage/jobDetails';

// Import from your data file
import { getJobById } from '../../data/jobs';

export default function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = getJobById(id);

        if (!data) {
          throw new Error('Job not found in database');
        }

        setJob(data);
      } catch (err) {
        console.error('Failed to load job:', err);
        setError(err.message || 'Failed to load job details');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJob();
    } else {
      setError('No job ID provided');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Job not found</h2>
            <p className="text-gray-600 mb-6">{error || "The job you're looking for doesn't exist or has been removed."}</p>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              <ArrowLeft size={18} />
              Back to Jobs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6 font-medium">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          {' / '}
          <Link to="/jobs" className="hover:text-gray-900 transition-colors">Jobs</Link>
          {' / '}
          <span className="text-gray-900">{job.title}</span>
        </nav>

        <JobDetails job={job} />
      </div>
    </div>
  );
}