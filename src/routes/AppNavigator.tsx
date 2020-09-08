import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import AuthenticationNavigator from "./Authentication"

export type AppRoutes = {
	Authentication: undefined
}

const AppStack = createStackNavigator<AppRoutes>()

const AppNavigator = () => {
	return (
		<AppStack.Navigator headerMode="none">
			<AppStack.Screen
				name="Authentication"
				component={AuthenticationNavigator}
			/>
		</AppStack.Navigator>
	)
}

export default AppNavigator
