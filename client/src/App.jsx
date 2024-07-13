import { Container, Stack, Divider } from "@mui/material";
import FreshIdeas from "./components/freshIdeas";
import CurrentIdeas from "./components/currentIdeas";
import Achievements from "./components/achievements";
import CompletedChallanges from "./components/completedChallanges";
import ButtonsGroup from "./components/buttons";
import { getIdeas } from "./redux/slices/ideasSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
	const ideas = useSelector((state) => state.ideasSlice.ideas);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getIdeas());
	}, []);
	useEffect(() => {
		console.log("rerender");
	}, [ideas]);
	return (
		<>
			<Container maxWidth="md">
				<Stack direction="column" spacing={4}>
					<FreshIdeas />
					<Divider
						variant="fullWidth"
						sx={{
							borderStyle: "dashed",
							borderWidth: "1px",
							borderColor: "black",
						}}
					/>
					<CurrentIdeas />
					<Divider
						variant="fullWidth"
						sx={{
							borderStyle: "dashed",
							borderWidth: "1px",
							borderColor: "black",
						}}
					/>
					<Achievements />
					<Divider
						variant="fullWidth"
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
