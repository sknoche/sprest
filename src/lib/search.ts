import { Types } from "../mapper"
import { Base, RequestType } from "../utils";
import { ISearch } from "./types";
import { ITargetInfo } from "../utils/types";

/**
 * Search
 */
export const Search: ISearch = ((url?, targetInfo?) => {
    let search = new Base(targetInfo) as any as Types.ISearch;

    // Default the properties
    search.targetInfo.defaultToWebFl = true;
    search.targetInfo.endpoint = "search";

    // See if the web url exists
    if (url) {
        // Set the settings
        search.targetInfo.url = url;
    }

    // Add the methods
    search.addMethods(search as any, { __metadata: { type: "search" } });

    /** The search query method */
    search.searchquery = (settings: Types.ComplexTypes.SearchRequest) => {
        // Execute the request
        return search.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: RequestType.GetReplace
        }, Search.getQuery(settings));
    }

    /** The search suggest method */
    search.suggest = (settings: Types.ComplexTypes.SearchSuggestion) => {
        // Execute the request
        return search.executeMethod("query", {
            argNames: ["query"],
            name: "suggest?[[query]]",
            requestType: RequestType.GetReplace
        }, Search.getQuery(settings));
    }

    // Return the search
    return search;
}) as any;

// Static method to compute the query
Search.getQuery = (parameters: Types.ComplexTypes.SearchRequest | Types.ComplexTypes.SearchSuggestion) => {
    let query = "";

    // Parse the parameters
    for (let key in parameters) {
        // Append the parameter to the query
        query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
    }

    // Return the query
    return [query];
}
