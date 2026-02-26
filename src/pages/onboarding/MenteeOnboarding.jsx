import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenteeSidebar from '../../components/onboarding/mentee/MenteeSidebar';
import Chip from '../../components/ui/Chip';
import OptionCard from '../../components/ui/OptionCard';
import { Briefcase, Rocket, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const MenteeOnboarding = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);

    // Step 1: Interests
    const [selectedInterests, setSelectedInterests] = useState(['Data Science', 'UX Design']);
    const interests = [
        'Data Science', 'UX Design', 'Digital Marketing', 'Project Management',
        'Web Development', 'Software Engineering', 'Sales Strategy', 'Business Analytics',
        'Public Speaking', 'Machine Learning'
    ];

    // Step 2: Goals
    const [selectedGoal, setSelectedGoal] = useState('Get Hired');

    // Step 3: Experience
    const [selectedExperience, setSelectedExperience] = useState('Student');

    const toggleInterest = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(i => i !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        } else {
            // Simulate submission delay and navigate to dashboard
            setTimeout(() => {
                navigate('/');
            }, 500);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="min-h-screen bg-bg-base flex font-outfit relative">
            <MenteeSidebar currentStep={currentStep} />

            {/* Mobile Header / Step Indicator */}
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-30 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Bridgify" className="h-8 w-8 object-contain rounded-md" />
                    <span className="text-xl font-bold text-slate-900">Bridgify</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-500">Step {currentStep} of 3</span>
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-600 transition-all duration-300"
                            style={{ width: `${(currentStep / 3) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            <main className="flex-1 lg:ml-80 p-6 pt-24 lg:p-16 flex flex-col max-w-5xl mx-auto w-full">
                {/* Desktop Header Actions */}
                <div className="flex justify-end mb-8 hidden lg:flex">
                    <button onClick={() => navigate('/')} className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">Skip for now</button>
                </div>

                {/* Mobile Skip Button */}
                <div className="flex justify-end mb-6 lg:hidden">
                    <button onClick={() => navigate('/')} className="text-xs font-medium text-slate-500 hover:text-slate-800">Skip</button>
                </div>

                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 lg:mb-12"
                >
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Let's personalize your <span className="text-blue-600">Bridgify</span> experience.
                    </h1>
                    <p className="text-base lg:text-lg text-slate-500 max-w-2xl leading-relaxed">
                        We'll use this information to curate your learning path, connect you with the right mentors, and find relevant job opportunities.
                    </p>
                </motion.div>

                {/* Step 1: Interests Section */}
                {currentStep === 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 mb-8"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="text-blue-600">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">Interests</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">What skills are you looking to develop?</h2>
                        <p className="text-slate-500 mb-6">Select at least 3 topics to personalize your feed.</p>

                        <div className="flex flex-wrap gap-3">
                            {interests.map((interest) => (
                                <Chip
                                    key={interest}
                                    label={interest}
                                    selected={selectedInterests.includes(interest)}
                                    onClick={() => toggleInterest(interest)}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Step 2: Goals Section */}
                {currentStep === 2 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 mb-24"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="text-blue-600">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <line x1="4" y1="22" x2="4" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">Goals</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">What is your primary objective?</h2>
                        <p className="text-slate-500 mb-6">We will adjust the job board and mentorship suggestions accordingly.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <OptionCard
                                icon={Briefcase}
                                title="Get Hired"
                                description="Find a full-time role at a top company."
                                selected={selectedGoal === 'Get Hired'}
                                onClick={() => setSelectedGoal('Get Hired')}
                            />
                            <OptionCard
                                icon={Rocket}
                                title="Freelance"
                                description="Find gigs, projects, and new clients."
                                selected={selectedGoal === 'Freelance'}
                                onClick={() => setSelectedGoal('Freelance')}
                            />
                            <OptionCard
                                icon={GraduationCap}
                                title="Upskill"
                                description="Learn new skills for my current role."
                                selected={selectedGoal === 'Upskill'}
                                onClick={() => setSelectedGoal('Upskill')}
                            />
                        </div>
                    </motion.div>
                )}

                {/* Step 3: Experience Level Section */}
                {currentStep === 3 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 mb-24"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="text-blue-600">
                                {/* Simple Chart/Bar Icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">Experience</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">What's your experience level?</h2>
                        <p className="text-slate-500 mb-6">Help us tailor the content difficulty for you.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <OptionCard
                                icon={GraduationCap}
                                title="Student"
                                description="I am currently studying."
                                selected={selectedExperience === 'Student'}
                                onClick={() => setSelectedExperience('Student')}
                            />
                            <OptionCard
                                icon={Briefcase}
                                title="Entry Level"
                                description="0-2 years of experience."
                                selected={selectedExperience === 'Entry Level'}
                                onClick={() => setSelectedExperience('Entry Level')}
                            />
                            <OptionCard
                                icon={Rocket}
                                title="Mid Level"
                                description="3-5 years of experience."
                                selected={selectedExperience === 'Mid Level'}
                                onClick={() => setSelectedExperience('Mid Level')}
                            />
                            <OptionCard
                                icon={Check}
                                title="Senior Level"
                                description="5+ years of experience."
                                selected={selectedExperience === 'Senior Level'}
                                onClick={() => setSelectedExperience('Senior Level')}
                            />
                        </div>
                    </motion.div>
                )}

                {/* Footer Actions */}
                <div className="fixed bottom-0 right-0 left-0 lg:left-80 p-6 bg-white border-t border-gray-100 flex justify-between items-center z-20">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className={`text-slate-600 font-medium hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold shadow-blue-button flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {currentStep === 3 ? 'Finish' : 'Continue'}
                        <ArrowRight size={18} />
                    </button>
                </div>

            </main>
        </div>
    );
};

export default MenteeOnboarding;
