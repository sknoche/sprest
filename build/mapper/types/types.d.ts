import { IUser } from "./user";
/**
 * App Tiles
 */
export interface IAppTiles {
    AppId: string;
    AppPrincipalId: string;
    AppSource: number;
    AppStatus: number;
    AppType: number;
    AssetId: string;
    BaseTemplate: number;
    ChildCount: number;
    ContentMarket: string;
    CustomSettingsUrl: string;
    Description: string;
    IsCorporateCatalogSite: boolean;
    LastModified: string;
    LastModifiedDate: string;
    ProductId: string;
    Target: string;
    Thumbnail: string;
    Title: string;
    Version: number;
}
/**
 * Base Permissions
 */
export interface IBasePermissions {
    High: number;
    Low: number;
}
/**
 * Contains Confidential Information
 */
export interface IContainsConfidentialInfo {
    ContainsConfidentialInfo: boolean;
    ContainsConfidentialInfoLearnMoreUrl: string;
    ExternalSharingTipsEnabled: boolean;
    ExternalSharingTipsInfoLearnMoreUrl: string;
}
/**
 * Context Information
 */
export interface IContextInfo {
    FormDigestTimeoutSeconds: number;
    FormDigestValue: string;
    LibraryVersion: string;
    SiteFullUrl: string;
    SupportedSchemaVersions: IResults<string>;
    WebFullUrl: string;
}
/**
 * Entity Data
 */
export interface IEntityData {
    /** Account Name */
    AccountName?: string;
    /** Department. */
    Department?: string;
    /** EMail */
    Email?: string;
    /** */
    IsAltSecIdPresent?: boolean;
    /** Mobile Phone */
    MobilePhone?: string;
    /** Object ID */
    ObjectId?: string;
    /** Principal Type */
    PrincipalType?: string;
    /** SharePoint Group ID */
    SPGroupID?: string;
    /** SharePoint User ID */
    SPUserID?: string;
    /** Title */
    Title?: string;
}
/**
 * Form
 */
export interface IForm {
    Id: string;
    ResourcePath: IResourcePath;
    ServerRelativeUrl: string;
    FormType: number;
}
/**
 * Information Rights Management Settings
 */
export interface IInformationRightsManagementSettings {
    AllowPrint: boolean;
    AllowScript: boolean;
    AllowWriteCopy: boolean;
    DisableDocumentBrowserView: boolean;
    DocumentAccessExpireDays: number;
    DocumentLibraryProtectionExpireDate: string;
    EnableDocumentAccessExpire: boolean;
    EnableDocumentBrowserPublishingView: boolean;
    EnableGroupProtection: boolean;
    GroupName: string;
    LicenseCacheExpireDays: number;
    PolicyDescription: string;
    PolicyTitle: string;
    TemplateId: string;
}
/**
 * Menu Node
 */
export interface IMenuNode {
    /** Node properties. */
    CustomProperties: IResults<any>;
    /** The URL of the navigation node relative to the URL of the parent navigation node. */
    FriendlyUrlSegment: string;
    /** Not part of documentation. */
    IsDeleted: boolean;
    /** Indicates whether the node is hidden in the navigation menu. During editing, all nodes temporarily become visible. */
    IsHidden: boolean;
    /** The identifier for the navigation node in the menu tree. */
    Key: string;
    /** The child nodes. */
    Nodes: IResults<IMenuNode>;
    /** The type of the navigation node. */
    NodeType: number;
    /**
     * The relative or absolute URL of the navigation node.
     * Site-relative URLs can start with the "~site" token and site collection-relative URLs can start with the "~sitecollection" token.
     * Applies only to SimpleLink node types.
     */
    SimpleUrl: string;
    /** The title of the navigation node. */
    Title: string;
}
/**
 * Menu State
 */
export interface IMenuState {
    /** The URL of the navigation node relative to the URL of the parent navigation node. */
    FriendlyUrlPrefix: string;
    /** The child nodes. */
    Nodes: IResults<IMenuNode>;
    /**
     * The relative or absolute URL of the navigation node.
     * Site-relative URLs can begin with the "~site" URL token and site collection-relative URLs can begin with the "~sitecollection" URL token.
     * Applies only to SimpleLink node types.
     */
    SimpleUrl: string;
    /**
     * The string that replaces the "~sitecollection" token in site collection-relative links.
     * For example, to get the Try Link command to work with the relative link ~sitecollection/Pages/MyPage.aspx, this value might be http://contoso.com/sites/site1/.
     */
    SPSitePrefix: string;
    /**
     * The string that replaces the "~site" token in site-relative links.
     * For example, to get the Try Link command to work with the relative link ~site/Pages/MyPage.aspx, this value might be http://contoso.com/sites/site1/web1.
     */
    SPWebPrefix: string;
    /** The identifier of the root node in the menu tree. */
    StartingNodeKey: string;
    /**
     * The title of the root node in the menu tree.
     * (Example: "Document Center")
     */
    StartingNodeTitle: string;
    /**
     * An implementation-specific value that the server uses to detect external changes.
     * For example, it could be a change timestamp for the database or a monotonically increasing version number such as "2009-06-15T20:45:30Z".
     */
    Version: string;
}
/**
 * Navigation
 */
