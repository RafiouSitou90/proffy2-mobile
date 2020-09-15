import { MaterialIcons as Icon } from "@expo/vector-icons"
import { yupResolver } from "@hookform/resolvers"
import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Dimensions } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import * as Yup from "yup"

import { Button, FloatingLabelTextInput } from "../../../components"
import { AuthenticationNavigationProps } from "../../../routes/Authentication"

import { Box, Text, useTheme } from "../../../theme"
import Header from "../components/Header"

type forgotPasswordFormType = {
	email: string
}

const forgotPasswordSchema = Yup.object().shape({
	email: Yup.string().email().trim().lowercase().required(),
})

const { width } = Dimensions.get("window")

const ForgotPassword = ({
	navigation,
}: AuthenticationNavigationProps<"ForgotPassword">) => {
	const theme = useTheme()

	const [email, setEmail] = useState<string>("")
	const [isValidForm, setIsValidForm] = useState<boolean>(false)

	const { handleSubmit, control, errors, formState } = useForm<
		forgotPasswordFormType
	>({
		resolver: yupResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
		criteriaMode: "all",
		mode: "onBlur",
	})

	const handleEmail = (text: string) => {
		setEmail(text.trim())
	}

	const enabled =
		Object.keys(formState.touched).length === 1 &&
		!Object.keys(errors).length

	useEffect(() => {
		enabled ? setIsValidForm(true) : setIsValidForm(false)
	}, [enabled])

	const onSubmit = (data: any) => {
		console.log(data)
		navigation.navigate("ResetPasswordSuccessfully")
	}

	return (
		<Box flex={1} backgroundColor="grayBackground">
			<KeyboardAwareScrollView>
				<Header />

				<Box marginVertical="l" marginHorizontal="m">
					<Box
						height={40}
						width={40}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<BorderlessButton onPress={() => navigation.goBack()}>
							<Icon
								name={"keyboard-backspace"}
								color={theme.colors.santaGray}
								size={30}
							/>
						</BorderlessButton>
					</Box>

					<Box
						marginTop={"l"}
						flexDirection={"column"}
						justifyContent={"space-between"}
						alignItems={"flex-start"}
					>
						<Box>
							<Text
								style={{
									fontFamily: "Poppins-Regular",
									fontWeight: "600",
									fontSize: 24,
									lineHeight: 34,
									color: theme.colors.martinique,
								}}
							>
								Forgot your password?
							</Text>
						</Box>
						<Box marginTop={"s"}>
							<Text
								style={{
									fontFamily: "Poppins-Regular",
									fontSize: 14,
									lineHeight: 24,
									color: theme.colors.martinique,
								}}
							>
								Do not worry, let's fix it
							</Text>
						</Box>
					</Box>
				</Box>

				<Box
					marginHorizontal="m"
					style={{
						borderWidth: 1,
						borderColor: theme.colors.athensGray,
						backgroundColor: theme.colors.almostWhite,
						width: width * 0.85,
						height: 64,
						borderRadius: theme.borderRadii.ms,
					}}
				>
					<Controller
						control={control}
						render={({ onChange, onBlur, value }) => (
							<FloatingLabelTextInput
								label="Email"
								isFocused={false}
								value={value}
								onBlur={onBlur}
								onChangeText={(text) => {
									handleEmail(text.trim())
									onChange(text.trim())
								}}
								keyboardType="email-address"
								autoCompleteType="email"
								autoCapitalize="none"
								returnKeyType="next"
								returnKeyLabel="Next"
								onSubmitEditing={handleSubmit(onSubmit)}
							/>
						)}
						name="email"
						rules={{ required: true }}
						defaultValue={email}
					/>
				</Box>

				<Box
					justifyContent="center"
					alignItems="center"
					marginVertical={"m"}
					marginHorizontal="m"
				>
					<Button
						label={"Enter"}
						onPress={handleSubmit(onSubmit)}
						enabled={isValidForm}
					/>
				</Box>
			</KeyboardAwareScrollView>
		</Box>
	)
}

export default ForgotPassword
