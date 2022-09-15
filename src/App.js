import { useEffect, useState } from "react";
import "./App.css";
import DoubleSlider from "./Pages/Double Slider/DoubleSlider";
import SingleSlider from "./Pages/Single Slider/SingleSlider";
function App() {
	const [d1, setd1] = useState([]);
	const [d2, setd2] = useState([]);
	const [d3, setd3] = useState([]);

	async function getData() {
		var r1 = await fetch("https://paste-bin.glitch.me/1");
		var r2 = await fetch("https://paste-bin.glitch.me/2");
		var r3 = await fetch("https://paste-bin.glitch.me/3");
		r1 = await r1.json();
		r2 = await r2.json();
		r3 = await r3.json();
		r1 = r1["BAAHI_BY_XOMOY"];
		r2 = r2["BAAHI_BY_XOMOY"];
		r3 = r3["BAAHI_BY_XOMOY"];
		// console.log(r1);
		const res1 = [],
			res2 = [],
			res3 = [];
		// for (var ele in r1) {
		// 	console.log(ele);
		// 	res1.push({ img: ele.imageLarge, artist: ele.mp3_title });
		// }
		r1.forEach((ele) => {
			// console.log(ele);
			res1.push({ img: ele.imageLarge, artist: ele.mp3_title });
		});
		r2.forEach((ele) => {
			// console.log(ele);
			res2.push({ img: ele.imageLarge, artist: ele.mp3_title });
		});
		r3.forEach((ele) => {
			// console.log(ele);
			res2.push({ img: ele.artist_image, artist: ele.artist_name });
		});
		// for (var ele in r2)
		// 	res2.push({ img: ele.imageLarge, artist: ele.mp3_title });
		// for (var ele in r3)
		// 	res3.push({ img: ele.artist_image, artist: ele.artist_name });
		if (res1.length > 0) setd1(res1);
		if (res2.length > 0) setd2(res2);
		if (res3.length > 0) setd3(res3);
		console.log(res1);
	}
	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<SingleSlider
				title="Trending songs"
				url="https://paste-bin.glitch.me/1"
			/>
			<DoubleSlider title="Just Released" url="https://paste-bin.glitch.me/2" />
			<SingleSlider
				data={d3}
				title="Recommended Artist"
				url="https://paste-bin.glitch.me/3"
				second={true}
			/>
		</>
	);
}

export default App;
