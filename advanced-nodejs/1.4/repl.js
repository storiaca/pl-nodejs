const repl = require("repl");

let r = repl.start({
  ignoreUndefined: true,
  replMode: repl.REPL_MODE_STRICT,
});

r.context.lodash = require("lodash");

// https://nodejs.org/en/knowledge/REPL/how-to-use-nodejs-repl/#:~:text=Starting%20the%20REPL%20is%20simple,command%20line%20without%20a%20filename.&text=It%20then%20drops%20you%20into,history%20and%20modify%20previous%20commands.

// https://nodejs.org/api/repl.html#replstartoptions
