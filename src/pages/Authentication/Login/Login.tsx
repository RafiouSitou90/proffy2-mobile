import { Feather as Icon } from "@expo/vector-icons"
import { yupResolver } from "@hookform/resolvers"
import React, { useEffect, useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Dimensions, TextInput } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import * as Yup from "yup"

import {
	BorderlessTap,
	Button,
	FloatingLabelTextInput,
} from "../../../components"
import { AuthenticationNavigationProps } from "../../../routes/Authentication"
import { Box, Text, useTheme } from "../../../theme"
import Header from "../components/Header"

const { width } = Dimensions.get("window")

const loginSchema = Yup.object().shape({
	email: Yup.string().email().trim().lowercase().required(),
	password: Yup.string().trim().min(8).required(),
})

type loginFormType = {
	email: string
	password: string
	rememberMe: boolean
}

const Login = ({ navigation }: AuthenticationNavigationProps<"Login">) => {
	const theme = useTheme()

	const { handleSubmit, control, errors, formState } = useForm<loginFormType>(
		{
			resolver: yupResolver(loginSchema),
			defaultValues: {
				email: "",
				password: "",
				rememberMe: false,
			},
			criteriaMode: "all",
			mode: "onBlur",
		}
	)

	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [email, setEmail] = useState<string>("")
	const [rememberMe, setRememberMe] = useState<boolean>(false)
	const [isValidForm, setIsValidForm] = useState<boolean>(false)

	const emailInputRef = useRef<TextInput>(null)
	const passwordInputRef = useRef<TextInput>(null)

	const handleEmail = (text: string) => {
		setEmail(text.trim())
	}

	const enabled =
		Object.keys(formState.touched).length === 2 &&
		!Object.keys(errors).length

	useEffect(() => {
		enabled ? setIsValidForm(true) : setIsValidForm(false)
	}, [enabled])

	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<Box flex={1} backgroundColor="grayBackground">
			<KeyboardAwareScrollView>
				<Header />

				<Box
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					marginVertical="l"
					marginHorizontal="m"
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
							Login
						</Text>
					</Box>
					<Box>
						<BorderlessTap
							onPress={() => alert("Create an account")}
						>
							<Text
								style={{
									fontFamily: "Poppins-Regular",
									fontWeight: "normal",
									fontSize: 12,
									lineHeight: 24,
									color: theme.colors.primary,
									borderRadius: theme.borderRadii.s,
								}}
							>
								Create an account
							</Text>
						</BorderlessTap>
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
								error={
									errors.email && "The email must be valid"
								}
								onChangeText={(text) => {
									handleEmail(text.trim())
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
						defaultValue={email}
					/>
				</Box>
				<Box
					marginHorizontal="m"
					style={{
						borderWidth: 1,
						borderColor: theme.colors.athensGray,
						backgroundColor: theme.colors.almostWhite,
						width: width * 0.85,
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
									errors.password &&
									"The password must be valid"
								}
								onChangeText={(text) => {
									onChange(text.trim())
								}}
								secureTextEntry={showPassword}
								autoCompleteType="password"
								autoCapitalize="none"
								returnKeyType="go"
								returnKeyLabel="Go"
								onSubmitEditing={handleSubmit(onSubmit)}
								icon={
									<BorderlessTap
										onPress={() =>
											setShowPassword(
												(prevState) => !prevState
											)
										}
									>
										<Icon
											name={
												showPassword ? "eye-off" : "eye"
											}
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

				<Box
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					marginTop="ms"
					marginBottom="l"
					marginHorizontal="m"
				>
					<Controller
						control={control}
						render={({ onChange }) => (
							<BorderlessTap
								onPress={() => {
									setRememberMe((prevState) => !prevState)
									onChange(rememberMe)
								}}
							>
								<Box
									flexDirection="row"
									style={{
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Box
										marginRight="s"
										width={24}
										height={24}
										justifyContent="center"
										alignItems="center"
										borderRadius="ms"
										borderWidth={2}
										borderColor={
											rememberMe ? "secondary" : "primary"
										}
										backgroundColor={
											rememberMe ? "secondary" : "white"
										}
									>
										<Icon
											name="check"
											color={
												rememberMe
													? "white"
													: theme.colors.primary
											}
											size={18}
										/>
									</Box>
									<Text
										style={{
											fontFamily: "Poppins-Regular",
											fontWeight: "normal",
											fontSize: 12,
											lineHeight: 24,
											color: theme.colors.santaGray,
										}}
									>
										Remember me
									</Text>
								</Box>
							</BorderlessTap>
						)}
						name="rememberMe"
						rules={{ required: false }}
					/>

					<BorderlessTap
						onPress={() => navigation.navigate("ForgotPassword")}
					>
						<Text
							style={{
								fontFamily: "Poppins-Regular",
								fontWeight: "normal",
								fontSize: 12,
								lineHeight: 24,
								color: theme.colors.santaGray,
								borderRadius: theme.borderRadii.s,
								textAlign: "center",
							}}
						>
							Forgot password
						</Text>
					</BorderlessTap>
				</Box>

				<Box
					justifyContent="center"
					alignItems="center"
					marginBottom="m"
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

export default Login
