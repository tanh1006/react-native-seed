import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}

class News extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent>
						<Icon
							active
							name="menu"
							onPress={() => this.props.navigation.navigate("DrawerOpen")}
						/>
						</Button>
					</Left>
					<Body>
						<Title>Bài mới</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Text>{"Creating Something Awesome . . ."}</Text>
				</Content>
			</Container>
		);
	}
}

export default News;