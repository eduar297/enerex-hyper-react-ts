// This is a list of common passwords that you want to avoid
export const commonPasswords = [
    'bigblackmonkey',
    '123456789',
    '12345',
    'qwerty',
    'password',
    '12345678',
    '111111',
    '123123',
    '1234567890',
    '1234567',
    'qwerty123',
    '000000',
    '1q2w3e',
    'aa12345678',
    'abc123',
    'password1',
    '1234',
    'qwertyuiop',
    '123321',
    'password123',
    'iloveyou',
    'naruto',
    'pokemon',
    '12345678910',
];

// This function receives a password and returns a number between 0 and 5 that indicates its strength level
export const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
};

// This function receives a strength level and returns an object with the percentage, label and color for the progress bar
export const getProgressBarInfo = (strength: number) => {
    const info = [
        { percentage: 10, label: 'Weak', color: 'danger' },
        { percentage: 20, label: 'Normal', color: 'danger' },
        { percentage: 50, label: 'Medium', color: 'warning' },
        { percentage: 80, label: 'Strong', color: 'warning' },
        { percentage: 100, label: 'Very Strong', color: 'success' },
    ];
    return info[strength] || info[0];
};
