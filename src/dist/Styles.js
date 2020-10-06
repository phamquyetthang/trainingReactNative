"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Filter = exports.ActionBar = exports.ItemTable = exports.styles = void 0;
var react_native_1 = require("react-native");
var native_1 = require("styled-components/native");
exports.styles = react_native_1.StyleSheet.create({
    loginForm: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        paddingTop: 50,
        padding: 16,
        backgroundColor: 'white'
    },
    text1: {
        alignSelf: 'center',
        margin: 24,
        fontSize: 24,
        fontWeight: '700'
    },
    button1: {
        width: '100%',
        backgroundColor: 'violet',
        padding: 12,
        alignItems: 'center',
        borderRadius: 8
    },
    avtl: {
        alignSelf: 'center',
        width: 230,
        height: 230,
        borderRadius: 115,
        marginTop: 30,
        backgroundColor: 'pink'
    },
    modal: {
        width: 200,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 8,
        alignSelf: 'center',
        padding: 12,
        justifyContent: 'space-between'
    }
});
exports.ItemTable = native_1["default"].TouchableOpacity(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 12px;\n  margin: 8px;\n  background-color: #bff4bb;\n"], ["\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 12px;\n  margin: 8px;\n  background-color: #bff4bb;\n"])));
exports.ActionBar = native_1["default"].View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 12px;\n  margin: 8px;\n  background-color: #bff4bb;\n"], ["\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 12px;\n  margin: 8px;\n  background-color: #bff4bb;\n"])));
exports.Filter = native_1["default"].TouchableOpacity(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 22;\n  left: 18px;\n  bottom: 32px;\n  padding: 8px;\n  background-color: beige;\n  border-radius: 32px;\n"], ["\n  position: absolute;\n  z-index: 22;\n  left: 18px;\n  bottom: 32px;\n  padding: 8px;\n  background-color: beige;\n  border-radius: 32px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
