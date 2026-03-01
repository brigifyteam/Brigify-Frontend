import React, { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../api/auth';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const loginMutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            console.log('Login successful:', data);
            // store token and maybe user info
            try {
                if (data?.token) localStorage.setItem('token', data.token);
            } catch (e) {
                console.warn('Unable to save token to localStorage', e);
            }
            // TODO: redirect user to dashboard or update auth context
        },
        onError: (error) => {
            console.error('Login failed:', error.response?.data || error.message);
            const resp = error.response?.data;
            if (resp && resp.message) {
                setErrors({ general: resp.message });
            } else {
                setErrors({ general: 'Login failed. Please check credentials and try again.' });
            }
        },
    });

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
            loginMutation.mutate({
                email: formData.email,
                password: formData.password,
            });
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

            {errors.general && (
                <p className="text-sm text-red-600 font-medium">{errors.general}</p>
            )}

            <Button
                fullWidth
                className="py-4 font-bold tracking-wide"
                rightIcon={<LogIn size={18} />}
                type="submit"
                disabled={loginMutation.isLoading}
            >
                {loginMutation.isLoading ? "Logging in..." : "Login to Dashboard"}
            </Button>
        </form>
    );
};

export default LoginForm;
