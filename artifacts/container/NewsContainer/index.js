import * as React from "react";
import { connect } from "react-redux";
import News from "../../stories/screens/News";
import datas from "./data";
import { fetchList } from "./actions";
class NewsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchList(datas);
    }
    render() {
        return React.createElement(News, { navigation: this.props.navigation, list: [1, 3, 4, 5, 6] });
    }
}
function bindAction(dispatch) {
    return {
        fetchList: url => dispatch(fetchList(url)),
    };
}
const mapStateToProps = state => ({
    data: state.homeReducer.list,
    isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(NewsContainer);
//# sourceMappingURL=index.js.map