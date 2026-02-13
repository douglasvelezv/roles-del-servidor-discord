
// TypeScript types for Discord API

export interface Guild {
  id: string;
  name: string;
  icon: string | null;
  owner_id: string;
  region: string;
  afk_channel_id: string | null;
  afk_timeout: number;
  verification_level: number;
  default_message_notifications: number;
  explicit_content_filter: number;
  roles: Role[];
  emojis: any[];
  features: string[];
  mfa_level: number;
  system_channel_id: string | null;
}

export interface Role {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
}

export interface GuildMember {
  user: User;
  nick?: string;
  roles: string[];
  joined_at: string;
  premium_since?: string;
  deaf: boolean;
  mute: boolean;
  pending?: boolean;
  permissions?: string;
}

export interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
}

export interface APIError {
  code: number;
  message: string;
  errors?: any;
}
