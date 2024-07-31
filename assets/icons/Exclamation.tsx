import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Exclamation = () => {
	return (
		<Svg
			width={20}
			height={20}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M10 20c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10zm1.25-8.75a1.25 1.25 0 01-2.5 0V5a1.25 1.25 0 012.5 0v6.25zM10 13.73a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
				fill="#fff"
			/>
		</Svg>
	);
};

export default Exclamation;
