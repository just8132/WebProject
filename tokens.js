// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1390457360123691089",
        serverId: "873590267633102898",
        token: process.env.token10,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 1, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: false,
    },
      {
        channelId: "1390457360123691089",
        serverId: "873590267633102898",
        token: process.env.token2,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 1, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: false,
    },
      {
        channelId: "1390457360123691089",
        serverId: "873590267633102898",
        token: process.env.token9,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 1, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: false,
    },
      {
        channelId: "1390457360123691089",
        serverId: "873590267633102898",
        token: process.env.token4,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 1, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: false,
    },
];