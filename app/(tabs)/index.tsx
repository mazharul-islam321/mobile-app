import BackButtonWithNotification from "@/components/BackButtonWithNotification";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	ScrollView,
} from "react-native";

import Exclamation from "@/assets/icons/Exclamation";
import PackageCard from "@/components/PackageCard";
import { useEffect, useState } from "react";

export default function HomeScreen() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://18.210.108.177:4003/api/packagelist"
				);
				const jsonData = await response.json();
				setData(jsonData);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	return (
		<View style={styles.container}>
			<BackButtonWithNotification />

			<Text style={styles.title}>Get FDR Package</Text>

			<TouchableOpacity style={styles.offer_text_container}>
				<View style={styles.exclam}>
					<Exclamation />
				</View>

				<Text style={styles.offer_text}>
					You are using{" "}
					<Text style={styles.sp_offer_text}>
						free version only for 30days
					</Text>
					. Get package and build community.
				</Text>
			</TouchableOpacity>

			<ScrollView>
				<View style={styles.card_view}>
					{data.length > 0 &&
						data.map((item: any, index) => (
							<PackageCard
								item={item}
								recommended={index === 1}
							/>
						))}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	card_view: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
	},
	container: {
		flex: 1,
		backgroundColor: "#000000",
		paddingTop: 50,
	},
	title: {
		color: "#FFFFFF",
		fontWeight: "600",
		fontSize: 22,
		marginLeft: 11,
		marginTop: 10,
	},
	offer_text_container: {
		height: 80,
		width: "95%",
		backgroundColor: "#0078BE",
		flexDirection: "row",
		alignSelf: "center",
		alignItems: "center",
		borderRadius: 10,
		marginTop: 20,
		marginBottom: 6,
		paddingHorizontal: 16,
	},
	exclam: {
		marginTop: -10,
	},
	offer_text: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "400",
		marginLeft: 6,
		lineHeight: 20,
	},
	sp_offer_text: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "600",
	},
});
