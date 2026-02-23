import React from 'react';
import { Trophy, Clock, Award, Flame, Download, Plus } from 'lucide-react';
import StatCard from '../../components/dashboard/learning/StatCard';
import CourseProgressCard from '../../components/dashboard/learning/CourseProgressCard';
import RecommendationCard from '../../components/dashboard/learning/RecommendationCard';

const LearningDashboard = () => {
    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="max-w-xl">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">My Learning Path</h1>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Track your progress, manage your courses, and discover new skills to bridge the gap to your next opportunity.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-gray-300 transition-colors bg-white shadow-sm">
                        <Download className="w-4 h-4" />
                        Export Report
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                        <Plus className="w-4 h-4" />
                        Browse Catalog
                    </button>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Skills Mastered"
                    value="12"
                    icon={Trophy}
                    iconBg="bg-blue-50"
                    iconColor="text-blue-600"
                />
                <StatCard
                    title="Hours Learned"
                    value="145h"
                    icon={Clock}
                    iconBg="bg-purple-50"
                    iconColor="text-purple-600"
                />
                <StatCard
                    title="Certificates"
                    value="3"
                    icon={Award}
                    iconBg="bg-emerald-50"
                    iconColor="text-emerald-600"
                />
                <StatCard
                    title="Current Streak"
                    value="5 Days"
                    icon={Flame}
                    iconBg="bg-orange-50"
                    iconColor="text-orange-500"
                />
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-2 border border-gray-100 rounded-2xl shadow-sm">
                <div className="flex-1 relative w-full flex items-center">
                    <div className="absolute left-4 opacity-50">
                        <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for specific skills or courses..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50/50 border-none focus:ring-2 focus:ring-blue-100 focus:bg-white text-sm outline-none"
                    />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto px-2 pb-2 md:pb-0">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 text-sm font-semibold whitespace-nowrap">
                        All Levels
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <button className="px-4 py-2 rounded-xl text-slate-500 hover:bg-gray-50 text-sm font-medium whitespace-nowrap">Beginner</button>
                    <button className="px-4 py-2 rounded-xl text-slate-500 hover:bg-gray-50 text-sm font-medium whitespace-nowrap">Intermediate</button>
                    <button className="px-4 py-2 rounded-xl text-slate-500 hover:bg-gray-50 text-sm font-medium whitespace-nowrap hidden lg:block">Advanced</button>
                </div>
            </div>

            {/* In Progress Section */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900">In Progress</h2>
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
                        View All
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CourseProgressCard
                        iconName="code"
                        iconBg="bg-blue-50"
                        iconColor="text-blue-600"
                        level="Intermediate"
                        title="React.js Fundamentals"
                        description="Master the basics of React, components, and state management."
                        progress={65}
                    />
                    <CourseProgressCard
                        iconName="marketing"
                        iconBg="bg-purple-50"
                        iconColor="text-purple-600"
                        level="Beginner"
                        title="Strategic Marketing"
                        description="Learn how to build effective marketing strategies for startups."
                        progress={30}
                    />
                    <CourseProgressCard
                        iconName="data"
                        iconBg="bg-emerald-50"
                        iconColor="text-emerald-600"
                        level="Advanced"
                        title="Data Visualization"
                        description="Create compelling stories with complex datasets."
                        progress={10}
                    />
                </div>
            </div>

            {/* Recommended for you Section */}
            <div>
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-1">Recommended for you</h2>
                    <p className="text-sm text-slate-500">Based on your interest in Technology and Business</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 tracking-tight">
                    <RecommendationCard
                        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
                        rating="4.8"
                        title="Python for Finance: Investment Fundamentals"
                        author="Sarah Jenkins"
                        duration="12h 30m"
                    />
                    <RecommendationCard
                        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
                        rating="4.9"
                        title="Product Management 101"
                        author="David Chen"
                        duration="8h 15m"
                    />
                    <RecommendationCard
                        image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
                        rating="4.5"
                        title="Social Media Advertising Pro"
                        author="Grow Academy"
                        duration="6h 45m"
                    />
                    <RecommendationCard
                        image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop"
                        rating="4.7"
                        title="UI/UX Design Principles"
                        author="Design Masters"
                        duration="15h 20m"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="pt-8 pb-4 text-center text-xs font-medium text-slate-400">
                © 2023 Bridgify. Bridging learning to real opportunities.
            </div>
        </div>
    );
};

export default LearningDashboard;
