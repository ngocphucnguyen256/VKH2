export default interface BaseRes<T> {
    statusCode: number,
    message?: string,
    data?: T
}