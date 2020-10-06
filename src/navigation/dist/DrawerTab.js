"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.DrawerContent = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var drawer_1 = require("@react-navigation/drawer");
var react_native_paper_1 = require("react-native-paper");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var BottomTab_1 = require("./BottomTab");
function DrawerContent(props) {
    return (react_1["default"].createElement(drawer_1.DrawerContentScrollView, __assign({}, props),
        react_1["default"].createElement(react_native_1.View, { style: styles.drawerContent },
            react_1["default"].createElement(react_native_1.View, { style: styles.userInfoSection },
                react_1["default"].createElement(react_native_paper_1.Avatar.Image, { source: {
                        uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg'
                    }, size: 50 }),
                react_1["default"].createElement(react_native_paper_1.Title, { style: styles.title }, "Dawid Urbaniak"),
                react_1["default"].createElement(react_native_paper_1.Caption, { style: styles.caption }, "@trensik"),
                react_1["default"].createElement(react_native_1.View, { style: styles.row },
                    react_1["default"].createElement(react_native_1.View, { style: styles.section },
                        react_1["default"].createElement(react_native_paper_1.Paragraph, { style: [styles.paragraph, styles.caption] }, "202"),
                        react_1["default"].createElement(react_native_paper_1.Caption, { style: styles.caption }, "Following")),
                    react_1["default"].createElement(react_native_1.View, { style: styles.section },
                        react_1["default"].createElement(react_native_paper_1.Paragraph, { style: [styles.paragraph, styles.caption] }, "159"),
                        react_1["default"].createElement(react_native_paper_1.Caption, { style: styles.caption }, "Followers")))),
            react_1["default"].createElement(react_native_paper_1.Drawer.Section, { style: styles.drawerSection },
                react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                        var color = _a.color, size = _a.size;
                        return (react_1["default"].createElement(Ionicons_1["default"], { name: "md-person-outline", color: color, size: size }));
                    }, label: "Profile", onPress: function () { } }),
                react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                        var color = _a.color, size = _a.size;
                        return (react_1["default"].createElement(Ionicons_1["default"], { name: "reorder-three", color: color, size: size }));
                    }, label: "Preferences", onPress: function () { } }),
                react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                        var color = _a.color, size = _a.size;
                        return (react_1["default"].createElement(Ionicons_1["default"], { name: "bookmark-outline", color: color, size: size }));
                    }, label: "Bookmarks", onPress: function () { } })),
            react_1["default"].createElement(react_native_paper_1.Drawer.Section, { title: "Preferences" },
                react_1["default"].createElement(react_native_paper_1.TouchableRipple, { onPress: function () { } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.preference },
                        react_1["default"].createElement(react_native_paper_1.Text, null, "Dark Theme"),
                        react_1["default"].createElement(react_native_1.View, { pointerEvents: "none" },
                            react_1["default"].createElement(react_native_paper_1.Switch, { value: false })))),
                react_1["default"].createElement(react_native_paper_1.TouchableRipple, { onPress: function () { } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.preference },
                        react_1["default"].createElement(react_native_paper_1.Text, null, "RTL"),
                        react_1["default"].createElement(react_native_1.View, { pointerEvents: "none" },
                            react_1["default"].createElement(react_native_paper_1.Switch, { value: false }))))))));
}
exports.DrawerContent = DrawerContent;
var styles = react_native_1.StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});
var CreateDrawer = drawer_1.createDrawerNavigator();
var DrawerTab = function () {
    return (react_1["default"].createElement(CreateDrawer.Navigator, { drawerContent: function () { return react_1["default"].createElement(DrawerContent, null); } },
        react_1["default"].createElement(CreateDrawer.Screen, { name: "Home", component: BottomTab_1["default"] })));
};
function HomeSample() {
    return react_1["default"].createElement(react_native_paper_1.Text, null, "HOme");
}
exports["default"] = DrawerTab;
