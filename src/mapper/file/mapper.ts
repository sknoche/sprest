import { RequestType } from "../../types";

/**
 * Attachment
 */
export const attachment = {};

/**
 * Attachment Files
 */
export const attachmentfiles = {
    /**
     * Adds the attachment that is represented by the specified file name and byte array to the list item.
     * @param name - The name of the file to add.
     * @param contents - The file contents as an array buffer.
    **/
    add: {
        argNames: ["fileName"],
        requestType: RequestType.PostWithArgs
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};
/**
 * File
 */
export const file = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/

    properties: [
        "Author|user", "CheckedOutByUser|user", "EffectiveInformationRightsManagementSettings", "InformationRightsManagementSettings",
        "ListItemAllFields", "LockedByUser|user", "ModifiedBy|user", "Properties|propertyvalues", "VersionEvents", "Versions|fileversions"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Approves the file submitted for content approval with the specified comment.
    approve: {
        argNames: ["comment"],
        requestType: RequestType.PostWithArgs
    },

    // Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
    // This method is currently available only on Office 365.
    cancelupload: {
        argNames: ["uploadId"],
        name: "cancelupload(guid'[[uploadId]]')",
        requestType: RequestType.PostReplace
    },

    // Checks the file in to a document library based on the check-in type.
    // Check-In Types: MinorCheckIn = 0; MajorCheckIn = 1; OverwriteCheckIn = 2
    checkin: {
        argNames: ["comment", "checkInType"],
        requestType: RequestType.PostWithArgs
    },

    // Checks out the file from a document library based on the check-out type.
    checkout: {
        requestType: RequestType.Post
    },

    // Returns the file content.
    content: {
        name: "$value",
        requestType: RequestType.GetBuffer
    },

    // Continues the chunk upload session with an additional fragment. The current file content is not changed.
    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
    // This method is currently available only on Office 365.
    continueUpload: {
        argNames: ["uploadId", "fileOffset"],
        name: "continueUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
        requestType: RequestType.PostReplace
    },

    // Copies the file to the destination URL.
    copyTo: {
        argNames: ["strNewUrl", "bOverWrite"],
        requestType: RequestType.PostWithArgs
    },

    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Denies approval for a file that was submitted for content approval.
    // Only documents in lists that are enabled for content approval can be denied.
    deny: {
        argNames: ["comment"],
        requestType: RequestType.PostWithArgs
    },

    // Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
    // This method is currently available only on Office 365.
    finishUpload: {
        argNames: ["uploadId", "fileOffset"],
        name: "finishUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
        requestType: RequestType.PostReplace
    },

    // Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
    // An exception is thrown if the file is not an ASPX page.
    // Type of scopes: 
    getlimitedwebpartmanager: {
        argNames: ["scope"],
        name: "getLimitedWebPartManager(scope=[[scope]])",
        requestType: RequestType.GetReplace
    },

    // Moves the file to the specified destination URL.
    // Types of move operations: Overwrite = 1; AllowBrokenThickets (move even if supporting files are separated from the file) = 8.
    moveTo: {
        argNames: ["newUrl", "flags"],
        name: "moveTo(newUrl='[[newUrl]]', flags=[[flags]])",
        requestType: RequestType.PostReplace
    },

    // Opens the file as a stream.
    openBinaryStream: {
        requestType: RequestType.GetBuffer
    },

    // Submits the file for content approval with the specified comment.
    publish: {
        argNames: ["comment"],
        requestType: RequestType.PostWithArgs
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: RequestType.Get
    },

    // Saves the file as a stream.
    saveBinaryStream: {
        requestType: RequestType.PostWithArgsInBody
    },

    // Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
    // The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
    // The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
    startUpload: {
        argNames: ["uploadId"],
        name: "startupload(uploadId=guid'[[uploadId]]')",
        requestType: RequestType.PostReplace
    },

    // Reverts an existing checkout for the file.
    undoCheckOut: {
        requestType: RequestType.Post
    },

    // Removes the file from content approval or unpublish a major version.
    unpublish: {
        argNames: ["comment"],
        requestType: RequestType.PostWithArgs
    },

    // Updates it's properties.
    update: {
        metadataType: "SP.File",
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    }
};

/**
 * Files
 */
export const files = {
    // Adds a file to this collection.
    add: {
        argNames: ["overwrite", "url"],
        requestType: RequestType.PostWithArgs
    },

    // Adds a ghosted file to an existing list or document library.
    // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
    addTemplateFile: {
        argNames: ["urlOfFile", "templateFileType"],
        requestType: RequestType.PostWithArgs
    },

    // Get the file at the specified URL.
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "file"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};

/**
 * File Version
 */
export const fileversion = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};

/**
 * File Versions
 */
export const fileversions = {
    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};

/**
 * Folder
 */
export const folder = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/

    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder|folder", "Properties|propertyvalues", "StorageMetrics"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Get the file at the specified URL.
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: RequestType.Post
    },

    // Updates it's properties.
    update: {
        metadataType: "SP.Folder",
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    }
};

/**
 * Folders
 */
export const folders = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder", "StorageMetrics"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Adds the folder that is located at the specified URL to the collection.
    add: {
        argNames: ["url"],
        requestType: RequestType.PostWithArgs
    },

    // Get the file at the specified URL.
    getbyurl: {
        argNames: ["serverRelativeUrl"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};

/**
 * Limited Web Part Manager
 */
export const limitedwebpartmanager = {
    // Gets a webpart by its id.
    get_WebParts: {
        argNames: ["id"],
        name: "webparts?expand=WebPart",
        requestType: RequestType.GetReplace
    }
};