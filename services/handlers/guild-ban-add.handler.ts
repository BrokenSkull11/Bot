import AnnounceHandler from './announce-handler';
import { Message, Guild, User } from 'discord.js';
import { EventType } from '../../models/guild';
import EventVariables from '../../modules/announce/event-variables';

export default class GuildBanAddHandler extends AnnounceHandler {
    on = 'guildBanAdd';
    event = EventType.Ban;

    async invoke(guild: Guild, user: User) {
        await super.announce(guild, [ guild, user ]);
    }
    
    protected async applyEventVariables(content: string, guild: Guild, user: User) {
        const ban = await guild.fetchBan(user);

        return new EventVariables(content)
            .guild(guild)
            .memberCount(guild)
            .reason(ban)
            .user(user)
            .toString();
    }
}
