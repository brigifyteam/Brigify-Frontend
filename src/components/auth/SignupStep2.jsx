import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const SignupStep2 = ({ onPrev }) => {
    return (
        <div className="space-y-5 fade-in">
            <div className="space-y-4">
                <Input label="Password" type="password" placeholder="••••••••" showForgot />
                <Input label="Confirm Password" type="password" placeholder="••••••••" />
            </div>

            <div className="space-y-2">
                <div className="flex gap-1.5 h-1.5 px-0.5">
                    <div className="flex-1 bg-blue-600 rounded-full"></div>
                    <div className="flex-1 bg-blue-600 rounded-full"></div>
                    <div className="flex-1 bg-slate-100 rounded-full"></div>
                    <div className="flex-1 bg-slate-100 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center text-[11px] font-medium tracking-tight">
                    <span className="text-slate-400">Must be at least 8 characters.</span>
                    <span className="text-blue-600 font-bold uppercase tracking-wider">Medium</span>
                </div>
            </div>

            <div className="flex gap-3 pt-2">
                <Button variant="secondary" onClick={onPrev} className="flex-1 py-3 font-bold">Back</Button>
                <Button className="flex-[2] py-3 font-bold tracking-wide">Create Account</Button>
            </div>
        </div>
    );
};

export default SignupStep2;
