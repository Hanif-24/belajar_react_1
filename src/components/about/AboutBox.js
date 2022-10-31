const AboutBox = () => {
	return(
		<div className="about_boxes grid">
			<div className="about_box">
				<i className='about_icon icon-fire'></i>
				<div>
					<h3 className="about_title">0</h3>
					<span className="about_sub">Project Completed</span>
				</div>
			</div>

			<div className="about_box">
				<i className='about_icon icon-cup'></i>
				<div>
					<h3 className="about_title">1020</h3>
					<span className="about_sub">Cup Of Tea</span>
				</div>
			</div>
			<div className="about_box">
				<i className='about_icon icon-people'></i>
				<div>
					<h3 className="about_title">420</h3>
					<span className="about_sub">Satisfied</span>
				</div>
			</div>
			<div className="about_box">
				<i className='about_icon icon-badge'></i>
				<div>
					<h3 className="about_title">12</h3>
					<span className="about_sub">Certificate</span>
				</div>
			</div>
		</div>
		
		)
}

export default AboutBox;