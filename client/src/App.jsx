import { Container, Stack, Divider } from "@mui/material";
import FreshIdeas from "./components/freshIdeas";
import CurrentIdeas from "./components/currentIdeas";
import Achievements from "./components/achievements";
import CompletedChallanges from "./components/completedChallanges";
import ButtonsGroup from "./components/buttons";

function App() {
	return (
		<>
			<Container maxWidth="md">
				<Stack direction="column" spacing={4}>
					<FreshIdeas />
					<Divider
						varian="fullWidth"
						sx={{
							borderStyle: "dashed",
							borderWidth: "1px",
							borderColor: "black",
						}}
					/>
					<CurrentIdeas />
					<Divider
						varian="fullWidth"
						sx={{
							borderStyle: "dashed",
							borderWidth: "1px",
							borderColor: "black",
						}}
					/>
					<Achievements
						data={[
							{ score: 1, category: "Recreational" },
							{ score: 4, category: "Education" },
							{ score: 0, category: "Sport" },
							{ score: 2, category: "Social" },
							{ score: 2, category: "Social" },
						]}
					/>
					<Divider
						varian="fullWidth"
						sx={{
							borderStyle: "dashed",
							borderWidth: "1px",
							borderColor: "black",
						}}
					/>
					<CompletedChallanges />
				</Stack>
			</Container>
			<ButtonsGroup />
		</>
	);
}

export default App;
