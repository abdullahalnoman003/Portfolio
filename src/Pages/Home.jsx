import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero from '../Components/hero';
import About from '../Components/About';
import Skill from '../Components/Skill';
import Education from '../Components/Education';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
const Home = () => {
    return (
        <div className="space-font min-h-screen w-full text-white bg-[linear-gradient(135deg,#0f0c29,#302b63,#24243e)] bg-[length:300%_300%] animate-[moveDiagonal_25s_linear_infinite]">
        <nav><Navbar></Navbar></nav>
        <main className='max-lg:pt-15'>
            <div id="hero"><Hero /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skill /></div>
            <div id="education"><Education /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>

        </main>
        <footer> <Footer></Footer> </footer>
        </div>
    );
};

export default Home;