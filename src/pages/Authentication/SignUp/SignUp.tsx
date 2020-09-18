import { MaterialIcons as Icon } from "@expo/vector-icons"
import { yupResolver } from "@hookform/resolvers"
import { StatusBar } from "expo-status-bar"
import React, { FunctionComponent } from "react"
import { useForm } from "react-hook-form"
import { Dimensions } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"
import { divide } from "react-native-reanimated"
import { useScrollHandler } from "react-native-redash"
import * as Yup from "yup"

import { Button } from "../../../components"
import { AuthenticationNavigationProps } from "../../../routes/Authentication"

import { Box, Text, Theme, useTheme } from "../../../theme"
import Dot from "../components/Dot"
import EmailPassword from "./EmailPassword"
import FirstAndLastName from "./FirstAndLastName"

const { width } = Dimensions.get("window")

type signUpFormType = {
	firstName: string
	lastName: string
	email: string
	password: string
}

const signUpSchema = Yup.object().shape({
	firstName: Yup.string().trim().required(),
	lastName: Yup.string().trim().required(),
	email: Yup.string().email().trim().lowercase().required(),
	password: Yup.string().trim().min(8).required(),
})

interface SlideProps {
	label: string
	buttonLabel: string
	buttonBackgroundColor: keyof Theme["colors"]
	Form: FunctionComponent
}

const SignUp = ({ navigation }: AuthenticationNavigationProps<"SignUp">) => {
	const theme = useTheme()
	const { x } = useScrollHandler()

	const slides: SlideProps[] = [
		{
			label: "01. Who are you?",
			buttonLabel: "Next",
			buttonBackgroundColor: "primary",
			Form: FirstAndLastName,
		},
		{
			label: "02. Email and password",
			buttonLabel: "Register",
			buttonBackgroundColor: "secondary",
			Form: EmailPassword,
		},
	]

	const { handleSubmit, control, errors, formState } = useForm<
		signUpFormType
	>({
		resolver: yupResolver(signUpSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		criteriaMode: "all",
		mode: "onBlur",
	})

	return (
		<Box
			paddingHorizontal={"m"}
			flex={1}
			backgroundColor={"grayBackground"}
			style={{ paddingTop: theme.spacing.m * 2 }}
		>
			<StatusBar style={"auto"} />
			<Box style={{ marginHorizontal: -2 }}>
				<Box
					flexDirection={"row"}
					marginVertical={"xs"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<BorderlessButton onPress={() => navigation.goBack()}>
						<Icon
							name={"keyboard-backspace"}
							color={theme.colors.santaGray}
							size={30}
						/>
					</BorderlessButton>

					<Box flexDirection={"row"}>
						{slides.map((_, index) => (
							<Dot
								key={index}
								currentIndex={divide(x, width)}
								{...{ index }}
							/>
						))}
					</Box>
				</Box>
			</Box>

			<Box
				marginTop={"xl"}
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
						Create your free{"\n"}account
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
						Just fill in these details{"\n"}and you will be with us.
					</Text>
				</Box>
			</Box>

			<Box
				marginHorizontal={"m"}
				bottom={0}
				position={"absolute"}
				marginBottom={"xl"}
			>
				<Box marginBottom={"ms"}>
					<Text
						style={{
							fontFamily: "Poppins-Regular",
							fontWeight: "600",
							fontSize: 24,
							lineHeight: 26,
							color: theme.colors.martinique,
						}}
					>
						01. Who are you?
					</Text>
				</Box>

				<Box
					style={{
						borderWidth: 1,
						borderColor: theme.colors.athensGray,
						backgroundColor: theme.colors.almostWhite,
						width: width * 0.85,
						height: 64,
						borderTopLeftRadius: theme.borderRadii.ms,
						borderTopRightRadius: theme.borderRadii.ms,
					}}
				/>
				<Box
					style={{
						borderWidth: 1,
						borderColor: theme.colors.athensGray,
						backgroundColor: theme.colors.almostWhite,
						width: width * 0.85,
						height: 64,
						borderBottomLeftRadius: theme.borderRadii.ms,
						borderBottomRightRadius: theme.borderRadii.ms,
					}}
				/>

				<Box
					justifyContent="center"
					alignItems="center"
					marginVertical={"m"}
				>
					<Button
						label={"Next"}
						onPress={() => true}
						enabled={false}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default SignUp
