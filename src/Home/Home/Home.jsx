import React from 'react';
import Hero from './Hero';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';

const Home = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <About />
            <Contact />
        </div>
    );
};

export default Home;