import { IBase } from "../../utils/types";
import { Types } from "../..";
/**
 * Social Feed
 */
export interface ISocialFeed extends IBase<ISocialFeed> {
    /**
     * Gets information about the specified user and the current user.
     * @param accountName - The login name of the user.
     */
    actor(accountName: string): IBase<ISocialRestActor>;
    /**
     * Gets the feed of activity by the specified user (Personal feed type) or gets the specified site feed.
     * @param accountName - The login name of the user.
     */
    actorFeed(accountName: string): IBase<ISocialRestThread>;
    /**
     * Gets the feed of microblog posts that mention the current user, represented by MentionReference thread types, and sets the user's unread mention count to 0.
     */
    clearMyUnreadMentionCount(): IBase;
    /**
     * Gets information about the current user.
     */
    my(): IBase<ISocialRestActor>;
    /**
     * Gets the feed of activity by the current user (Personal feed type).
     */
    myFeed(): IBase<ISocialRestFeed>;
    /**
     * Gets the feed of microblog posts that the current user likes, represented by LikeReference thread Types.SP. See Reference threads and digest threads in SharePoint Server 2013 social feeds.
     */
    myLikes(): IBase<ISocialRestFeed>;
    /**
     * Gets the feed of microblog posts that mention the current user.
     */
    myMentionFeed(): IBase<ISocialRestFeed>;
    /**
     * Gets the feed of activity by the current user and by people and content the user is following, sorted by last modified date (News feed type).
     */
    myNews(): IBase<ISocialRestFeed>;
    /**
     * Gets the feed of activity by the current user and by people and content the user is following, sorted by created date (Timeline feed type).
     */
    myTimelineFeed(): IBase<ISocialRestFeed>;
    /**
     * Gets the count of unread mentions for the current user.
     */
    myUnreadMentionCount(): IBase<ISocialRestFeed>;
    /**
     * Creates a root post in the specified site feed.
     * @param accountName - The login name of the user.
     */
    postToFeed(accountName: string, postInfo: Types.SP.ComplexTypes.SocialPostCreationData): IBase<ISocialRestThread>;
    /**
     * Creates a root post in the current user's feed.
     * @param creationData - The post creation data.
     */
    postToMyFeed(creationData: Types.SP.ComplexTypes.SocialPostCreationData): IBase<ISocialRestThread>;
}
/**
 * Social Rest Actor
 */
export interface ISocialRestActor extends IBase<ISocialRestActor> {
    /**
     * Properties
     */
    FollowableItem?: string;
    FollwableItemActor: Types.SP.ComplexTypes.SocialActor;
    Me: Types.SP.ComplexTypes.SocialActor;
    /**
     * Methods
     */
    clearUnreadMentionCount(): IBase<ISocialRestFeed>;
}
/**
 * Social Rest Feed
 */
export interface ISocialRestFeed extends IBase<ISocialRestFeed> {
    /**
     * Properties
     */
    SocialFeed: Types.SP.ComplexTypes.SocialFeed;
    /**
     * Methods
     */
    /**
     * Creates a root post in the user's feed.
     */
    post(postInfo: Types.SP.ComplexTypes.SocialRestPostCreationData): ISocialRestThread;
}
/**
 * Social Rest Thread
 */
export interface ISocialRestThread extends IBase<ISocialRestThread> {
    /**
     * Properties
     */
    ID?: string;
    SocialThread: Types.SP.ComplexTypes.SocialThread;
    /**
     * Methods
     */
    delete(): IBase<ISocialRestThread>;
    reply(restCreationData: Types.SP.ComplexTypes.SocialPostCreationData): IBase<ISocialRestThread>;
}
