import React from "react"
import { AuthenticationNavigationProps } from "../../../routes/Authentication"
import Success from "../components/Success"

const ResetPasswordSuccessfully = ({
	navigation,
}: AuthenticationNavigationProps<"ResetPasswordSuccessfully">) => {
	return (
		<Success
			title={"Reset password email sent!"}
			description={
				"Good, now just check the email that was sent to you to reset your password and enjoy the studies."
			}
			buttonLabel={"Back to login"}
			onPress={() => navigation.navigate("Login")}
		/>
	)
}

export default ResetPasswordSuccessfully
