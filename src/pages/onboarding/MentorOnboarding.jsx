import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MentorSidebar from '../../components/onboarding/mentor/MentorSidebar';
import Chip from '../../components/ui/Chip';
import OptionCard from '../../components/ui/OptionCard';
import { Briefcase, Rocket, GraduationCap, ArrowRight, Check, Heart, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const MentorOnboarding = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);

    // Step 1: Expertise
    const [selectedExpertise, setSelectedExpertise] = useState(['Product Management', 'Leadership']);
    const expertiseList = [
        'Product Management', 'Leadership', 'Software Architecture', 'Data Science',
        'UX Research', 'Frontend Development', 'Backend Development', 'DevOps',
        'Public Speaking', 'Career Coaching', 'Startup Strategy', 'Marketing'
    ];

    // Step 2: Mentoring Goals
    const [selectedGoal, setSelectedGoal] = useState('Give Back');

    // Step 3: Experience
    const [selectedExperience, setSelectedExperience] = useState('Senior');

    const toggleExpertise = (item) => {
        if (selectedExpertise.includes(item)) {
            setSelectedExpertise(selectedExpertise.filter(i => i !== item));
        } else {
            setSelectedExpertise([...selectedExpertise, item]);
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
            <MentorSidebar currentStep={currentStep} />

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
                        Share your knowledge on <span className="text-blue-600">Bridgify</span>.
                    </h1>
                    <p className="text-base lg:text-lg text-slate-500 max-w-2xl leading-relaxed">
                        Help the next generation of professionals grow. Customize your mentorship profile below.
                    </p>
                </motion.div>

                {/* Step 1: Expertise Section */}
                {currentStep === 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 mb-8"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="text-blue-600">
                                <Briefcase size={20} />
                            </div>
                            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">Expertise</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">What topics can you mentor in?</h2>
                        <p className="text-slate-500 mb-6">Select your areas of expertise.</p>

                        <div className="flex flex-wrap gap-3">
                            {expertiseList.map((item) => (
                                <Chip
                                    key={item}
                                    label={item}
                                    selected={selectedExpertise.includes(item)}
                                    onClick={() => toggleExpertise(item)}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Step 2: Mentoring Goals Section */}
                {currentStep === 2 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 mb-24"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="text-blue-600">
                                <Heart size={20} />
                            </div>
                            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">Goals</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">What drives you to mentor?</h2>
                        <p className="text-slate-500 mb-6">This helps us match you with the right mentees.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <OptionCard
                                icon={Heart}
                                title="Give Back"
                                description="I want to help others succeed in their career."
                                selected={selectedGoal === 'Give Back'}
                                onClick={() => setSelectedGoal('Give Back')}
                            />
                            <OptionCard
                                icon={Users}
                                title="Leadership"
                                description="I want to improve my leadership skills."
                                selected={selectedGoal === 'Leadership'}
                                onClick={() => setSelectedGoal('Leadership')}
                            />
                            <OptionCard
                                icon={Star}
                                title="Networking"
                                description="I want to connect with emerging talent."
                                selected={selectedGoal === 'Networking'}
                                onClick={() => setSelectedGoal('Networking')}
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
                                <GraduationCap size={20} />
                            </div>
                            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">Experience</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">How many years of experience do you have?</h2>
                        <p className="text-slate-500 mb-6">We'll show this on your profile.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <OptionCard
                                icon={Rocket}
                                title="Mid-Level"
                                description="3-5 years of industry experience."
                                selected={selectedExperience === 'Mid-Level'}
                                onClick={() => setSelectedExperience('Mid-Level')}
                            />
                            <OptionCard
                                icon={Briefcase}
                                title="Senior"
                                description="5-10 years of industry experience."
                                selected={selectedExperience === 'Senior'}
                                onClick={() => setSelectedExperience('Senior')}
                            />
                            <OptionCard
                                icon={Star}
                                title="Lead / Staff"
                                description="10+ years of industry experience."
                                selected={selectedExperience === 'Lead'}
                                onClick={() => setSelectedExperience('Lead')}
                            />
                            <OptionCard
                                icon={Check}
                                title="Executive"
                                description="Executive level leadership experience."
                                selected={selectedExperience === 'Executive'}
                                onClick={() => setSelectedExperience('Executive')}
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

export default MentorOnboarding;
