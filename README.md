Run the example just as described in the expo native module tutorial (https://docs.expo.dev/modules/native-module-tutorial/):
1. `npm run build` in root
2. in new terminal window/tab, cd into /example
2. `npx expo run:ios`

Note the console.log in index.ts. To see the issue with the debugger:
1. `cmd + shift + z` in the simulator
2. open the debugger
3. See the is logged out as a promise, and there's an error in the app because it is now trying to render a promise instead of a string