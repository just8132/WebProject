// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1436423627557048330",
        serverId: "1238571049528856597",
        token: process.env.token1,
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
