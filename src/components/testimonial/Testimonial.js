import React from 'react';
import "./testimonial.css";
import Datareview from './Datareview';
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

function Testimonial (){
	return (

		<section className="section container testimonial">
			<h2 className="section_title">Testimonial</h2>
			
			<Swiper className="testimonials_container grid"
			 modules={[Pagination]}
		     spaceBetween={30}
		     slidesPerView={1}
		     pagination={{ clickable: true}}
			>
				{Datareview.map(({id,image, title, subtitle,comment})=>{
					return(
						<SwiperSlide className="testimonial_item">
					
							<div className="thumb">
								<img src={image} alt=""/>
							</div>
							<h3 className="testimonial_title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<p className="comment">{comment}</p>
						
						</SwiperSlide>
					)
				})}

			</Swiper>
		</section>	
	)
};

export default Testimonial;