import React from "react";
import Settings from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };

it("renders correctly", () => {
	const tree = renderer.create(<Settings navigation={navigation} />).toJSON();
	expect(tree).toMatchSnapshot();
});
