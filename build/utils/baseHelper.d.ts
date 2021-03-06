import { Base, Types } from ".";
/**
 * Request Helper
 */
export declare class BaseHelper implements Types.IBaseHelper {
    base: Base;
    requestType: number;
    response: string;
    status: number;
    addBaseReferences(base: Base, obj: any): void;
    addMethods(base: Base, data: any, graphType?: string): void;
    addProperties(base: any, data: any): void;
    updateDataCollection(obj: any, results: any): void;
    updateDataObject(isBatchRequest: boolean): void;
    updateMetadata(base: any, data: any): void;
}
