import { Base } from "../utils";
import { IUserProfile } from "./types";
import { ITargetInfo } from "../utils/types";

/**
 * User Profile
 */
export const UserProfile: IUserProfile = ((targetInfo?: ITargetInfo) => {
    let userProfile = new Base(targetInfo);

    // Default the properties
    userProfile.targetInfo.defaultToWebFl = true;
    userProfile.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
    userProfile.targetInfo.method = "POST";

    // Add the methods
    userProfile.addMethods(userProfile, { __metadata: { type: "userprofile" } });

    // Return the user profile
    return userProfile;
}) as any as IUserProfile;