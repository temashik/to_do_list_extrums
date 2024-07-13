import { Typography } from "@mui/material";
import { useState } from "react";
import Slider from "react-slick";
import IdeaCard from "./ideaCard";
import { useSelector } from "react-redux";
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CurrentIdeas() {
	const [activeSlide, setActiveSlide] = useState(1);
	const ideas = useSelector((state) => state.ideasSlice.ideas);
	const ongoingIdeas = ideas.filter((idea) => idea.status === "Ongoing");
	const isLoading = useSelector((state) => state.ideasSlice.isLoading);
	const sliderSettings = {
		dots: true,
		infinite: ongoingIdeas.length > 1,
		className: "center",
		centerMode: true,
		centerPadding: 0,
		speed: 500,
		slidesToShow: ongoingIdeas.length > 3 ? 3 : ongoingIdeas.length,
		slidesToScroll: 1,
		beforeChange: (current, next) => {
			setActiveSlide(next + 1);
		},
		appendDots: (dots) => (
			<p>
				{activeSlide}/{ongoingIdeas.length}
			</p>
		),
	};
	return (
		<>
			<Typography variant="h4" align="center">
				Ideas in my list
			</Typography>
			{ongoingIdeas === null || ongoingIdeas.length < 1 ? (
				<p align="center">No current ideas</p>
			) : isLoading ? (
				<p align="center">Loading</p>
			) : (
				<div className="slide-container">
					<Slider {...sliderSettings}>
						{ongoingIdeas.map((idea, index) => {
							return (
								<IdeaCard
									idea={idea}
									activeSlide={activeSlide}
									index={index + 1}
									ideasLength={ongoingIdeas.length}
									key={idea.type + index}
								/>
							);
						})}
					</Slider>
				</div>
			)}
		</>
	);
}

export default CurrentIdeas;
