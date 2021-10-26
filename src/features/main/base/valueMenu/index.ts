import { translate } from "../../../../i18n";
import { KeyValueDTO, KeyValueMultiLevelDTO } from "../../../../models/base/KeyValueDTO";

export const MENU_HOME: KeyValueDTO[] = [
    { key: "Lời chào của viện trưởng", value: translate("Lời chào của viện trưởng") },
    { key: "Tầm nhìn và sứ mênh", value: translate("Tầm nhìn và sứ mệnh") },
    { key: "Chức năng và Nhiệm vụ", value: translate("Chức năng và Nhiệm vụ") },
    { key: "Ban Điều Hành", value: translate("Ban Điều Hành") }
]

export const MENU_COURSES: KeyValueDTO[] = [
    { key: "Kỹ thuật phần mềm", value: translate("Kỹ thuật phần mềm") },
    { key: "Hệ thống thông tin", value: translate("Hệ thống thông tin") },
    { key: "Trí tuệ nhân tạo", value: translate("Trí tuệ nhân tạo") },
    { key: "Internet vạn vật", value: translate("Internet vạn vật") },
    { key: "An toàn thông tin", value: translate("An toàn thông tin") },
]

export const MENU_PARENT: KeyValueMultiLevelDTO[] = [
    { key: "Home", value: translate("Home"), child: MENU_HOME },
    { key: "Courses", value: translate("Courses"), child: MENU_COURSES },
    { key: "Blog", value: translate("Blog") },
    { key: "About us", value: translate("About us") },
    { key: "Contact", value: translate("Contact") },
]