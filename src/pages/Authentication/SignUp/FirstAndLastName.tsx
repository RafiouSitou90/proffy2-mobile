import React, { useRef } from "react"
import { Controller } from "react-hook-form"
import { Dimensions, TextInput } from "react-native"

import { FloatingLabelTextInput } from "../../../components"
import { Box, useTheme } from "../../../theme"
import { SlideFormProps } from "./SignUp"

const { width } = Dimensions.get("window")

const FirstAndLastName = ({ errors, control }: SlideFormProps) => {
	const theme = useTheme()

	const firstNameInputRef = useRef<TextInput>(null)
	const lastNameInputRef = useRef<TextInput>(null)

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
							ref={firstNameInputRef}
							label="First name"
							isFocused={false}
							value={value}
							onBlur={onBlur}
							error={
								errors.email && "The first name must be valid"
							}
							onChangeText={(text) => {
								onChange(text.trim())
							}}
							autoCapitalize="words"
							returnKeyType="next"
							returnKeyLabel="Next"
							onSubmitEditing={() =>
								lastNameInputRef.current?.focus()
							}
						/>
					)}
					name="firstName"
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
							ref={lastNameInputRef}
							label="Last name"
							isFocused={false}
							value={value}
							onBlur={onBlur}
							error={
								errors.email && "The last name must be valid"
							}
							onChangeText={(text) => {
								onChange(text.trim())
							}}
							autoCompleteType="email"
							autoCapitalize="words"
							returnKeyType="next"
							returnKeyLabel="Next"
							onSubmitEditing={() =>
								lastNameInputRef.current?.focus()
							}
						/>
					)}
					name="lastName"
					rules={{ required: true }}
				/>
			</Box>
		</Box>
	)
}

export default FirstAndLastName
