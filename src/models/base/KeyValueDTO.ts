export interface KeyValueDTO {
    key?: string,
    value?: string
}

export interface KeyValueMultiLevelDTO extends KeyValueDTO {
    child?: KeyValueDTO[],
    isExpand?: boolean
}