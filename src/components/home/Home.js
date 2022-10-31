import React from 'react';
import "./home.css";
import Me from "../../assets/profile.2jpg.jpg";
import HeaderSosial from "./HeaderSosial";
import ScrollDown from "./ScrollDown"

function Home (){
	return(
		<section className="home container" id="home">
			<div className='intro'>
				<img src={Me} alt="" className="home_tag"/>
				<h1 className="home_name">Muhammad Ali Hanif</h1>
				<span className="home_edu">I'm a Junior Web Programmer</span>
				
				<HeaderSosial />
				
				<a href="#contact" className="btn">Hire Me !</a>
				
				<ScrollDown />
			</div>
		</section>
	);
};

export default Home;