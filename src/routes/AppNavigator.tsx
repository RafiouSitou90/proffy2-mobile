import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Home, Profile } from "../pages/Main"

import AuthenticationNavigator from "./Authentication"

export type AppRoutes = {
	Authentication: undefined
	Home: undefined
	Profile: undefined
}

const AppStack = createStackNavigator<AppRoutes>()

const AppNavigator = () => {
	return (
		<AppStack.Navigator headerMode="none">
			<AppStack.Screen
				name="Authentication"
				component={AuthenticationNavigator}
			/>
			<AppStack.Screen name="Home" component={Home} />
			<AppStack.Screen name="Profile" component={Profile} />
		</AppStack.Navigator>
	)
}

export default AppNavigator
