function Home(){
    return (
        <div>
            <nav style={{ backgroundColor: '#1e2252ff', padding: '25px', textAlign: 'center'  }}>
                <a href="/dashboard" style={styles.box}>Dashboard</a> ||
                <a href="/"  style={styles.box} >Login</a> ||
                <a href="/signup" style={styles.box}>Signup</a> ||
                <a href="/gallery"  style={styles.box}>Gallery</a> ||
                <a href="/ContactUs" style={styles.box}>Contact Us </a>
            </nav>
        </div>
    );
    
}

const styles = {
    box:{
        color:"white" ,
         padding: '25px' , 
         fontFamily:'monospace', 
         fontSize:'1.5rem'
    }
};

export default Home;


