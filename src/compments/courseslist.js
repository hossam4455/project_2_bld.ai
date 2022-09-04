import React from "react";
import course from './course.moudel.css'
import './all_courses.css'
const Courseslist=()=>{
    const  courses = [
        {
            id: '1',
            image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
            title: 'Learn Python: The Complete Python Programming Course',
            instructor: 'Avinash Jain,The Codex',
            stars: 4.4,
            students: "2,948",
            price: "679.99",
            bestSeller: true,
        },
        {
            id: '2',
            image: 'https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg',
            title: 'Learning Python for Data Analysis and Visualization',
            instructor: 'Jose Portilla',
            stars: 4.4,
            students: "17,999",
            price: "1,599.99",
            bestSeller: false,
        },
        {
            id: '3',
            image: 'https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg',
            title: 'Python for Beginners - Learn Programming from scratch',
            instructor: 'Edwin Diaz, Coding FAcutly Solutaions',
            stars: 4.4,
            students: "1,781",
            price: "679.99",
            bestSeller: false,
        },
        {
            id: '4',
            image: 'https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg',
            title: 'Learn Python: Python for Beginners',
            instructor: 'Abrar Hussain',
            stars: 4.3,
            students: "2,773",
            price: "319.99",
            bestSeller: false,
        },
     
    ];
    const cours_list=courses.map(ele=>(
        <div className= "card">
        <div className="card-photo">
            <img src={ele.image} alt=''></img>
        </div>
        <h2>{ele.title}</h2>
        <div>{ele.instructor}</div>
        <div className="star">
            <span >{ele.stars}</span>
        </div>
        <div className="price">
            
            E£ {ele.price}
        </div>
        </div>
    ))
    return <div className="all_course">{cours_list}</div>
  
}
export default Courseslist