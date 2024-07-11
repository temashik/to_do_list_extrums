import { ButtonGroup, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";

function ButtonsGroup() {
	return (
		<ButtonGroup
			className="button-group"
			variant="outlined"
			orientation="vertical"
			aria-label="Vertical button group"
		>
			<Button>Fetch data</Button>
			<Button>New idea</Button>
		</ButtonGroup>
	);
}

export default ButtonsGroup;