export interface INavigation {
    QuickLaunch: IResults<INavigationNode>;
    TopNavigationBar: IResults<INavigationNode>;
}
/**
 * Navigation Node
 */
export interface INavigationNode {
    Id: number;
    IsDocLib: boolean;
    IsExternal: boolean;
    IsVisible: boolean;
    ListTemplateType: number;
    Title: string;
    Url: string;
}
/**
 * OData Query
 */
export interface ODataQuery {
    /** An optional custom query string */
    Custom?: string;
    /** The properties to expand. */
    Expand?: Array<string>;
    /** The filters. */
    Filter?: string;
    /**
     * Flag to get all items.
     * Use this flag to get past the 5000 limit.
     */
    GetAllItems?: boolean;
    /** The order by fields. */
    OrderBy?: Array<string>;
    /** The fields to select. */
    Select?: Array<string>;
    /** The number of results to skip. */
    Skip?: number;
    /** The max number of results to return. */
    Top?: number;
}
/**
 * Recycle Bin Item
 */
export interface IRecycleBinItem {
    Author: IUser;
    AuthorEmail: string;
    AuthorName: string;
    DeletedBy: IUser;
    DeletedByEmail: string;
    DeletedByName: string;
    DeletedDate: string;
    DeletedDateLocalFormatted: string;
    DirName: string;
    DirNamePath: IResourcePath;
    Id: string;
    ItemState: number;
    ItemType: number;
    LeafName: string;
    LeafNamePath: IResourcePath;
    Size: string;
    Title: string;
}
/**
 * Regional Settings
 */
export interface IRegionalSettings {
    AdjustHijriDays: number;
    AlternateCalendarType: number;
    AM: string;
    CalendarType: number;
    Collation: number;
    CollationLCID: number;
    DateFormat: number;
    DateSeparator: string;
    DecimalSeparator: string;
    DigitGrouping: string;
    FirstDayOfWeek: number;
    FirstWeekOfYear: number;
    IsEastAsia: boolean;
    IsRightToLeft: boolean;
    IsUIRightToLeft: boolean;
    ListSeparator: string;
    LocaleId: number;
    NegativeSign: string;
    NegNumberMode: number;
    PM: string;
    PositiveSign: string;
    ShowWeeks: boolean;
    ThousandSeparator: string;
    Time24: boolean;
    TimeMarkerPosition: number;
    TimeSeparator: string;
    WorkDayEndHour: number;
    WorkDays: number;
    WorkDayStartHour: number;
}
/**
 * Resource Path
 */
export interface IResourcePath {
    DecodedUrl: string;
}
/**
 * Results
 */
export interface IResults<P> {
    /** The collection data */
    results: Array<P>;
}
/**
 * String Value
 */
export interface IStringValue {
    StringValue: string;
}
/**
 * Subscription
 */
export interface ISubscription {
}
/**
 * Theme Information
 */
export interface IThemeInfo {
    AccessibleDescription: string;
    ThemeBackgroundImageUri: string;
}
/**
 * Upgrade Info
 */
export interface IUpgradeInfo {
    ErrorFile: string;
    Errors: number;
    LastUpdated: string;
    LogFile: string;
    RequestDate: string;
    RetryCount: number;
    StartTime: string;
    Status: number;
    UpgradeType: number;
    Warnings: number;
}
/**
 * Usage Information
 */
export interface IUsageInfo {
    Bandwidth: number;
    DiscussionStorage: number;
    Hits: number;
    Storage: number;
    StoragePercentageUsed: number;
    Visits: number;
}
/**
 * Visualization
 */
export interface IVisualization {
    DefaultScreen: IVisualizationStyleSet;
    DetailView: IVisualizationStyleSet;
    MediumScreen: IVisualizationStyleSet;
    SmallScreen: IVisualizationStyleSet;
    VisualizationAppInfo: IVisualizationAppInfo;
    VisualizationType: number;
}
/**
 * Visualization App Information
 */
export interface IVisualizationAppInfo {
    DesignUri: string;
    Id: string;
    RuntimeUri: string;
}
/**
 * Visualization Field
 */
export interface IVisualizationField {
    InternalName: string;
    Style: string;
}
/**
 * Visualization Style Set
 */
export interface IVisualizationStyleSet {
    AspectRatio: string;
    BackgroundColor: string;
    Fields: IVisualizationField;
    MinHeight: string;
}
/**
 * Web Context Information
 */
export interface IContextWebInfo {
    GetContextWebInformation: IContextInfo;
}
/**
 * Workflow Template
 */
export interface IWorkflowTemplate {
    AllowManual: boolean;
    AssociationUrl: string;
    AutoStartChange: boolean;
    AutoStartCreate: boolean;
    Description: string;
    Id: string;
    IsDeclarative: boolean;
    Name: string;
    PermissionsManual: IBasePermissions;
}
