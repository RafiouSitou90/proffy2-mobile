import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "../pages/Main"

import AuthenticationNavigator from "./Authentication"

export type AppRoutes = {
	Authentication: undefined
	Home: undefined
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
		</AppStack.Navigator>
	)
}

export default AppNavigator
