import * as React from "react";
import Forum from "../../stories/screens/Forum";
export interface Props {
	navigation: any,
}
export interface State {}
export default class ForumContainer extends React.Component<Props, State> {
	render() {
		return <Forum navigation={this.props.navigation} />;
	}
}