import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from "native-base";
import { Image, View } from "react-native";
import styles from "./styles";
class News extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon, { active: true, name: "menu", onPress: () => this.props.navigation.navigate("DrawerOpen") }))),
                React.createElement(Body, null,
                    React.createElement(Title, null, "C\u00E1c b\u00E0i vi\u1EBFt m\u1EDBi")),
                React.createElement(Right, null,
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon, { active: true, name: "log-in", onPress: () => this.props.navigation.navigate("Login") })),
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon, { active: true, name: "search", onPress: () => this.props.navigation.navigate("Login") })))),
            React.createElement(Content, null,
                React.createElement(List, null, this.props.list.map((item, i) => (React.createElement(ListItem, { style: styles.item, key: i, onPress: () => this.props.navigation.navigate("Post", {
                        name: { item }
                    }) },
                    React.createElement(View, { style: styles.itemHeader },
                        React.createElement(View, { style: styles.itemAvatar },
                            React.createElement(Image, { style: { width: 50, height: 50, borderRadius: 25 }, source: { uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/p40x40/32260818_1842940525751056_6312713214782078976_n.jpg?_nc_cat=103&_nc_ht=scontent.fhan2-1.fna&oh=66386ff61099c3d018d98ef65ab63c35&oe=5C6FF586' } })),
                        React.createElement(View, { style: styles.itemInfo },
                            React.createElement(Text, { style: styles.itemAuthor }, "Tu\u1EA5n Anh"),
                            React.createElement(Text, { style: styles.itemCreatedAt }, "H\u00F4m qua l\u00FAc 4:57"))),
                    React.createElement(View, { style: styles.itemContent },
                        React.createElement(Image, { style: styles.itemImage, source: { uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/c1.0.294.154/p296x100/44841600_6120333486471_4324684724476837888_n.png.jpg?_nc_cat=102&efg=eyJxZV9ncm91cHMiOlsibm9fc2FmZV9pbWFnZV9mb3JfYWRzX2ltYWdlIl19&_nc_ht=scontent.fhan2-1.fna&oh=dc23a35a48cc55bedd32f011a81c06d9&oe=5C80555E' } }),
                        React.createElement(View, { style: styles.itemTitle },
                            React.createElement(Text, { style: styles.itemTitleText }, "Android v\u00E0 Ios: Anh em th\u00EDch b\u00E0n ph\u00EDm \u1EA3o n\u00E0o nh\u1EA5t")),
                        React.createElement(View, { style: styles.itemDescription },
                            React.createElement(Text, null, "iOS 11 \u0111\u00E3 cung c\u1EA5p cho ng\u01B0\u1EDDi d\u00F9ng kh\u1EA3 n\u0103ng k\u00E9o v\u00E0 th\u1EA3 v\u0103n b\u1EA3n tr\u00EAn m\u00E1y t\u00EDnh b\u1EA3ng. Android c\u0169ng cho ph\u00E9p d\u1EC5 d\u00E0ng k\u00E9o v\u00E0 th\u1EA3 n\u1ED9i dung t\u1EEB \u1EE9ng d\u1EE5ng \u0111\u1EBFn \u1EE9ng d\u1EE5ng kh\u00E1c v\u00E0 b\u1EA1n c\u00F3 th\u1EC3 l\u00E0m \u0111i\u1EC1u \u0111\u00F3 tr\u00EAn \u0111i\u1EC7n tho\u1EA1i th\u00F4ng minh. T\u00EDnh n\u0103ng n\u00E0y \u0111\u00E3 \u0111\u01B0\u1EE3c \u0111\u01B0a l\u00EAn Android Nougat n\u00EAn \u0111\u1EC3 t\u1EDBi \u0111\u01B0\u1EE3c c\u00E1c smartphone kh\u00E1c th\u00EC c\u00F2n ph\u1EE5 thu\u1ED9c v\u00E0o nh\u1EEFng nh\u00E0 s\u1EA3n xu\u1EA5t khai phi\u00EAn b\u1EA3n c\u1EE7a Android."))),
                    React.createElement(View, { style: styles.itemFooter },
                        React.createElement(View, { style: { flex: 2, flexDirection: "row" } },
                            React.createElement(View, { style: styles.itemFooterIcon },
                                React.createElement(Icon, { style: { fontSize: 20, color: "grey" }, active: true, name: "log-in", onPress: () => this.props.navigation.navigate("Login") })),
                            React.createElement(Text, { style: { color: '#ddd' } }, "21")),
                        React.createElement(View, { style: { flex: 1, flexDirection: "row" } },
                            React.createElement(View, { style: styles.itemFooterIcon },
                                React.createElement(Icon, { style: { fontSize: 20, color: "grey" }, active: true, name: "log-in", onPress: () => this.props.navigation.navigate("Login") })),
                            React.createElement(Text, { style: { color: '#ddd' } }, "21")),
                        React.createElement(View, { style: { flex: 1, flexDirection: "row", justifyContent: "flex-end", alignContent: "flex-end", alignItems: "flex-end" } },
                            React.createElement(View, { style: styles.itemFooterIcon },
                                React.createElement(Icon, { style: { fontSize: 20, color: "grey" }, active: true, name: "log-in", onPress: () => this.props.navigation.navigate("Login") })),
                            React.createElement(Text, { style: { color: '#ddd' } }, "21"))))))))));
    }
}
export default News;
//# sourceMappingURL=index.js.map