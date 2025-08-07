import React, { useState, useEffect, useRef } from 'react';

function Gallery() {
    // Array of placeholder image URLs representing Prodapt pictures
    const prodaptImages = [
        "https://placehold.co/600x400/ADD8E6/000000?text=Prodapt+Office+1",
        "https://placehold.co/600x400/90EE90/000000?text=Prodapt+Team+Meeting",
        "https://placehold.co/600x400/FFB6C1/000000?text=Prodapt+Innovation+Lab",
        "https://placehold.co/600x400/DDA0DD/000000?text=Prodapt+Event",
        "https://placehold.co/600x400/FFD700/000000?text=Prodapt+Building",
    ];

    // State to keep track of the current image index (for carousel position)
    const [currentIndex, setCurrentIndex] = useState(0);
    // Ref to access the inner carousel container's width for sliding
    const carouselInnerRef = useRef(null);

    // Function to go to the next image/slide
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === prodaptImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous image/slide
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? prodaptImages.length - 1 : prevIndex - 1
        );
    };

    // Effect to apply the transform for sliding
    useEffect(() => {
        if (carouselInnerRef.current) {
            // Calculate the offset needed to show the current image
            // We assume each image takes up the full width of its parent (.slide)
            const offset = -currentIndex * carouselInnerRef.current.offsetWidth;
            carouselInnerRef.current.style.transform = `translateX(${offset}px)`;
        }
    }, [currentIndex]); // Re-run effect when currentIndex changes

    // Optional: Auto-play functionality (uncomment if desired for carousel)
    // useEffect(() => {
    //     const interval = setInterval(goToNext, 3000); // Change image every 3 seconds
    //     return () => clearInterval(interval); // Clean up the interval on component unmount
    // }, [currentIndex]); // Re-run effect if currentIndex changes to reset timer

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Prodapt Image Carousel</h1>
            <div style={styles.carouselWrapper}>
                <button onClick={goToPrevious} style={styles.navButtonLeft}>&#10094;</button> {/* Left arrow */}
                <div style={styles.carouselViewport}>
                    <div ref={carouselInnerRef} style={styles.carouselInner}>
                        {prodaptImages.map((imageUrl, index) => (
                            <div key={index} style={styles.slide}>
                                <img
                                    src={imageUrl}
                                    alt={`Prodapt Image ${index + 1}`}
                                    style={styles.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={goToNext} style={styles.navButtonRight}>&#10095;</button> {/* Right arrow */}
            </div>
            <div style={styles.dotsContainer}>
                {prodaptImages.map((_, index) => (
                    <span
                        key={index}
                        style={{
                            ...styles.dot,
                            backgroundColor: index === currentIndex ? '#717171' : '#bbb',
                        }}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '900px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    heading: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px'
    },
    carouselWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
        marginBottom: '20px',
    },
    carouselViewport: {
        width: '100%', // Viewport shows one image at a time
        overflow: 'hidden', // Hides images outside the current view
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
        backgroundColor: '#fff',
    },
    carouselInner: {
        display: 'flex',
        transition: 'transform 0.5s ease-in-out', // Smooth sliding transition
    },
    slide: {
        flexShrink: 0, // Prevent slides from shrinking
        width: '100%', // Each slide takes full viewport width
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '400px', // Limit slide height
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: '8px',
        objectFit: 'contain', // Ensure image fits without cropping
    },
    navButtonLeft: {
        cursor: 'pointer',
        padding: '16px',
        color: '#333',
        fontWeight: 'bold',
        fontSize: '24px',
        transition: '0.6s ease',
        userSelect: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: 'none',
        outline: 'none',
        marginRight: '10px', // Space from carousel
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    },
    navButtonRight: {
        cursor: 'pointer',
        padding: '16px',
        color: '#333',
        fontWeight: 'bold',
        fontSize: '24px',
        transition: '0.6s ease',
        userSelect: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: 'none',
        outline: 'none',
        marginLeft: '10px', // Space from carousel
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    },
    dotsContainer: {
        textAlign: 'center',
        padding: '10px 0',
    },
    dot: {
        cursor: 'pointer',
        height: '15px',
        width: '15px',
        margin: '0 2px',
        backgroundColor: '#bbb',
        borderRadius: '50%',
        display: 'inline-block',
        transition: 'background-color 0.6s ease',
    },
};

export default Gallery;
