import * as React from "react";
import Promotion from "../../stories/screens/Promotion";
export interface Props {
	navigation: any,
}
export interface State {}
export default class PromotionContainer extends React.Component<Props, State> {
	render() {
		return <Promotion navigation={this.props.navigation} />;
	}
}