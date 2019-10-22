const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n']
let counter = 100;
for (const char of characters) {
  setTimeout(() => {
    process.stdout.write(`\r ${char}`);
  }, counter += 200);
};