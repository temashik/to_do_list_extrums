import { Typography } from "@mui/material";
import { useState } from "react";
import Slider from "react-slick";
import IdeaCard from "./ideaCard";
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CurrentIdeas() {
	const [activeSlide, setActiveSlide] = useState(1);
	const sliderSettings = {
		dots: true,
		infinite: true,
		className: "center",
		centerMode: true,
		centerPadding: "60px",
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		beforeChange: (current, next) => {
			setActiveSlide(next + 1);
		},
		appendDots: (dots) => <p>{activeSlide}/4</p>,
	};
	return (
		<>
			<Typography variant="h4" align="center">
				Ideas in my list
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

export default CurrentIdeas;
