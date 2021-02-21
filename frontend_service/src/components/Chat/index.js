import React, { useState } from 'react';
import './style.scss';
import ChatBox, { ChatFrame } from 'react-chat-plugin';

function Chat() {
  const [attr, setAttr] = useState({
    showChatbox: false,
    showIcon: true,
    messages: [
      {
        text: 'user2 has joined the conversation',
        timestamp: 1578366389250,
        type: 'notification',
      },
      {
        author: {
          username: 'user1',
          id: 1,
        },
        text: 'Hi',
        type: 'text',
        timestamp: 1578366393250,
      },
      {
        author: { username: 'user2', id: 2 },
        text: 'Show two buttons',
        type: 'text',
        timestamp: 1578366425250,
        buttons: [
          {
            type: 'URL',
            title: 'Yahoo',
            payload: 'http://www.yahoo.com',
          },
          {
            type: 'URL',
            title: 'Example',
            payload: 'http://www.example.com',
          },
        ],
      },
      {
        author: {
          username: 'user1',
          id: 1,
        },
        text: "What's up?",
        type: 'text',
        timestamp: 1578366425250,
        hasError: true,
      },
      {
        author: { username: 'user2', id: 2 },
        text: 'Show two buttons',
        type: 'text',
        timestamp: 1578366425250,
        text: "What's up?",
        type: 'text',
        timestamp: 1578366425250,
      },
    ],
  });

  const handleClickIcon = () => {
    setAttr({
      ...attr,
      showChatbox: !attr.showChatbox,
      showIcon: !attr.showIcon,
    });
  };

  const handleOnSendMessage = (message) => {
    setAttr({
      ...attr,
      messages: attr.messages.concat({
        author: {
          username: 'user1',
          id: 1,
        },
        text: message,
        type: 'text',
        timestamp: +new Date(),
      }),
    });
  };

  return (
    <ChatFrame
      chatbox={
        <ChatBox
          onSendMessage={handleOnSendMessage}
          userId={1}
          messages={attr.messages}
          width={'350px'}
          showTypingIndicator={true}
        />
      }
      clickIcon={handleClickIcon}
      showChatbox={attr.showChatbox}
      showIcon={attr.showIcon}
      iconStyle={{ background: '#1db954', fill: 'white' }}
    >
    </ChatFrame>
  );
}

export default Chat;
