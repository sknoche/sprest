import {
    IBase,
    TargetInfoSettings
} from ".";

/**
 * Entity Data
 */
export interface EntityData {
    /** Department. */
    Department: string;

    /** EMail */
    Email: string;

    /** */
    IsAltSecIdPresent: boolean;

    /** Mobile Phone */
    MobilePhone: string;

    /** Object ID */
    ObjectId: string;

    /** Title */
    Title: string;
}

/**
 * Client People Picker Query Parameters
 */
export interface PeoplePickerQuery {
    /** True to allow the email address. */
    AllowEmailAddresses?: boolean;

    /** True to allow multiple entities.  */
    AllowMultipleEntities?: boolean;

    /** True to allow all url zones. */
    AllUrlZones?: boolean;

    /** True to enable claim providers. */
    EnabledClaimProviders?: boolean;

    /** True to force claims. */
    ForceClaims?: boolean;

    /** Maximum entity suggestions. */
    MaximumEntitySuggestions: number;

    /** The principal source. */
    PrincipalSource?: number;

    /** The principal type. */
    PrincipalType?: number;

    /** The query string. This value must be >= 3 characters. */
    QueryString?: string;

    /** Required flag. */
    Required?: boolean;

    /** The SharePoint group id. */
    SharePointGroupID?: number;

    /** The url zone. */
    UrlZone?: string;

    /** Url zone specified flag. */
    UrlZoneSpecified?: boolean;

    /** The web. */
    Web?: any;

    /** The web application id. */
    WebApplicationID?: any;
}

/**
 * People Picker User
 */
export interface PeoplePickerUser {
    /** Description */
    Description: string;

    /** Display Text */
    DisplayText: string;

    /** The user entity data. */
    EntityData: EntityData;

    /** Entity Type */
    EntityType: string;

    /** Flag to determine if the search user is resolved. */
    IsResolved: boolean;

    /** The search value. */
    Key: string;

    /** An array of un-resolved user entities. */
    MultipleMatches: Array<EntityData>;

    /** Provider Display Name */
    ProviderDisplayName: string;

    /** Provider Name */
    ProviderName: string;
}

/**
 * Client People Picker
 */
export interface IPeoplePicker extends IBase {
    /**
     * Constructor
     * @param settings - The search settings.
     */
    new(settings?:TargetInfoSettings): IPeoplePicker;

    /**
     * Methods
     */

    /** Method to resolve users.
     * @param query - The people picker query.
    */
    clientPeoplePickerResolveUser(query:PeoplePickerQuery): IPeoplePickerResolveUser;

    /** Method to search for users.
     * @param query - The people picker query.
    */
    clientPeoplePickerSearchUser(query:PeoplePickerQuery): IPeoplePickerSearchUser;
}

/**
 * People Picker Resolve User
 */
export interface IPeoplePickerResolveUser extends IBase {
    // The client people picker resolve user results
    ClientPeoplePickerResolveUser: Array<PeoplePickerUser>;
}

/**
 * People Picker Search User
 */
export interface IPeoplePickerSearchUser extends IBase {
    // The client people picker search user results
    ClientPeoplePickerSearchUser: Array<PeoplePickerUser>;
}