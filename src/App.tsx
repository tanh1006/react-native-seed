import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import Sidebar from "./container/SidebarContainer";
import Post from "./container/PostContainer";
import Promotion from "./container/PromotionContainer";
import Settings from "./container/SettingsContainer";
import Forum from "./container/ForumContainer";
import News from "./container/NewsContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		contentComponent: (props: any) => <Sidebar {...props} />,
	}
);

const NewsDrawer = DrawerNavigator(
	{
		News: { screen: News},
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		contentComponent: (props: any) => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		Drawer: { screen: Drawer },
		NewsDrawer: { screen: NewsDrawer },
		Post: { screen: Post },
		Settings: { screen : Settings},
		Forum: { screen: Forum },
		Promotion: { screen : Promotion}
	},
	{
		initialRouteName: "Drawer",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);