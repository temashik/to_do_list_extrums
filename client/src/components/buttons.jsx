import { ButtonGroup, Button } from "@mui/material";
import { storeIdeas } from "../axios";
import { getIdeas } from "../redux/slices/ideasSlice";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";

function ButtonsGroup() {
	const ideas = useSelector((state) => state.ideasSlice.ideas);
	const dispatch = useDispatch();
	return (
		<div className="button-group">
			<ButtonGroup
				className="button-group"
				variant="outlined"
				orientation="vertical"
				aria-label="Vertical button group"
			>
				<Button
					sx={{
						fontWeight: "bold",
					}}
					onClick={() => dispatch(getIdeas())}
				>
					Fetch data
				</Button>
				<Button
					sx={{
						fontWeight: "bold",
					}}
					onClick={() => storeIdeas(ideas)}
				>
					Store data
				</Button>
			</ButtonGroup>
		</div>
	);
}

export default ButtonsGroup;
