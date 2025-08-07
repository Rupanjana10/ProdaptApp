import React, { useState } from 'react';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just log the values. In a real app, you'd add validation
        // (e.g., password and confirmPassword match) and an API call.
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        if (password !== confirmPassword) {
            alert("Passwords do not match!"); // Using alert for simplicity, replace with UI message
            return;
        }
        // Add your sign-up API call logic here
        alert("Sign Up Attempted!"); // Simulate success feedback
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Sign Up</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                    placeholder="Enter your email"
                />

                <label style={styles.label}>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                    placeholder="Create a password"
                />

                <label style={styles.label}>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    style={styles.input}
                    placeholder="Confirm your password"
                />

                <button type="submit" style={styles.button}>Sign Up</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    },
    heading: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold'
    },
    input: {
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px'
    },
    button: {
        padding: '10px',
        backgroundColor: '#28a745', // A green color for sign-up
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px' // Added a little space above the button
    }
};

export default SignUp;
