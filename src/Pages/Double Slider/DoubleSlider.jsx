import React, { Component } from "react";
import "./DoubleSlider.css";
import { dataset2 } from "../offlinedata/Offline";
import leftarrow from "../../assets/left-arrow.png";
import rightarrow from "../../assets/right-arrow.png";

class DoubleSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			URL1: props.url,

			data1: [],
		};
	}
	componentDidMount() {
		console.log(dataset2);
		this.getdata();
	}
	async getdata() {
		//until the data is being loaded
		var temp = dataset2["BAAHI_BY_XOMOY"];
		this.setState({ data1: temp });

		// here the data is loaded an dummy data
		// is replaced
		var res1 = await fetch(this.state.URL1);
		res1 = await res1.json();

		// console.log(res["BAAHI_BY_XOMOY"]);
		res1 = res1["BAAHI_BY_XOMOY"];

		this.setState({ data1: res1 });

		console.log(res1[0]);
		console.log(res1.length);
	}
	scrollLeft() {
		var slider = document.getElementById("slider-row1");
		var slider1 = document.getElementById("slider-row2");
		slider.scrollLeft = slider.scrollLeft - 600;
		slider1.scrollLeft = slider.scrollLeft - 600;
	}
	scrollRight() {
		var slider = document.getElementById("slider-row1");
		var slider1 = document.getElementById("slider-row2");
		slider.scrollLeft = slider.scrollLeft + 600;
		slider1.scrollLeft = slider.scrollLeft + 600;
	}

	render() {
		return (
			<div className="double-row-wrapper">
				<h1 className="second-row-title">Just Released</h1>

				<div className="double-slider-area" id="double-slider2">
					<button
						className="btn-left2"
						onClick={() => {
							this.scrollLeft();
						}}
					>
						<img src={leftarrow} />
					</button>
					<div className="slider-row" id="slider-row1">
						{this.state.data1.map((ele, index) => {
							if (index % 2 == 1) {
								return (
									<div className="second-img-wrapper">
										<img src={ele.imageLarge} />
										<p>{ele.mp3_artist}</p>
									</div>
								);
							}
						})}
					</div>
					<div className="slider-row" id="slider-row2">
						{this.state.data1.map((ele, index) => {
							if (index % 2 == 0) {
								return (
									<div className="second-img-wrapper">
										<img src={ele.imageLarge} />
										<p>{ele.mp3_artist}</p>
									</div>
								);
							}
						})}
					</div>

					<button
						className="btn-right2"
						id="double-slider2"
						onClick={() => {
							this.scrollRight();
						}}
					>
						<img src={rightarrow} />
					</button>
				</div>
			</div>
		);
	}
}
export default DoubleSlider;
