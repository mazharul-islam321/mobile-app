import { View, StyleSheet, Text } from "react-native";

const PairText = ({ left_text, right_text }: any) => {
	return (
		<View style={styles.text}>
			<Text style={styles.left_side_text}>{left_text} : </Text>
			<Text style={styles.right_side_text}>{right_text}</Text>
		</View>
	);
};

export default PairText;

const styles = StyleSheet.create({
	text: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 6,
		flexWrap: "wrap",
	},
	left_side_text: {
		color: "#FFFFFF",
		fontSize: 10,
		fontWeight: "700",
	},
	right_side_text: {
		color: "#FFFFFF",
		fontSize: 10,
		fontWeight: "500",
	},
});
