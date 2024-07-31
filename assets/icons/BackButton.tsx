import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BackButton = () => {
	return (
		<Svg
			width={9}
			height={15}
			viewBox="0 0 9 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M.531 8.603l6.08 6.08a.938.938 0 001.327-1.325l-5.421-5.42 5.42-5.421A.938.938 0 006.613 1.19l-6.08 6.08a.935.935 0 00-.274.666c0 .242.09.482.273.666z"
				fill="#fff"
			/>
		</Svg>
	);
};

export default BackButton;
