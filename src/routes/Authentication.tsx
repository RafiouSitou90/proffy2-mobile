import {
	createStackNavigator,
	StackNavigationProp,
} from "@react-navigation/stack"
import React from "react"
import { Login, OnBoarding } from "../pages"
import { OnBoardingAssets } from "../pages/Authentication"
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native"

export type AuthenticationRoutes = {
	OnBoarding: undefined
	Login: undefined
}

export interface AuthenticationNavigationProps<
	RouteName extends keyof AuthenticationRoutes
> {
	navigation: CompositeNavigationProp<
		StackNavigationProp<AuthenticationRoutes, RouteName>,
		StackNavigationProp<HomeRoutes, "Home">
	>
	route: RouteProp<AuthenticationRoutes, RouteName>
}

export type HomeRoutes = {
	Home: undefined
}

export const assets = [...OnBoardingAssets]

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>()

const AuthenticationNavigator = () => {
	return (
		<AuthenticationStack.Navigator headerMode="none">
			<AuthenticationStack.Screen
				name="OnBoarding"
				component={OnBoarding}
			/>
			<AuthenticationStack.Screen name="Login" component={Login} />
		</AuthenticationStack.Navigator>
	)
}

export default AuthenticationNavigator
