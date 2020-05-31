import { Platform } from "react-native";

const constants = {
    IS_ENV_DEVELOPMENT: _DEV_,
    IS_ANDROID: Platform.OS = "android",
    IS_IOS: Platform.OS = "ios",
    IS_DEBUG_MODE_ENABLED: Boolean(window.navigator.userAgeent)
};
export default constants;