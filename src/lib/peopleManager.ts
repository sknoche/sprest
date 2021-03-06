import { Base } from "../utils";
import { IPeopleManager } from "./types";
import { ITargetInfo } from "../utils/types";

/**
 * People Manager
 */
export const PeopleManager: IPeopleManager = ((targetInfo?: ITargetInfo) => {
    let peopleManager = new Base(targetInfo);

    // Default the properties
    peopleManager.targetInfo.defaultToWebFl = true;
    peopleManager.targetInfo.endpoint = "sp.userprofiles.peoplemanager";

    // Add the methods
    peopleManager.addMethods(peopleManager, { __metadata: { type: "peoplemanager" } });

    // Return the people manager
    return peopleManager;
}) as any;
