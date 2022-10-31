import React, { useState } from 'react';
import "./portfolio.css";
import Data from './Data'
function Portfolio (){

	const [items, setItems] = useState(Data);
	
	const filterItem = (categoryItem) => {
		const updatedItems = Data.filter((curElem) => {
			return curElem.category === categoryItem
		});

		setItems(updatedItems)
	}

	return(
		<section className="section container grid" id="work">
			<h2 className="section_title">Recent Works</h2>
			<div className="work_filters">
				<span className="work_item" onClick={() => setItems(Data)}>All</span>
				<span className="work_item" onClick={() => filterItem("Vanila")}>Vanila</span>
				<span className="work_item" onClick={() => filterItem("Bootstrap")}>Bootstrap</span>
				<span className="work_item" onClick={() => filterItem("React")}>React Js</span>
			</div>

			<div className="work_container grid">
				{items.map((elem) => {
					const{id, image, title, category} = elem;
					return (
						<div className="work_card" key={id}>
							<div className="work__thumbnail">
								<img src={image} alt="" className="work_gambar"/>
								<div className="work_mask"></div> 
							</div>
							<span className="work_category">{category}</span>
							<h3 className="work_title">{title}</h3>
							<a className="work_button" href="/">
								<i className="icon-link work_button-icon"></i>
							</a>
						</div>
					)
				})}
			</div>
		</section>
		)
}

export default Portfolio;