import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "../../stories/screens/Login";

const required = value => (value ? undefined : "Required");
const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const minLength8 = minLength(8);
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
const alphaNumeric = value => (value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined);

export interface Props {
	navigation: any;
	valid: boolean;
}
export interface State {}

class LoginForm extends React.Component<Props, State> {
	textInput: any;
	defaultEmail: "tuananh@gmail.com";
	defaultPassword: "12345678";

	renderInput({ input, meta: { touched, error } }) {
		return (
			<Item error={error && touched}>
				<Icon active name={input.name === "email" ? "person" : "unlock"} />
				<Input
					ref={c => (this.textInput = c)}
					placeholder={input.name === "email" ? "Email" : "Password" }
					value={input.name === "email" ? this.defaultEmail : this.defaultPassword }
					secureTextEntry={input.name === "password" ? true : false}
					{...input}
				/>
			</Item>
		);
	}

	login() {
		if (this.props.valid) {
			this.props.navigation.navigate("Drawer");
		} else {
			Toast.show({
				text: "Enter Valid Username & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}

	render() {
		const form = (
			<Form>
				<Field 
					name="email" 
					component={this.renderInput} 
					// validate={[email, required]} 
					value={this.defaultEmail}
					default={this.defaultEmail}
				/>
				<Field
					name="password"
					component={this.renderInput}
					value={this.defaultPassword}
					default={this.defaultEmail}
					// validate={[alphaNumeric, minLength8, maxLength15, required]}
				/>
			</Form>
		);
		return <Login loginForm={form} onLogin={() => this.login()} navigation={this.props.navigation} />;
	}
}
const LoginContainer = reduxForm({
	form: "login",
})(LoginForm);

export default LoginContainer;
