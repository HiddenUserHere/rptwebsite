import React from "react";
import '../haru/home.css';
import { Link } from "react-router-dom";
import News from "../components/News";
import SliderClass from "../components/SliderClass/index.jsx";
import '../haru/app.css';



const Home = () => {
    return (
        <div className="home">
        <div className="HeaderTop">
            <div className="content-header">
            <h1>LEGENDARY CAMPAIGNS</h1>
            <h2>THE WORLD OF REGNUM PRISTON TALE IS BACK</h2>
            <div className="button-header"><button>Register<small>New account</small></button> <button>Download<small>Play Free</small></button></div>
            <h3>New around here? <Link to="/"><span>Click Here</span></Link> and start your Adventure</h3>

            </div>
            
        </div>
        <div className="news-title"><h1>NEWS</h1>
        <img src="../src/assets/img/news/ornament2.png"></img></div>
        <News />
        <div className="content-map">
            <h1>WELCOME ADVENTURER</h1>
            <h2>NEW TO REGNUM WORLD?</h2>
            <div className="divider"><img src="../src/assets/img/news/ornament2.png"></img></div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nemo sequi eius quo laudantium rem sed, iste repellendus veritatis? Officiis commodi quibusdam consequatur doloremque rem sint doloribus reiciendis ipsa aperiam.</h3>
            <button>LEARN MORE</button>
        </div>
        <SliderClass/>
        <div className="space"></div>
        </div>
        
       
    )
};

export default Home;