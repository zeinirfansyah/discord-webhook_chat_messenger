# DiscordWebhookMessenger

DiscordWebhookMessenger is a web platform that allows users to send messages to a Discord server using Discord webhooks.
This project is built using JavaScript and ReactJS.

## Features

- Send messages to a Discord server using webhooks.
- User-friendly web interface for sending messages.
- Customize the message content and other parameters.
- Easy integration with your Discord server.

## Prerequisites

Before you get started, ensure you have the following prerequisites:

- Node.js installed on your system
- A Discord server where you have the necessary permissions to create webhooks

## Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/zeinirfansyah/discord-webhook-messenger.git
```
2. Navigate to the project directory.
3. Install the required dependencies:
   
```
npm install
```

##Usage

Set up a Discord webhook on your server and copy the webhook URL.
src/components/sendMessage_components/Announcement.jsx

```
  if (channel_discord == "roles") {
      hook = "PUT YOUR WEBHOOK URL HERE";
    } else if (channel_discord == "announcement") {
      hook = "PUT YOUR WEBHOOK URL HERE";
    }
```
Start the development server and use the web interface to send messages to your Discord server.

