import React, { useState } from 'react';
 
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just log the values. You can replace this with API call logic.
        console.log('Email:', email);
        console.log('Password:', password);
    };
 
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Login</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
 
                <label style={styles.label}>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
 
                <button type="submit" style={styles.button}>Login</button>
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
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
    }
};
 
export default Login;
 
 