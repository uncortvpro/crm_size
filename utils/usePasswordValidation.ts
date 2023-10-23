export function usePasswordValidation(password: string, confirmPassword: string | null = null) {
  
    if (!confirmPassword) {
      confirmPassword = password;
    }

    if (password !== confirmPassword) {
      return 'Паролі не співпадають';
    }
  
    return false;
  }
  