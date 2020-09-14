import { Feather as Icon } from "@expo/vector-icons"
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { Dimensions, TextInput } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { yupResolver } from "@hookform/resolvers"
import * as Yup from "yup"

import { BorderlessTap, FloatingLabelTextInput } from "../../../components"
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

const Login = () => {
	const theme = useTheme()

	const { handleSubmit } = useForm<loginFormType>({
		resolver: yupResolver(loginSchema),
	})

	const [showPassword, setShowPassword] = useState<boolean>(true)
	const [email, setEmail] = useState<string>()
	const [password, setPassword] = useState<string>()
	const [rememberMe, setRememberMe] = useState<boolean>(false)

	const emailInputRef = useRef<TextInput>(null)
	const passwordInputRef = useRef<TextInput>(null)

	const handleEmail = (text: string) => {
		setEmail(text.trim())
	}

	const handlePassword = (text: string) => {
		setPassword(text.trim())
	}

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
					<FloatingLabelTextInput
						ref={emailInputRef}
						label="Email"
						isFocused={false}
						value={email}
						onChangeText={(text) => handleEmail(text)}
						keyboardType="email-address"
						autoCompleteType="email"
						autoCapitalize="none"
						returnKeyType="next"
						returnKeyLabel="Next"
						onSubmitEditing={() =>
							passwordInputRef.current?.focus()
						}
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
					<FloatingLabelTextInput
						ref={passwordInputRef}
						label="Password"
						isFocused={false}
						value={password}
						onChangeText={(text) => handlePassword(text)}
						secureTextEntry={showPassword}
						autoCompleteType="password"
						autoCapitalize="none"
						returnKeyType="go"
						returnKeyLabel="Go"
						onSubmitEditing={() => onSubmit(handleSubmit)}
						icon={
							<BorderlessTap
								onPress={() =>
									setShowPassword((prevState) => !prevState)
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
				</Box>

				<Box
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					marginTop="ms"
					marginBottom="l"
					marginHorizontal="m"
				>
					<BorderlessTap
						onPress={() => setRememberMe((prevState) => !prevState)}
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

					<BorderlessTap onPress={() => alert("Forgot password")}>
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
					<RectButton
						onPress={() => onSubmit(handleSubmit)}
						style={{
							width: width * 0.85,
							height: 56,
							borderRadius: theme.borderRadii.ms,
							backgroundColor:
								email && password
									? theme.colors.secondary
									: theme.colors.mischka,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								fontFamily: "Archivo-Regular",
								fontWeight: "600",
								fontSize: 16,
								lineHeight: 26,
								textAlign: "center",
								color:
									email && password
										? "white"
										: theme.colors.santaGray,
							}}
						>
							Enter
						</Text>
					</RectButton>
				</Box>
			</KeyboardAwareScrollView>
		</Box>
	)
}

export default Login
