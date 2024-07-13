import { Typography } from "@mui/material";
import IdeaCard from "./ideaCard";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FreshIdeas() {
	const ideas = useSelector((state) => state.ideasSlice.ideas);
	const freshIdeas = ideas.filter((idea) => idea.status === "Fresh");
	const isLoading = useSelector((state) => state.ideasSlice.isLoading);
	const sliderSettings = {
		dots: false,
		infinite: freshIdeas.length > 1,
		className: "center",
		centerMode: true,
		centerPadding: 0,
		speed: 500,
		slidesToShow: freshIdeas.length > 3 ? 3 : freshIdeas.length,
		slidesToScroll: 1,
		arrows: false,
	};
	useEffect(() => {
		console.log("fresh", sliderSettings);
		console.log(freshIdeas.length);
	}, [ideas]);
	return (
		<>
			<Typography variant="h4" align="center">
				Choose fresh ideas to do
			</Typography>
			{freshIdeas === null || freshIdeas.length < 1 ? (
				<p align="center">No fresh ideas</p>
			) : isLoading ? (
				<p align="center">Loading</p>
			) : (
				<div className="slide-container">
					<Slider {...sliderSettings}>
						{freshIdeas.map((idea, index) => {
							return (
								<IdeaCard
									idea={idea}
									ideasLength={freshIdeas.length}
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

export default FreshIdeas;
