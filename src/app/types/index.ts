export interface ILogData {
    key: string;
    host: string,
    protocol: string,
    path: string,
    params: Object,
    query: Object,
    stage:string,
    method:string,
    requestTime:string,
    requestTimeEpoch:string,
    clientAdress:string,
}

export interface ILogItem {
    key: string,
    data: Object
}