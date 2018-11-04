import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Left, Right, Footer } from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any;
	onLogin: Function;
	navigation: any;
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{"Login"}</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000" }}>Make it with love</Text>
						</View>
						<Image
							source={{ uri: "https://geekyants.com/images/logo-dark.png" }}
							style={{ width: 422 / 4, height: 86 / 4 }}
						/>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default Login;
