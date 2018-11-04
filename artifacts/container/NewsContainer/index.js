import * as React from "react";
import News from "../../stories/screens/News";
export default class NewsContainer extends React.Component {
    render() {
        return React.createElement(News, { navigation: this.props.navigation });
    }
}
//# sourceMappingURL=index.js.map