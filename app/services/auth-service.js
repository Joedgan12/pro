import { validateEmail, validatePassword } from '../shared/utils/validators';

export class AuthService {
    async login(email, password) {
        if (!validateEmail(email)) {
            throw new Error('Invalid email format');
        }
        
        if (!validatePassword(password)) {
            throw new Error('Password must be at least 6 characters');
        }

        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'test@example.com' && password === 'password123') {
                    resolve({ user: { email } });
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);
        });
    }
}