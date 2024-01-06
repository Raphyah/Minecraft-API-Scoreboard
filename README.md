# Minecraft API-Scoreboard

Simple scoreboard functions to use with minecraft bedrock scripting API.

## Usage

First, import the file like this:

```js
import { getValue, setValue /* , ... */ } from 'scoreboard';
```

After importing you can use it in the code like this:

```js
setValue(player, 'hello', 10);
console.warn(getValue(player, 'hello'));
```
