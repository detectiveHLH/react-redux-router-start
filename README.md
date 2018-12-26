<h1 align="center">react-redux-router-starter</h1>
A quick starter based on create-react-app. You can use react-router and react-redux by simply clone this project.

## Tree
```
.
├── LICENSE
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── container
│   │   └── AppContainer.js
│   ├── index.css
│   ├── index.js
│   ├── layout
│   │   ├── AppLayout.js
│   │   ├── BaseLayout.js
│   │   └── WechatLayout.js
│   ├── logo.svg
│   ├── reducers
│   │   ├── base.js
│   │   ├── index.js
│   │   └── wechat.js
│   ├── routes
│   │   ├── base
│   │   │   └── home
│   │   │       └── index.js
│   │   ├── home
│   │   │   └── index.js
│   │   └── wechat
│   │       └── home
│   │           └── index.js
│   ├── saga
│   │   └── index.js
│   ├── serviceWorker.js
│   └── store
│       └── createStore.js
└── yarn.lock
```
This starter has two built-in layout. For example, if your web page need wechat's authority, you can put it in the `WechatLayout`, Do not render the page if the user do not have authority.


## Usage
Clone this project to your local workspace.
```bash
git clone https://github.com/detectiveHLH/react-redux-router-starter.git
```

## Start
```bash
cd react-redux-router-starter && yarn install && yarn start
```

## License
[MIT](./LICENSE)
