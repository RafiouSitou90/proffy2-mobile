import { Feather as Icon } from "@expo/vector-icons"
import React, { useRef, useState } from "react"
import { Controller } from "react-hook-form"
import { Dimensions, TextInput } from "react-native"

import { BorderlessTap, FloatingLabelTextInput } from "../../../components"
import { Box, useTheme } from "../../../theme"
import { SlideFormProps } from "./SignUp"

const { width } = Dimensions.get("window")

const EmailPassword = ({ errors, control }: SlideFormProps) => {
	const theme = useTheme()

	const [showPassword, setShowPassword] = useState<boolean>(true)

	const emailInputRef = useRef<TextInput>(null)
	const passwordInputRef = useRef<TextInput>(null)

	return (
		<Box
			style={{
				width: width * 0.85,
			}}
		>
			<Box
				style={{
					borderWidth: 1,
					borderColor: theme.colors.athensGray,
					backgroundColor: theme.colors.almostWhite,
					height: 64,
					borderTopLeftRadius: theme.borderRadii.ms,
					borderTopRightRadius: theme.borderRadii.ms,
				}}
			>
				<Controller
					control={control}
					render={({ onChange, onBlur, value }) => (
						<FloatingLabelTextInput
							ref={emailInputRef}
							label="Email"
							isFocused={false}
							value={value}
							onBlur={onBlur}
							error={errors.email && "The email must be valid"}
							onChangeText={(text) => {
								onChange(text.trim())
							}}
							keyboardType="email-address"
							autoCompleteType="email"
							autoCapitalize="none"
							returnKeyType="next"
							returnKeyLabel="Next"
							onSubmitEditing={() =>
								passwordInputRef.current?.focus()
							}
						/>
					)}
					name="email"
					rules={{ required: true }}
				/>
			</Box>

			<Box
				style={{
					borderWidth: 1,
					borderColor: theme.colors.athensGray,
					backgroundColor: theme.colors.almostWhite,
					height: 64,
					borderBottomLeftRadius: theme.borderRadii.ms,
					borderBottomRightRadius: theme.borderRadii.ms,
				}}
			>
				<Controller
					control={control}
					render={({ onChange, onBlur, value }) => (
						<FloatingLabelTextInput
							ref={passwordInputRef}
							label="Password"
							isFocused={false}
							value={value}
							onBlur={onBlur}
							error={
								errors.password && "The password must be valid"
							}
							onChangeText={(text) => {
								onChange(text.trim())
							}}
							secureTextEntry={showPassword}
							autoCompleteType="password"
							autoCapitalize="none"
							returnKeyType="go"
							returnKeyLabel="Go"
							icon={
								<BorderlessTap
									onPress={() =>
										setShowPassword(
											(prevState) => !prevState
										)
									}
								>
									<Icon
										name={showPassword ? "eye" : "eye-off"}
										size={24}
										color={theme.colors.primary}
									/>
								</BorderlessTap>
							}
						/>
					)}
					name="password"
					rules={{ required: true }}
					defaultValue={""}
				/>
			</Box>
		</Box>
	)
}

export default EmailPassword
