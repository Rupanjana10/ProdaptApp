import React from 'react';

function Dashboard() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome to Your Dashboard!</h1>
            <div style={styles.dashboardGrid}>
                {/* Dashboard Card 1 */}
                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>Total Users</h2>
                    <p style={styles.cardValue}>1,234</p>
                    <p style={styles.cardDetail}>+5% from last month</p>
                </div>

                {/* Dashboard Card 2 */}
                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>Sales Today</h2>
                    <p style={styles.cardValue}>$5,678</p>
                    <p style={styles.cardDetail}>+12% from yesterday</p>
                </div>

                {/* Dashboard Card 3 */}
                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>Active Projects</h2>
                    <p style={styles.cardValue}>15</p>
                    <p style={styles.cardDetail}>3 projects nearing deadline</p>
                </div>

                {/* Dashboard Card 4 */}
                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>Support Tickets</h2>
                    <p style={styles.cardValue}>7 Open</p>
                    <p style={styles.cardDetail}>2 high priority</p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: '#fefefe',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif' // Using a common font since Inter isn't globally loaded here
    },
    heading: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '40px',
        fontSize: '2.5em'
    },
    dashboardGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Responsive grid
        gap: '25px',
        width: '100%',
        padding: '10px'
    },
    card: {
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        border: '1px solid #f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '150px'
    },
    cardTitle: {
        fontSize: '1.4em',
        color: '#555',
        marginBottom: '10px',
        fontWeight: 'bold'
    },
    cardValue: {
        fontSize: '2.5em',
        color: '#007bff',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    cardDetail: {
        fontSize: '0.9em',
        color: '#777'
    }
};

export default Dashboard;
