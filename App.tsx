import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { LoadAssets } from "./src/components"
import { ThemeProvider } from "./src/theme"

const fonts = {
	"Archivo-Bold": require("./assets/fonts/Archivo-Bold.ttf"),
	"Archivo-Medium": require("./assets/fonts/Archivo-Medium.ttf"),
	"Archivo-Regular": require("./assets/fonts/Archivo-Regular.ttf"),
	"Archivo-SemiBold": require("./assets/fonts/Archivo-SemiBold.ttf"),
	"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
	"Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
	"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
	"Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
}

const App = () => {
	return (
		<ThemeProvider>
			<LoadAssets {...{ fonts }}>
				<SafeAreaProvider>
					<View style={styles.container}>
						<Text>
							Open up App.tsx to start working on your app!
						</Text>
						<StatusBar style="auto" />
					</View>
				</SafeAreaProvider>
			</LoadAssets>
		</ThemeProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})

export default App
