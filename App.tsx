import { StatusBar } from "expo-status-bar"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { assets as authenticationAssets } from "./src/routes/Authentication"

import { LoadAssets } from "./src/components"
import { AppNavigator } from "./src/routes"
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

const assets = [...authenticationAssets]

const App = () => {
	return (
		<ThemeProvider>
			<LoadAssets {...{ fonts, assets }}>
				<SafeAreaProvider>
					<AppNavigator />
					<StatusBar style="light" />
				</SafeAreaProvider>
			</LoadAssets>
		</ThemeProvider>
	)
}

export default App
