import * as React from "react";
import { Text, Container, List, ListItem, Content, Icon } from "native-base";
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
// const resetAction = NavigationActions.reset({
// 	index: 0,
// 	actions: [NavigationActions.navigate({ routeName: "Login" })],
// });
export default class Sidebar extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Content, null,
                React.createElement(List, { style: { marginTop: 40 }, dataArray: routes, renderRow: data => {
                        return (React.createElement(ListItem, { button: true, onPress: () => {
                                this.props.navigation.navigate(data.route);
                            } },
                            React.createElement(Icon, { name: data.icon, style: {
                                    fontSize: 20,
                                    marginRight: 20
                                } }),
                            React.createElement(Text, null, data.caption)));
                    } }))));
    }
}
//# sourceMappingURL=index.js.map