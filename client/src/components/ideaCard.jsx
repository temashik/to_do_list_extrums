import {
	CardActionArea,
	Card,
	CardContent,
	Typography,
	Box,
	Divider,
} from "@mui/material";
import { changeIdeaStatus } from "../redux/slices/ideasSlice";
import { useDispatch } from "react-redux";
import "../index.css";

function IdeaCard(props) {
	const dispatch = useDispatch();
	let paddingLeft =
		props.ideasLength >= 3
			? "15%"
			: props.ideasLength === 2
			? "25%"
			: "38%";
	let height =
		!props.activeSlide || !props.index || props.activeSlide === props.index
			? "100px"
			: "50px";
	const card = (
		<CardActionArea>
			<CardContent sx={{ height: height }}>
				<Typography variant="h6">
					{props.idea.title.length > 28
						? props.idea.title.slice(0, 27) + "..."
						: props.idea.title}
				</Typography>
				{!props.activeSlide ||
				!props.index ||
				props.activeSlide === props.index ? (
					<div className="footer">
						<Divider
							variant="fullWidth"
							sx={{
								borderStyle: "dashed",
								borderWidth: "1px",
								borderColor: "black",
							}}
						/>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							{props.idea.type}
						</Typography>
					</div>
				) : null}
			</CardContent>
		</CardActionArea>
	);
	return (
		<Box
			sx={{
				minWidth: 100,
				margin: "0 auto",
				paddingLeft: paddingLeft,
				textAlign: "center",
				position: "relative",
			}}
		>
			<Card
				variant="elevation"
				sx={{
					width: "200px",
					textAlign: "center",
					textWrap: "pretty",
					backgroundColor: "#e4c1f9",
				}}
				onClick={() => dispatch(changeIdeaStatus(props.idea))}
			>
				{card}
			</Card>
		</Box>
	);
}

export default IdeaCard;
