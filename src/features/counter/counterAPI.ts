import axiosClient from "../../api/axiosClient";
import BaseReq from "../../models/base/BaseReq";
import BaseRes from "../../models/base/BaseRes";
import Student from "../../models/student/Student";


const studentApi = {
  getAll(params: BaseReq): Promise<BaseRes<Student>> {
    var url = "/students"
    return axiosClient.get(url, { params: params })
  },

  getBy(id: string): Promise<Student> {
    var url = `/students/${id}`
    return axiosClient.get(url)
  },
  add(params: Student): Promise<Student> {
    var url = "/students"
    return axiosClient.post(url, params)
  },

  update(params: Partial<Student>): Promise<Student> {
    var url = "/students/" + params.id
    return axiosClient.put(url, params)
  },

  remove(id: string): Promise<any> {
    var url = `/students/${id}`
    return axiosClient.delete(url)
  }

};
export default studentApi;