import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ddd",
    },
    row: {
        flex: 1,
        alignItems: "center",
    },
    mt: {
        marginTop: 18,
    },
    item: {
        margin: 15,
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    itemHeader: {
        flexDirection: "row",
        flex: 1
    },
    itemAvatar: {
        flex: 1,
        borderRadius: 25
    },
    itemInfo: {
        flex: 4,
    },
    itemAuthor: {
        alignSelf: "flex-start",
        color: "black"
    },
    itemCreatedAt: {
        alignSelf: "flex-start",
        color: "gray"
    },
    itemContent: {
        marginTop: 15,
        flex: 5
    },
    itemImage: {
        height: 200,
        width: 300,
    },
    itemTitle: {
        marginTop: 20,
    },
    itemTitleText: {
        fontWeight: "bold",
        fontSize: 18,
    },
    itemDescription: {
        marginTop: 20,
    },
    itemFooter: {
        flex: 1,
        height: 40,
        marginTop: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    itemFooterIcon: {
        padding: 10,
        width: 40,
        borderRadius: 10,
        backgroundColor: '#ddd',
        marginRight: 10
    },
    itemFooterColumn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flex: 2,
        flexDirection: "row"
    }
});
export default styles;
//# sourceMappingURL=styles.js.map