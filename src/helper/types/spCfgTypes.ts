/** The field types */
export type ISPCfgFieldType = {
    Boolean: number;
    Calculated: number;
    Choice: number;
    Currency: number;
    Date: number;
    Lookup: number;
    MMS: number;
    Note: number;
    Number: number;
    Text: number;
    Url: number;
    User: number;
}

/** The configuration types */
export type ISPCfgType = {
    Fields: number;
    ContentTypes: number;
    Lists: number;
    SiteUserCustomActions: number;
    WebParts: number;
    WebUserCustomActions: number;
}