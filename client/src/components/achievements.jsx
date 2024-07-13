import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "../index.css";

function Achievements() {
	const achievements = useSelector((state) => state.ideasSlice.achievements);
	const isLoading = useSelector((state) => state.ideasSlice.isLoading);
	return (
		<div className="flex-container">
			{achievements === null ? (
				<p align="center">No achievements</p>
			) : isLoading ? (
				<p align="center">Loading</p>
			) : (
				Object.entries(achievements).map((achievement, index) => {
					return (
						<div key={achievement[0] + index}>
							<div key={index}>{achievement[1]}</div>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								textAlign="center"
								gutterBottom
							>
								{achievement[0]}
							</Typography>
						</div>
					);
				})
			)}
		</div>
	);
}

export default Achievements;
