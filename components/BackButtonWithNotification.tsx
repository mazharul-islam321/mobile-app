import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "@/assets/icons/BackButton";
import Notification from "@/assets/icons/Notification";

const BackButtonWithNotification = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<BackButton />
			</TouchableOpacity>

			<TouchableOpacity>
				<Notification />
			</TouchableOpacity>
		</View>
	);
};

export default BackButtonWithNotification;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 11,
		paddingVertical: 10,
	},
});
