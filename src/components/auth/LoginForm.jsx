import React, { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

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

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";

        if (!formData.password) newErrors.password = "Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Login Submit:", formData);
        }
    };

    return (
        <form className="space-y-6 fade-in" onSubmit={handleSubmit}>
            <Input
                label="Email Address"
                type="email"
                placeholder="name@work-email.com"
                icon={Mail}
                value={formData.email}
                error={errors.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={Lock}
                showForgot
                value={formData.password}
                error={errors.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
            />

            <Button
                fullWidth
                className="py-4 font-bold tracking-wide"
                rightIcon={<LogIn size={18} />}
                type="submit"
            >
                Login to Dashboard
            </Button>
        </form>
    );
};

export default LoginForm;
