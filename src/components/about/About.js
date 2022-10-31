import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';

function About (){
	return(
		<section className='about container section' id="about">
			<h2 className="section_title">About Me</h2>
			<div className="about_container grid">
				<img src={Image} alt="" className="about_img" />
			
				<div className="about_data grid">
					<div className="about_info">
						<p className="about_text">
							I am Hanif a Junior Web Programmer from indonesia
						</p>
						<a href="/" className="btn">Download CV</a>
					</div>

					<div className="about_skill grid">
						<div className="skill_data">
							<div className="skill_title">
								<h3 className="skill_name">HTML & CSS</h3>
								<span className="skill_num">90%</span>
							</div>
							<div className="skill_bar">
								<span className="skill_persen persen_html"></span>
							</div>
						</div>

						<div className="skill_data">
							<div className="skill_title">
								<h3 className="skill_name">Bootstrap</h3>
								<span className="skill_num">80%</span>
							</div>
							<div className="skill_bar">
								<span className="skill_persen persen_bot"></span>
							</div>
						</div>

						<div className="skill_data">
							<div className="skill_title">
								<h3 className="skill_name">Javascript</h3>
								<span className="skill_num">70%</span>
							</div>
							<div className="skill_bar">
								<span className="skill_persen persen_js"></span>
							</div>
						</div>

						<div className="skill_data">
							<div className="skill_title">
								<h3 className="skill_name">React Js</h3>
								<span className="skill_num">75%</span>
							</div>
							<div className="skill_bar">
								<span className="skill_persen persen_react"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<AboutBox/>
		</section>
	)
}

export default About;