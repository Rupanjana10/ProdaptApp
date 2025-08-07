import React, { useState } from 'react';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(''); // To show success or error messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...'); // Indicate that the message is being sent

        // Simulate an API call to send the message
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

            // In a real application, you would send this data to your backend
            console.log('Contact Form Submission:', { name, email, message });

            // Simulate success or failure
            if (name && email && message) {
                setStatus('Message sent successfully! We will get back to you soon.');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('Please fill in all fields.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('Failed to send message. Please try again later.');
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Contact Us</h1>

            <div style={styles.contentWrapper}>
                {/* Contact Form Section */}
                <div style={styles.formCard}>
                    <h2 style={styles.subHeading}>Send us a Message</h2>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <label style={styles.label}>Your Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="Enter your name"
                        />

                        <label style={styles.label}>Your Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="Enter your email"
                        />

                        <label style={styles.label}>Message:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            style={styles.textarea}
                            rows="5"
                            placeholder="Type your message here..."
                        ></textarea>

                        <button type="submit" style={styles.button}>Send Message</button>
                        {status && <p style={styles.statusMessage}>{status}</p>}
                    </form>
                </div>

                {/* General Contact Info Section */}
                <div style={styles.infoCard}>
                    <h2 style={styles.subHeading}>Our Information</h2>
                    <p style={styles.infoText}>
                        <strong style={styles.infoLabel}>Email:</strong> support@prodapt.com
                    </p>
                    <p style={styles.infoText}>
                        <strong style={styles.infoLabel}>Phone:</strong> +1 (123) 456-7890
                    </p>
                    <p style={styles.infoText}>
                        <strong style={styles.infoLabel}>Address:</strong> 123 Prodapt Street, Suite 456, Innovation City, Country, 12345
                    </p>
                    <p style={styles.infoText}>
                        <strong style={styles.infoLabel}>Business Hours:</strong> Mon - Fri: 9:00 AM - 5:00 PM
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '1000px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: '#fefefe',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
    },
    heading: {
        color: '#333',
        marginBottom: '40px',
        fontSize: '2.5em'
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column', // Default to column for smaller screens
        gap: '30px',
        padding: '10px',
        alignItems: 'flex-start', // Align items to start in column layout
    },
    formCard: {
        flex: 1, // Allows it to grow
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        border: '1px solid #f0f0f0',
        width: '100%', // Take full width in column layout
        maxWidth: '500px', // Max width for the form card
        margin: '0 auto', // Center the form card
    },
    infoCard: {
        flex: 1, // Allows it to grow
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        border: '1px solid #f0f0f0',
        width: '100%', // Take full width in column layout
        maxWidth: '500px', // Max width for the info card
        margin: '0 auto', // Center the info card
        textAlign: 'left', // Align text left within info card
    },
    subHeading: {
        fontSize: '1.8em',
        color: '#555',
        marginBottom: '20px',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch', // Stretch form elements to full width
    },
    label: {
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'left',
    },
    input: {
        padding: '12px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '1em',
        width: '100%',
        boxSizing: 'border-box', // Include padding and border in the element's total width
    },
    textarea: {
        padding: '12px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '1em',
        width: '100%',
        boxSizing: 'border-box',
        resize: 'vertical', // Allow vertical resizing
    },
    button: {
        padding: '12px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1.1em',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        alignSelf: 'center', // Center the button
        width: 'auto', // Auto width for button
        minWidth: '150px',
    },
    statusMessage: {
        marginTop: '15px',
        fontSize: '0.9em',
        color: '#007bff',
        textAlign: 'center',
    },
    infoText: {
        fontSize: '1em',
        color: '#555',
        marginBottom: '10px',
        lineHeight: '1.5',
    },
    infoLabel: {
        color: '#333',
        marginRight: '5px',
    },
    // Media query for larger screens
    '@media (min-width: 768px)': {
        contentWrapper: {
            flexDirection: 'row', // Row layout for larger screens
            alignItems: 'flex-start', // Align items to start in row layout
        },
        formCard: {
            width: 'auto', // Auto width in row layout
            margin: '0', // Remove centering margin
        },
        infoCard: {
            width: 'auto', // Auto width in row layout
            margin: '0', // Remove centering margin
        },
    }
};

export default ContactUs;
