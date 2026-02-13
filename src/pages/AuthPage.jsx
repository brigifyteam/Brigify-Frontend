import React, { useState, useMemo } from 'react';
import {
    GraduationCap,
    Briefcase,
    Users,
    User,
    Mail,
    Lock,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Building2,
    Globe,
    BriefcaseIcon,
    Linkedin,
    Sparkles
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import SocialLogin from '../components/ui/SocialLogin';
import RoleSelector from '../components/ui/RoleSelector';
import Input from '../components/ui/Input';
import LoginForm from '../components/auth/LoginForm';

import authBg from '../assets/images/auth-bg.jpg';
import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';

// Static Sidebar Background - Never re-renders
const StaticSidebarBackground = React.memo(() => {
    return (
        <>
            <img src={authBg} alt="Bg" className="absolute inset-0 w-full h-full object-cover opacity-60 animate-ken-burns" />
            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>
        </>
    );
});

StaticSidebarBackground.displayName = 'StaticSidebarBackground';

// Sidebar Content - Memoized
const SidebarContent = React.memo(() => {
    const users = [user1, user2, user3];
    return (
        <div className="relative z-10 font-outfit h-full flex flex-col p-8 sm:p-12 lg:p-16">
            <div className="mb-auto">
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20 shadow-2xl transition-all hover:bg-white/15">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <span className="text-white text-xs font-bold tracking-wide">Trusted by 10,000+ professionals</span>
                </div>
            </div>

            <div className="mt-auto space-y-6 max-w-lg mb-8">
                <h1 className="text-4xl lg:text-4xl font-bold text-white leading-[1.2] tracking-tight animate-slide-left">
                    Bridge the gap between <br /> learning and earning.
                </h1>
                <p className="text-blue-100/70 text-base leading-relaxed font-medium pr-10 opacity-0 animate-slide-left [animation-delay:0.1s]">
                    Join a global community where ambition meets opportunity. Master in-demand skills, find mentors, and launch your career.
                </p>

                <div className="pt-4 flex flex-col gap-4 opacity-0 animate-slide-left [animation-delay:0.2s]">
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2.5">
                            {users.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className="w-9 h-9 rounded-full border-[2.5px] border-[#161b22] shadow-xl object-cover transition-transform hover:scale-110 cursor-pointer relative z-[10]"
                                    alt="User"
                                />
                            ))}
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-white font-bold text-base tracking-tight">4.9/5</span>
                            <span className="text-white/40 text-[12px] font-medium">from verified users</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

SidebarContent.displayName = 'SidebarContent';

// Auth
const AuthPage = () => {
    const [mode, setMode] = useState('signup');
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState('right');
    const [formData, setFormData] = useState({
        role: 'learner',
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        jobTitle: '',
        linkedinUrl: '',
        experience: '',
        website: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const roles = useMemo(() => [
        { id: 'learner', label: 'Learner', icon: <GraduationCap /> },
        { id: 'mentor', label: 'Mentor', icon: <Users /> },
        { id: 'employer', label: 'Employer', icon: <Briefcase /> }
    ], []);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const validateStep1 = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "Name is required";
        if (!formData.lastName) newErrors.lastName = "Required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email";
        }

        if (formData.role === 'mentor') {
            if (!formData.jobTitle) newErrors.jobTitle = "Required";
            if (!formData.experience) newErrors.experience = "Required";
        }
        if (formData.role === 'employer') {
            if (!formData.companyName) newErrors.companyName = "Required";
            if (!formData.jobTitle) newErrors.jobTitle = "Required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 8) newErrors.password = "Min 8 chars";

        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Match failed";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) {
            setDirection('right');
            setStep(2);
        }
    };

    const handleBack = () => {
        setDirection('left');
        setStep(1);
    };

    const getPasswordStrength = (password) => {
        if (!password) return { score: 0, label: '', color: 'bg-slate-100' };
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        const maps = [
            { label: 'Weak', color: 'bg-blue-600' },
            { label: 'Fair', color: 'bg-blue-600' },
            { label: 'Good', color: 'bg-blue-600' },
            { label: 'Strong', color: 'bg-blue-600' }
        ];
        return { score, ...(maps[score - 1] || maps[0]) };
    };

    const strength = getPasswordStrength(formData.password);

    const toggleMode = (newMode) => {
        setMode(newMode);
        setStep(1);
        setErrors({});
    };

    const renderRoleSpecificFields = () => {
        switch (formData.role) {
            case 'mentor':
                return (
                    <div className="grid grid-cols-2 gap-4 animate-fade-in">
                        <Input
                            label="Current Job Title"
                            placeholder="Senior Engineer"
                            icon={BriefcaseIcon}
                            value={formData.jobTitle}
                            error={errors.jobTitle}
                            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                        />
                        <Input
                            label="Years of Exp."
                            placeholder="Ex: 5"
                            icon={Sparkles}
                            value={formData.experience}
                            error={errors.experience}
                            onChange={(e) => handleInputChange('experience', e.target.value)}
                        />
                        <Input
                            label="LinkedIn URL"
                            placeholder="linkedin.com/in/..."
                            icon={Linkedin}
                            className="col-span-2"
                            value={formData.linkedinUrl}
                            onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                        />
                    </div>
                );
            case 'employer':
                return (
                    <div className="grid grid-cols-2 gap-4 animate-fade-in">
                        <Input
                            label="Company Name"
                            placeholder="Acme Corp"
                            icon={Building2}
                            value={formData.companyName}
                            error={errors.companyName}
                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                        />
                        <Input
                            label="Your Role"
                            placeholder="Hiring Manager"
                            icon={User}
                            value={formData.jobTitle}
                            error={errors.jobTitle}
                            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                        />
                        <Input
                            label="Company Website"
                            placeholder="www.company.com"
                            icon={Globe}
                            className="col-span-2"
                            value={formData.website}
                            onChange={(e) => handleInputChange('website', e.target.value)}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    const renderForm = () => {
        if (mode === 'login') return <LoginForm />;

        return (
            <div key={step} className={`space-y-6 ${direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'}`}>
                {step === 1 ? (
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-[13px] font-bold text-slate-700 ml-0.5">I am joining as a...</label>
                            <RoleSelector
                                value={formData.role}
                                onChange={(val) => handleInputChange('role', val)}
                                options={roles}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="First Name"
                                placeholder="John"
                                icon={User}
                                value={formData.firstName}
                                error={errors.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                            />
                            <Input
                                label="Last Name"
                                placeholder="Doe"
                                icon={User}
                                value={formData.lastName}
                                error={errors.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                            />
                        </div>

                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="name@work-email.com"
                            icon={Mail}
                            value={formData.email}
                            error={errors.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                        />

                        {renderRoleSpecificFields()}

                        <Button
                            fullWidth
                            className="py-4 font-bold tracking-wide transition-all active:scale-[0.98]"
                            rightIcon={<ArrowRight size={18} />}
                            onClick={handleNext}
                        >
                            Next Step
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Input
                                label="Create Password"
                                type="password"
                                placeholder="••••••••"
                                icon={Lock}
                                value={formData.password}
                                error={errors.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
                            />
                            <div className="space-y-3 px-0.5">
                                <div className="flex items-center gap-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= strength.score ? strength.color : 'bg-slate-100'}`}
                                        />
                                    ))}
                                    {formData.password && (
                                        <span className="text-[12px] font-bold ml-2 min-w-[50px] text-right transition-colors text-blue-600">
                                            {strength.label}
                                        </span>
                                    )}
                                </div>
                                <p className="text-[12px] text-slate-400 font-medium">
                                    Must be at least 8 characters.
                                </p>
                            </div>
                        </div>
                        <Input
                            label="Confirm Password"
                            type="password"
                            placeholder="••••••••"
                            icon={Lock}
                            value={formData.confirmPassword}
                            error={errors.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        />

                        <div className="flex gap-3 pt-2">
                            <Button
                                variant="secondary"
                                className="flex-1 py-4 font-bold transition-all active:scale-[0.98]"
                                onClick={handleBack}
                                leftIcon={<ArrowLeft size={18} />}
                            >
                                Back
                            </Button>
                            <Button
                                className="flex-[2] py-4 font-bold tracking-wide transition-all active:scale-[0.98]"
                                onClick={() => validateStep2() && console.log("Submit:", formData)}
                            >
                                Create Account
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <Layout>
            <div className="w-full flex flex-col lg:flex-row min-h-[calc(100vh-64px)] overflow-hidden relative bg-white">
                <div className="absolute inset-0 lg:hidden overflow-hidden pointer-events-none">
                    <img src={authBg} alt="Bg" className="w-full h-full object-cover opacity-10 blur-sm scale-105" />
                    <div className="absolute inset-0 bg-white/60"></div>
                </div>

                {/* Sidebar - Completely static */}
                <div className="hidden lg:flex lg:w-[45%] relative bg-slate-900 overflow-hidden shrink-0">
                    <StaticSidebarBackground />
                    <SidebarContent />
                </div>

                {/* Form Area */}
                <div className="w-full lg:w-[55%] flex items-center justify-center p-8 sm:p-12 lg:p-16 bg-white relative z-10 overflow-y-auto custom-scrollbar">
                    <div className="w-full max-w-[440px] py-12">
                        <div className="flex gap-10 border-b border-slate-100 mb-10 relative">
                            <button
                                onClick={() => toggleMode('signup')}
                                className={`pb-4 text-[13px] font-bold transition-all duration-300 relative z-10 ${mode === 'signup' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                {step === 2 ? 'Complete Signup' : 'Create Account'}
                            </button>
                            <button
                                onClick={() => toggleMode('login')}
                                className={`pb-4 text-[13px] font-bold transition-all duration-300 relative z-10 ${mode === 'login' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                Login Access
                            </button>

                            <div
                                className="absolute bottom-[-1px] h-[2px] bg-blue-600 transition-all duration-300 ease-out z-20"
                                style={{
                                    left: mode === 'signup' ? '0' : '142px',
                                    width: mode === 'signup'
                                        ? (step === 2 ? '112px' : '108px')
                                        : '96px'
                                }}
                            />
                        </div>

                        <div className="space-y-2 mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                                {mode === 'signup'
                                    ? step === 1 ? 'Join Bridgify' : 'Secure your account'
                                    : 'Welcome back'
                                }
                            </h2>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                {mode === 'signup'
                                    ? 'Start your journey to professional growth today.'
                                    : 'Please enter your credentials to access your dashboard.'
                                }
                            </p>
                        </div>

                        {renderForm()}

                        <SocialLogin />

                        <div className="pt-8 border-t border-slate-100 mt-10">
                            <p className="text-[11px] text-center text-slate-400 leading-relaxed font-bold tracking-tight">
                                BY CONTINUING, YOU AGREE TO OUR <br className="sm:hidden" />
                                <a href="#" className="underline text-blue-600 transition-colors mx-1 font-extrabold">TERMS OF SERVICE</a>
                                AND
                                <a href="#" className="underline text-blue-600 transition-colors mx-1 font-extrabold">PRIVACY POLICY</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AuthPage;
