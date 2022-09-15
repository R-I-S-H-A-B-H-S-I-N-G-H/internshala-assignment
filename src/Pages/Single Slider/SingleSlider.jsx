import React, { Component } from "react";
import "./SingleSlider.css";
import { v4 } from "uuid";
import dataset1, { dataset3 } from "../offlinedata/Offline";
import leftarrow from "../../assets/left-arrow.png";
import rightarrow from "../../assets/right-arrow.png";

class SingleSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			URL1: props.url,
			id: v4(),
			data1: [],
			title: props.title,
			second: props.second,
		};
	}
	componentDidMount() {
		console.log(this.state.id);
		this.getdata();
	}
	async getdata() {
		if (this.state.second) {
			var temp = dataset3["BAAHI_BY_XOMOY"];
			this.setState({ data1: temp });
		} else {
			var temp = dataset1["BAAHI_BY_XOMOY"];
			this.setState({ data1: temp });
		}
		var res1 = await fetch(this.state.URL1);
		res1 = await res1.json();

		// console.log(res["BAAHI_BY_XOMOY"]);
		res1 = res1["BAAHI_BY_XOMOY"];

		this.setState({ data1: res1 });

		// console.log(res1[0]);
		// console.log(res2);
		// console.log(res3);
	}
	scrollLeft() {
		var slider = document.getElementById(`${this.state.id}`);
		slider.scrollLeft = slider.scrollLeft - 600;
	}
	scrollRight() {
		var slider = document.getElementById(`${this.state.id}`);
		slider.scrollLeft = slider.scrollLeft + 600;
	}

	render() {
		return (
			<div className="home-wrapper">
				<div className="first-row-wrapper">
					<h1>{this.state.title}</h1>

					<div className="first-row" id={`${this.state.id}`}>
						<button
							className="btn-left"
							onClick={() => {
								this.scrollLeft();
							}}
						>
							<img src={leftarrow} />
						</button>
						{this.state.data1.map((ele) => {
							return (
								<div className="top-img-wrapper">
									<img
										src={this.state.second ? ele.artist_image : ele.imageLarge}
									/>
									<p>{this.state.second ? ele.artist_name : ele.mp3_artist}</p>
								</div>
							);
						})}

						<button
							className="btn-right"
							id="single-slider1"
							onClick={() => {
								this.scrollRight();
							}}
						>
							<img src={rightarrow} />
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default SingleSlider;
