import React from "react"
import { AuthenticationNavigationProps } from "../../../routes/Authentication"
import Success from "../components/Success"

const SignUpSuccessfully = ({
	navigation,
}: AuthenticationNavigationProps<"ResetPasswordSuccessfully">) => {
	return (
		<Success
			title={"Register successfully"}
			description={"You are now part of \n the Proffy platform"}
			buttonLabel={"Login"}
			onPress={() => navigation.navigate("Login")}
		/>
	)
}

export default SignUpSuccessfully
