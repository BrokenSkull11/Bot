import { model, Schema, Document } from 'mongoose';

const memberSchema = new Schema({
    userId: String,
    guildId: String,
    xp: { type: Number, default: 0 },
    recentMessages: { type: Array, default: [] },
    warnings: { type: Array, default: [] }
});

export interface MemberDocument extends Document {
    userId: string;
    guildId: string;
    xp: number;
    recentMessages: Date[],
    warnings: Warning[];
}

export interface Warning {
    reason: string;
    instigatorId: string;
    at: Date;
}

export const SavedMember = model<MemberDocument>('member', memberSchema);