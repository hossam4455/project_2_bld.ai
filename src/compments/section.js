import React from 'react';
import Courseslist from './courseslist';
import './section.css'


const Section = () => {
    
    return (
        <div className='section'>
        
            <div className='section_head'><h2 >
                Expand your career opportunities with Python
            </h2></div>
            <div className='section_pargraph'><p >
                Take one of Udemy’s range of Python courses and learn how to code
                using this incredibly useful language.
                Its simple syntax and readability makes Python perfect for Flask,
                Django, data science, and machine learning.
                You’ll learn how to build everything from games to sites to apps.
                Choose from a range of courses that will appeal to ...
            </p></div>
          <div className='section_btn'> <button >Explore Python</button></div>
            {Courseslist()}
        </div>
    )
}


export default Section;