import React from 'react';
import "./blog.css";
import Image3 from '../../assets/blog-1.svg'
function Blog (){
	return(
		<section id="blog" className="section container blog">
			<h2 className="section_title">Latest Post</h2>
			<div className="blogs grid">
				<div className="blog_card">
					<div className="blog_head">
						<a href="/"><span className="blog_category">Tutorial</span></a>
						<a href="/">
							<img className="blog_thumb" src={Image3} alt=""/>	
						</a>
					</div>
					<div className="blog_body">
						<h3 className="blog_title">Tes</h3>
						<span className="blog_date">07 February - Boby</span>
					</div>
				</div>

				<div className="blog_card">
					<div className="blog_head">
						<a href="/"><span className="blog_category">Tutorial</span></a>
						<a href="/">
							<img className="blog_thumb" src={Image3} alt=""/>	
						</a>
					</div>
					<div className="blog_body">
						<h3 className="blog_title">Tes</h3>
						<span className="blog_date">07 February - Boby</span>
					</div>
				</div>
				
				<div className="blog_card">
					<div className="blog_head">
						<a href="/"><span className="blog_category">Tutorial</span></a>
						<a href="/">
							<img className="blog_thumb" src={Image3} alt=""/>	
						</a>
					</div>
					<div className="blog_body">
						<h3 className="blog_title">Tes</h3>
						<span className="blog_date">07 February - Boby</span>
					</div>
				</div>
				
				
				
			</div>
		</section>
	)
}	

export default Blog;