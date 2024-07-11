import {
	CardActionArea,
	Card,
	CardContent,
	Typography,
	Box,
	Divider,
} from "@mui/material";

function IdeaCard(props) {
	const card = (
		<CardActionArea>
			<CardContent>
				<Typography variant="h6">{props.title}</Typography>
				<Divider
					varian="fullWidth"
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
					{props.type}
				</Typography>
			</CardContent>
		</CardActionArea>
	);
	return (
		<Box sx={{ minWidth: 100 }}>
			<Card
				variant="elevation"
				sx={{ maxWidth: 200, textAlign: "center", textWrap: "pretty" }}
			>
				{card}
			</Card>
		</Box>
	);
}

export default IdeaCard;
