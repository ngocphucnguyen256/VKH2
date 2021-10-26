export default interface BaseReq {

    pageIndex?: number,
    pageSize?: number,
    sort?: 'asc' | 'desc',
    order?: string,
    search?: string,
    searchExact?: boolean

}