import { IBase } from "../../utils/types";
import { IMenuState } from ".";
/**
 * Navigation Methods
 */
export interface INavigationServiceRESTMethods {
    /**
     * Method to get the menu state.
     * @param menuNodeKey - The key of the start node. If no key is provided, the root node is used.
     * @param depth - The depth of the dump. Default is 10.
     * @param customProperties - (Optionally implemented by a site map data provider.) A comma-separated list of custom properties to return. Use the "\" character to escape a comma separator within a property.
     * @param mapProviderName - Specifies which provider on the site is selected. If no SiteMapProvider used, "CurrentNavSiteMapProviderNoEncode" is used.
     */
    getMenuState(menuNodeKey?: number, depth?: number, customProperties?: string, mapProviderName?: string): IBase<IMenuState>;
}
/**
 * Navigation Properties
 */
export interface INavigationServiceRESTProps {
}
/**
 * Navigation Queryable Properties
 */
export interface INavigationServiceRESTQueryProps {
    MenuState(): IBase<IMenuState>;
    MenuState(key: number): IBase<IMenuState>;
}
/**
 * Navigation
 */
export interface INavigationServiceREST extends INavigationServiceRESTMethods, INavigationServiceRESTQueryProps, IBase<INavigationServiceREST> {
}
