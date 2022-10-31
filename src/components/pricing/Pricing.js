import React from 'react';
import "./pricing.css";
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-2.svg";
import Image3 from "../../assets/price-3.svg";

function Pricing (){
	return(
		<section className="container section pricing">
			<h2 className="section_title">Pricing Plans</h2>
		
			<div className="grid pricing_container">
				<div className="pricing_item">
					<img src={Image1} alt="" className="pricing_img"/>
					<h3 className="pricing_plan">Basic</h3>
					<p className="pricing_title">A Simple option</p>
					<p className="pricing_support">Email Support</p>
					<h3 className="price">
						<em>$</em> 9 <span>Month</span>
					</h3>
					<a href="contact" className="btn">Get Started!</a>
				</div>

				<div className="best pricing_item ">
					<img src={Image2} alt="" className="pricing_img"/>
					<h3 className="pricing_plan">Economic</h3>
					<p className="pricing_title">A Low Price Option</p>
					<p className="pricing_support">Mon-Fri Support</p>
					<h3 className="price">
						<em>$</em> 7 <span>Month</span>
					</h3>
					<a href="contact" className="btn">Get Started!</a>
				</div>

				<div className="pricing_item">
					<img src={Image3} alt="" className="pricing_img"/>
					<h3 className="pricing_plan">Premium</h3>
					<p className="pricing_title">A High Quality Option</p>
					<p className="pricing_support">24/7 Support</p>
					<h3 className="price">
						<em>$</em> 10 <span>Month</span>
					</h3>
					<a href="contact" className="btn">Get Started!</a>
				</div>
			</div>
		</section>
	)
}

export default Pricing;