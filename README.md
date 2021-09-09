# artre
A "reverse crowdfunding" platform made for people who want to share their ideas with their favorite artists.

## Installation

```bash
$ cd server && npm install
$ cd client && npm install
```

## Getting Started

You can start the server in the server directory using
```
$ npm run start
```

The client can be started similarly in the client directory.

In order to get the Twitter authentication working, you must create a developer [Twitter account and project](https://developer.twitter.com/) to receive your own API keys. Then, create a .env file in the server directory with the following variables from Twitter:
```
TWITTER_CONSUMER_KEY="..."
TWITTER_CONSUMER_SECRET="..."
```
