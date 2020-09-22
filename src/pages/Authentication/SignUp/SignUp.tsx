import { MaterialIcons as Icon } from "@expo/vector-icons"
import { yupResolver } from "@hookform/resolvers"
import { StatusBar } from "expo-status-bar"
import React, { FunctionComponent, useRef, useState } from "react"
import { Control, useForm } from "react-hook-form"
import { FieldErrors } from "react-hook-form/dist/types/errors"
import { Dimensions } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"
import Animated, { divide } from "react-native-reanimated"
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

export interface SlideFormProps {
	control: Control
	errors: FieldErrors
}

interface SlideProps {
	label: string
	buttonLabel: string
	buttonBackgroundColor: keyof Theme["colors"]
	Form: FunctionComponent<SlideFormProps>
}

const SignUp = ({ navigation }: AuthenticationNavigationProps<"SignUp">) => {
	const theme = useTheme()
	const { scrollHandler, x } = useScrollHandler()
	const scroll = useRef<Animated.ScrollView>(null)

	const [isLast, setIsLast] = useState<boolean>(true)

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

	const scrollEnabled =
		(formState.touched.firstName &&
			formState.touched.lastName &&
			!errors.firstName &&
			!errors.lastName) ||
		false

	const onSubmit = (data: any) => {
		console.log(data)
	}

	const onPress = (index: number) => {
		const last = index === slides.length - 1
		setIsLast(last)

		if (last) {
			handleSubmit(onSubmit)
		} else {
			scroll.current?.getNode().scrollTo({
				x: width * (index + 1),
				animated: true,
			})
		}
	}

	const handleGoBack = () => {
		if (isLast) {
			navigation.goBack()
		} else {
			scroll.current?.getNode().scrollTo({
				x: width * -1,
				animated: true,
			})
			setIsLast(true)
		}
	}

	return (
		<Box
			paddingHorizontal={"m"}
			flex={1}
			backgroundColor={"grayBackground"}
			style={{ paddingTop: theme.spacing.m * 2 }}
		>
			<StatusBar style={"auto"} />
			<Box style={{ paddingHorizontal: -2 }}>
				<Box
					flexDirection={"row"}
					marginVertical={"xs"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<BorderlessButton onPress={handleGoBack}>
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

			<Animated.ScrollView
				ref={scroll}
				{...{ scrollEnabled }}
				horizontal
				snapToInterval={width}
				decelerationRate="fast"
				showsHorizontalScrollIndicator={false}
				bounces={false}
				{...scrollHandler}
			>
				{slides.map(
					(
						{ label, buttonLabel, buttonBackgroundColor, Form },
						index
					) => (
						<Box
							key={index}
							marginBottom={"xl"}
							justifyContent={"flex-end"}
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
									{label}
								</Text>
							</Box>

							<Form {...{ control, errors }} />

							<Box
								justifyContent="center"
								alignItems="center"
								marginVertical={"m"}
							>
								<Button
									label={buttonLabel}
									onPress={() => onPress(index)}
									enabled={true}
									color={buttonBackgroundColor}
								/>
							</Box>
						</Box>
					)
				)}
			</Animated.ScrollView>
		</Box>
	)
}

export default SignUp
