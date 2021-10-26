export var PATH_IMAGE = "images"
export interface TestimonialsDTO {
    title: string,
    avatarURL: string,
    name: string,
    position: string
}
var item1 = {
    title:
        "2018 - đến nay : CEO - Công ty Cổ phần Truyền Thông Đa Phương Tiện Pháp Luật Sao" +
        "\n2020 - đến nay : Founder & CEO New Star TV" +
        "\n2021 - đến nay : Founder & CEO - Công ty Cổ phần Công Nghệ & Kỹ Thuật STECH",
    avatarURL: PATH_IMAGE + "/board/nguyen_tan_hung_anh.JPG",
    name: "NGUYỄN TẤN HÙNG ANH",
    position: "Chủ tịch hội đồng quản trị"
}
var item2 = {
    title: "2013 - 2018 : Tốt nghiệp Tiến Sĩ Khoa Học Máy Tính - Đại học NUS" +
        "\n2018 - đến nay : Giảng Viên & Chuyên viên nghiên cứu - Đại học NUS" +
        "\n2021 - đến nay : Viện Trưởng - IRICS",
    avatarURL: PATH_IMAGE + "/board/dang_khanh_hung.JPG",
    name: "ĐẶNG KHÁNH HƯNG",
    position: "Viện trưởng"
}

var item3 = {
    title:
        "2016 - 2020 : Trưởng ban Dự Án CNTT - Ngân hàng Shinhan Bank" +
        "\n2021 - đến nay : CTO - Công ty Công ty Cổ phần Công Nghệ & Kỹ Thuật STECH" +
        "\n2021 - đến nay : Phó Viện Trưởng & Trưởng Ban Nghiên Cứu - IRICS",
    avatarURL: PATH_IMAGE + "/board/le_xuan_khanh.JPG",
    name: "LÊ XUÂN KHÁNH",
    position: "Phó Viện Trưởng - Trưởng Ban Nghiên Cứu"
}

var item4 = {
    title: "2013 - 2016 : Chuyên viên CNTT - Công ty Tân Nhật Quang" +
        "\n2016 - 2020 : Chuyên viên CNTT - Công ty Misolar" +
        "\n2021 - đến nay : Trưởng Ban Đào Tạo - IRICS",
    avatarURL: PATH_IMAGE + "/board/pham_phi_hieu.JPG",
    name: "PHẠM PHI HIỆU",
    position: "Trưởng ban đào tạo"
}
var item4 = {
    title: "2018 - 2019 : Giám Đốc Hành Chính - Uniland" +
        "\n2019 - đến nay : Trưởng phòng Truyền Thông - Sao Pháp Luật - Báo Pháp Luật VN " +
        "\n2021 - đến nay : Chánh Văn Phòng - IRICS",
    avatarURL: PATH_IMAGE + "/board/le_ngo_nguyen_anh.JPG",
    name: "LÊ NGÔ NGUYÊN ANH",
    position: "Chánh văn phòng"
}

var item5 = {
    title: "2019 - 2020 : Chuyên viên tư vấn - Công ty BĐS Trần Anh" +
        "\n2020- đến nay : Phóng viên Báo Pháp Luật VN" +
        "\n2021 - đến nay : Trưởng ban Tư Vấn",
    avatarURL: PATH_IMAGE + "/board/le_tien_dung.JPG",
    name: "LÊ TIẾN DŨNG",
    position: "Trưởng ban tư vấn"
}

var slideList: TestimonialsDTO[] = [item1, item2, item3, item4, item5]


export default slideList;