import { useState } from "react";
import { Typography } from "@mui/material";
import IdeaCard from "./ideaCard";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FreshIdeas() {
	const freshIdeas = useSelector((state) => state.freshIdeas.freshIdeas);
	const dispatch = useDispatch();
	const sliderSettings = {
		dots: false,
		infinite: true,
		className: "center",
		centerMode: true,
		centerPadding: "60px",
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	return (
		<>
			<Typography variant="h4" align="center">
				Choose fresh ideas to do
			</Typography>
			<Slider {...sliderSettings}>
				<IdeaCard idea={"do 10 pushups"} category={"sport"} />
				<IdeaCard
					idea={'watch "50 days in Mariupol"'}
					category={"culture"}
				/>
				<IdeaCard idea={"learn about React"} category={"study"} />
				<IdeaCard
					idea={"complete daily commisions in Genshin Impact"}
					category={"recreational"}
				/>
			</Slider>
		</>
	);
}

export default FreshIdeas;
