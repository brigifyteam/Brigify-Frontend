import React from 'react';
import { User, Mail, ArrowRight } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import RoleSelector from '../ui/RoleSelector';

const SignupStep1 = ({ role, setRole, roles, onNext }) => {
    return (
        <div className="space-y-5 fade-in">
            <div className="space-y-3">
                <label className="text-[13px] font-bold text-slate-700 ml-0.5 tracking-tight">I am a:</label>
                <RoleSelector value={role} onChange={setRole} options={roles} />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
            </div>

            <Input label="Email Address" type="email" placeholder="name@company.com" />

            <Button
                fullWidth
                onClick={onNext}
                rightIcon={<ArrowRight size={16} />}
                className="py-3 font-bold tracking-wide"
            >
                Next Step
            </Button>
        </div>
    );
};

export default SignupStep1;
