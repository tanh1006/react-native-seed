import * as React from "react";
import News from "../../stories/screens/News";
export interface Props {
	navigation: any,
}
export interface State {}

export default class NewsContainer extends React.Component<Props, State> {
	render() {
		return <News navigation={this.props.navigation} />;
	}
}