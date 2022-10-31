import React from 'react';
import "./services.css";
import Gambar1 from '../../assets/service-1.svg'
import Gambar2 from '../../assets/service-2.svg'
import Gambar3 from '../../assets/service-3.svg'
function Services (){
	return(
		<section className="section container grid" id="services">
			<h2 className="section_title">Services</h2>
			<div className="service_container grid">
				<div className="ser_container">
					<img src={Gambar1} alt=""/>					
					<h2 className="ser_title">UI/UX Design</h2>
					<span className="ser_isi">Isi dari Kotak a111 adalah sebagai berikut</span>
				</div>
				<div className="ser_container">
					<img src={Gambar2} alt=""/>					
					<h2 className="ser_title">Web Development</h2>
					<span className="ser_isi">Isi dari Kotak 111 adalah sebagai berikut</span>
				</div>
				<div className="ser_container">
					<img src={Gambar3} alt=""/>
					<h2 className="ser_title">Database</h2>
					<span className="ser_isi">Isi dari Kotak 111 adalah sebagai berikut</span>
				</div>
			</div>
		</section>
	);
};

export default Services;