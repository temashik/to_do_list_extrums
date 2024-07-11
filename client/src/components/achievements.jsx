import { Typography } from "@mui/material";
import "../index.css";

function Achievements(props) {
	return (
		<div className="flex-container">
			{props.data.map((prop, index) => (
				<div key={index + "item"}>
					<div key={index}>{prop.score}</div>
					<Typography
						sx={{ fontSize: 14 }}
						color="text.secondary"
						textAlign="center"
						gutterBottom
					>
						{prop.category}
					</Typography>
				</div>
			))}
		</div>
	);
}

export default Achievements;
