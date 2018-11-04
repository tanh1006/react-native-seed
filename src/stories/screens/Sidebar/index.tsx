import * as React from "react";
import { Text, Container, List, ListItem, Content, Icon  } from "native-base";
import { NavigationActions } from "react-navigation";

const routes = [
	{
		route: "Login",
		caption: "Đăng nhập",
		icon: "log-in",
	},
	{
		route: "Home",
		caption: "Trang chủ",
		icon: "home",
	},
	{
		route: "News",
		caption: "Bài mới",
		icon: "archive"
	},
	{
		route: "Forum",
		caption: "Diễn đàn",
		icon: "folder"
	},
	{
		route: "Promotion",
		caption: "Khuyến mãi",
		icon: "archive"
	},
	{
		route: "Settings",
		caption: "Thiết lập",
		icon: "settings"
	},
];

export interface Props {
	navigation: any;
}
export interface State {}

// const resetAction = NavigationActions.reset({
// 	index: 0,
// 	actions: [NavigationActions.navigate({ routeName: "Login" })],
// });

export default class Sidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content>
					<List
						style={{ marginTop: 40 }}
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										this.props.navigation.navigate(data.route);
									}}
								>
									<Icon name={data.icon} style={{
										fontSize: 20,
										marginRight: 20
									}}></Icon>
									<Text>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}