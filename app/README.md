# Description
This is a FE app architecture which lists meetings and allow group chat on login authentication.

# Setup
 - `yarn install` To install dependencies

 - `yarn run dev` Runs the app in the development mode.

 - `yarn test`  To run tests - (Only added template for popupOpener)

 # Architecture
 - Refer: https://miro.com/app/board/uXjVKO1CSs8=/

# Further additions
 - Redux store to maintain states through actions.
 - Currently, contains only skeleton for IndexedDB and messageScheduler.
 - Stay logged in by reading the token stored at FE on refresh.

# Tech used
 - React.js: A JavaScript library for building user interfaces.
 - Styled-components: CSS-in-JS library for styling React components.
 - Websockets: For real time communication
 - react-testing-lib, jest - for unit tests 
