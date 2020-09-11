import {
	createStackNavigator,
	// StackNavigationProp,
} from "@react-navigation/stack"
import React from "react"
import { OnBoarding } from "../pages"
import { assets as OnBoardingAssets } from "../pages/Authentication"
// import { CompositeNavigationProp, RouteProp } from "@react-navigation/native"

export type AuthenticationRoutes = {
	OnBoarding: undefined
}

// export interface AuthenticationNavigationProps<RouteName extends keyof AuthenticationRoutes> {
// 	navigation: CompositeNavigationProp<
// 		StackNavigationProp<AuthenticationRoutes, RouteName>,
// 		StackNavigationProp<HomeRoutes, "Landing">
// 	>
// 	route: RouteProp<AuthenticationRoutes, RouteName>
// }

export const assets = [...OnBoardingAssets]

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>()

const AuthenticationNavigator = () => {
	return (
		<AuthenticationStack.Navigator headerMode="none">
			<AuthenticationStack.Screen
				name="OnBoarding"
				component={OnBoarding}
			/>
		</AuthenticationStack.Navigator>
	)
}

export default AuthenticationNavigator
