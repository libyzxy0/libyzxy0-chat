# Application Data Structure

### User

```js
const user = {
    userId: "unique_user_id",
    username: "User1",
    displayName: "User One",
    avatarUrl: "user_avatar_url",
    status: "online", // User's online status (online, offline, away, etc.)
    bio: "A chat enthusiast",
    // Other user-related properties
};
```

### Thread

```js
const thread = {
    threadId: "unique_thread_id",
    participants: [
        {
            userId: "user1_id",
            username: "User1"
        },
        {
            userId: "user2_id",
            username: "User2"
        }
    ],
    messages: [
        // An array of message objects representing the conversation's messages
    ],
    lastActivityTimestamp: 1630896000000
};
```

### Message

```js
const message = {
    type: "message", 
    messageId: "unique_message_id",
    sender: {
        userId: "sender_user_id",
        username: "Sender Username",
        avatarUrl: "sender_avatar_url"
    },
    text: "This is the message text.",
    timestamp: 1630896000000,
    status: "sent",
    attachments: [
        {
            type: "image",
            url: "image_url.jpg"
        },
        {
            type: "video",
            url: "video_url.mp4"
        }
    ]
};
```