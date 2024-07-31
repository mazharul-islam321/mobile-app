import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PairText from "./PairText";

const PackageCard = ({ item, recommended }: any) => {
	return (
		<LinearGradient
			start={[0, 1]}
			colors={["#3D3D3D", "#00457C"]}
			style={styles.card}
		>
			{recommended && (
				<View style={styles.recommendedCard}>
					<Text style={styles.recommendedCardText}>Recommended</Text>
				</View>
			)}

			<Text style={styles.package_text}>{item.Name}</Text>
			<Text style={styles.price_text}>
				${item.PriceStart} TO $
				{item.PriceEnd === 0 ? "above" : item.PriceEnd}
			</Text>

			<TouchableOpacity style={styles.select_button}>
				<Text style={styles.select_text}>Select</Text>
			</TouchableOpacity>

			<View style={styles.pair_text_container}>
				<PairText left_text="Profile" right_text="4% to 7%  monthly" />
				<PairText left_text="Maturity" right_text="1 year or 2 years" />
				<PairText
					left_text="Bonus"
					right_text={`${item.Bonus} tokens`}
				/>
				<PairText
					left_text="Maturity bonus"
					right_text={`${item.MaturityBonus}% after maturity`}
				/>
			</View>
		</LinearGradient>
	);
};

export default PackageCard;

const styles = StyleSheet.create({
	card: {
		width: "45%",
		height: 237,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
	},
	recommendedCard: {
		width: "100%",
		height: 23,
		backgroundColor: "#0078BE",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		top: 0,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	recommendedCardText: {
		color: "#FFFFFF",
		fontSize: 10,
		fontWeight: "400",
		textAlign: "center",
	},
	package_text: {
		color: "#DDDDDD",
		fontSize: 12,
		fontWeight: "400",
		marginBottom: 6,
	},
	price_text: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "600",
	},
	select_button: {
		width: 141,
		height: 25,
		borderRadius: 12.5,
		backgroundColor: "#0078BE",
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 8,
	},
	select_text: {
		color: "#FFFFFF",
		fontSize: 10,
		fontWeight: "600",
	},
	pair_text_container: {
		width: "80%",
		alignItems: "flex-start",
	},
});
