// Cliente API de Discord


import axios from 'axios';
import type { Guild, Role, GuildMember } from '../types';

const DISCORD_API_BASE = 'https://discord.com/api/v10';

class DiscordAPI {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  private getHeaders() {
    return {
      'Authorization': `Bot ${this.token}`,
      'Content-Type': 'application/json',
    };
  }

  async getGuild(guildId: string): Promise<Guild> {
    const response = await axios.get(
      `${DISCORD_API_BASE}/guilds/${guildId}`,
      { headers: this.getHeaders() }
    );
    return response.data;
  }

  async getRoles(guildId: string): Promise<Role[]> {
    const response = await axios.get(
      `${DISCORD_API_BASE}/guilds/${guildId}/roles`,
      { headers: this.getHeaders() }
    );
    return response.data;
  }

  async addRoleToMember(
    guildId: string,
    memberId: string,
    roleId: string
  ): Promise<void> {
    await axios.put(
      `${DISCORD_API_BASE}/guilds/${guildId}/members/${memberId}/roles/${roleId}`,
      {},
      { headers: this.getHeaders() }
    );
  }

  async removeRoleFromMember(
    guildId: string,
    memberId: string,
    roleId: string
  ): Promise<void> {
    await axios.delete(
      `${DISCORD_API_BASE}/guilds/${guildId}/members/${memberId}/roles/${roleId}`,
      { headers: this.getHeaders() }
    );
  }

  async getGuildMember(guildId: string, memberId: string): Promise<GuildMember> {
    const response = await axios.get(
      `${DISCORD_API_BASE}/guilds/${guildId}/members/${memberId}`,
      { headers: this.getHeaders() }
    );
    return response.data;
  }
}

export default DiscordAPI;
