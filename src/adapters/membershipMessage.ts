import { YTNodes } from "youtubei.js/web";

export function membershipMessageToJSON(itemData: YTNodes.LiveChatMembershipItem) {
    return JSON.stringify({
        type: 'membership',
        id: itemData.id,
        unix: itemData.timestamp || 0,
        author: {
            name: itemData.author.name,
            id: itemData.author.id,
            verified: itemData.author.is_verified || false,
            moderator: itemData.author.is_moderator || false,
        },
    })
}
