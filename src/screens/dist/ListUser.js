"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var react_native_modal_1 = require("react-native-modal");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var react_redux_1 = require("react-redux");
var HeaderList_1 = require("../components/HeaderList");
var actions_1 = require("../state/actions");
var Styles_1 = require("../Styles");
var ListUser = function () {
    var _a = react_1.useState({
        show: false,
        id: ''
    }), showModal = _a[0], setShowModal = _a[1];
    var dispatch = react_redux_1.useDispatch();
    var selectIsOn = function (state) { return state; };
    var dataraw = react_redux_1.useSelector(selectIsOn);
    var data = dataraw.filter === 'STAR'
        ? dataraw.data.filter(function (i) { return i.status == true; })
        : dataraw.filter === 'NOSTAR'
            ? dataraw.data.filter(function (i) { return i.status == false; })
            : dataraw.data;
    react_1.useEffect(function () {
        var getApi = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, jsonData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('https://5f0c22f99d1e150016b37d39.mockapi.io/api/v1/users/')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        jsonData = _a.sent();
                        dispatch(actions_1.getApiToData(jsonData));
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        dispatch(actions_1.getApiToData([]));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        getApi();
    }, []);
    var navigation = native_1.useNavigation();
    function mardItem(id) {
        dispatch(actions_1.mardRow(id));
    }
    function deleItem(id) {
        setShowModal({ show: true, id: id });
        // dispatch(deleteRow(id));
    }
    var renderItem = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(Styles_1.ItemTable, { onPress: function () { return navigation.navigate('UserDetail', { data: item }); } },
            react_1["default"].createElement(react_native_elements_1.CheckBox, { containerStyle: { margin: 0, padding: 0 }, checked: item.factor_authentication, onPress: function () { return dispatch(actions_1.checkRow(String(item.id))); } }),
            react_1["default"].createElement(react_native_1.Text, null, item.username),
            react_1["default"].createElement(react_native_1.Text, { style: { width: 130 } }, item.name),
            react_1["default"].createElement(react_native_1.Text, null, item.balance),
            react_1["default"].createElement(Ionicons_1["default"], { onPress: function () { return mardItem(String(item.id)); }, name: item.status ? 'md-star' : 'md-star-outline', size: 24, color: "hotpink" }),
            react_1["default"].createElement(Ionicons_1["default"], { onPress: function () { return deleItem(String(item.id)); }, name: "md-trash", size: 24, color: "hotpink" })));
    };
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_modal_1["default"], { isVisible: showModal.show },
            react_1["default"].createElement(react_native_1.View, { style: Styles_1.styles.modal },
                react_1["default"].createElement(react_native_1.Text, null, "B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a h\u00E0ng n\u00E0y"),
                react_1["default"].createElement(react_native_1.View, { style: { flexDirection: 'row', justifyContent: 'space-between' } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                            dispatch(actions_1.deleteRow(showModal.id));
                            setShowModal({ show: false, id: '' });
                        } },
                        react_1["default"].createElement(react_native_1.Text, null, "X\u00F3a")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                            setShowModal({ show: false, id: '' });
                        } },
                        react_1["default"].createElement(react_native_1.Text, null, "Tho\u00E1t"))))),
        react_1["default"].createElement(HeaderList_1["default"], null),
        react_1["default"].createElement(react_native_1.FlatList, { data: data, renderItem: renderItem })));
};
exports["default"] = ListUser;
