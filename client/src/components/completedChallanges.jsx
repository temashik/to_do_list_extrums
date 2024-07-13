import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";

function createData(idea) {
	const relativeTime = moment(idea.when).fromNow();
	if (idea.title.length > 45) {
		const slicedString = idea.title.slice(0, 45) + "...";
		return {
			id: idea.id,
			title: slicedString,
			type: idea.type,
			when: relativeTime,
		};
	} else {
		return {
			id: idea.id,
			title: idea.title,
			type: idea.type,
			when: relativeTime,
		};
	}
}

function CompletedChallanges() {
	const ideas = useSelector((state) => state.ideasSlice.ideas);
	const finishedIdeas = ideas.filter((idea) => idea.status === "Finished");
	const isLoading = useSelector((state) => state.ideasSlice.isLoading);
	const rows = finishedIdeas.map((idea) => {
		return createData(idea);
	});
	return (
		<TableContainer component={Paper}>
			{finishedIdeas === null ||
			finishedIdeas.length < 1 ? null : isLoading ? (
				<p>Loading</p>
			) : (
				<Table
					sx={{
						minWidth: 650,
						backgroundColor: "#e4c1f9",
						borderColor: "black",
					}}
					aria-label="simple table"
				>
					<TableHead>
						<TableRow>
							<TableCell>id</TableCell>
							<TableCell>Title</TableCell>
							<TableCell align="right">Type</TableCell>
							<TableCell align="right">When</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.id}
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
							>
								<TableCell component="th" scope="row">
									{row.id}
								</TableCell>
								<TableCell component="th" scope="row">
									{row.title}
								</TableCell>
								<TableCell align="right">{row.type}</TableCell>
								<TableCell align="right">{row.when}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</TableContainer>
	);
}

export default CompletedChallanges;
