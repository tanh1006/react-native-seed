import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
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
                    React.createElement(Title, null, "B\u00E0i m\u1EDBi")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(Text, null, "Creating Something Awesome . . ."))));
    }
}
export default News;
//# sourceMappingURL=index.js.map