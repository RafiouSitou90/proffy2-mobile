import { CompositeNavigationProp, RouteProp } from "@react-navigation/native"
import {
	createStackNavigator,
	StackNavigationProp,
} from "@react-navigation/stack"
import React from "react"

import {
	ForgotPassword,
	Login,
	OnBoarding,
	ResetPasswordSuccessfully,
	SignUp,
	SignUpSuccessfully,
} from "../pages"
import { OnBoardingAssets } from "../pages/Authentication"

export type AuthenticationRoutes = {
	OnBoarding: undefined
	Login: undefined
	ForgotPassword: undefined
	ResetPasswordSuccessfully: undefined
	SignUp: undefined
	SignUpSuccessfully: undefined
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
			<AuthenticationStack.Screen
				name="ForgotPassword"
				component={ForgotPassword}
			/>
			<AuthenticationStack.Screen
				name="ResetPasswordSuccessfully"
				component={ResetPasswordSuccessfully}
			/>
			<AuthenticationStack.Screen name="SignUp" component={SignUp} />
			<AuthenticationStack.Screen
				name="SignUpSuccessfully"
				component={SignUpSuccessfully}
			/>
		</AuthenticationStack.Navigator>
	)
}

export default AuthenticationNavigator
