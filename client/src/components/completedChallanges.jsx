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

function createData(id, title, type, when) {
	const relativeTime = moment(when).fromNow();
	if (title.length > 45) {
		const slicedString = title.slice(0, 45) + "...";
		return { id, title: slicedString, type, when: relativeTime };
	} else {
		return { id, title, type, when: relativeTime };
	}
}

function CompletedChallanges() {
	const rows = [
		createData(1, "Start new React project", "Education", Date.now()),
		createData(2, "Prepare Quas", "Existence", 1720653016763),
		createData(
			2,
			"quas Quas quas quas quas quas quas quas quas quas",
			"Existence",
			1720653016763
		),
	];
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
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
		</TableContainer>
	);
}

export default CompletedChallanges;
