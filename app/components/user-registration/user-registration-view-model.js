import { Observable } from '@nativescript/core';
import { AuthService } from '../../services/auth-service';
import { validateEmail, validatePassword } from '../../shared/utils/validators';

export class UserRegistrationViewModel extends Observable {
    constructor() {
        super();
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.errorMessage = "";
        this.isLoading = false;
        this.authService = new AuthService();
    }

    validateForm() {
        if (!this.email || !this.password || !this.confirmPassword) {
            this.set("errorMessage", "Please fill in all fields");
            return false;
        }

        if (!validateEmail(this.email)) {
            this.set("errorMessage", "Please enter a valid email");
            return false;
        }

        if (!validatePassword(this.password)) {
            this.set("errorMessage", "Password must be at least 6 characters");
            return false;
        }

        if (this.password !== this.confirmPassword) {
            this.set("errorMessage", "Passwords do not match");
            return false;
        }

        return true;
    }

    async onRegister() {
        if (!this.validateForm()) return;

        try {
            this.set("isLoading", true);
            this.set("errorMessage", "");

            await this.authService.register(this.email, this.password);
            // Navigate to login page or home page on success

        } catch (error) {
            this.set("errorMessage", error.message || "Registration failed");
        } finally {
            this.set("isLoading", false);
        }
    }
}