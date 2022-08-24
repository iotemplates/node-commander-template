const chaiExec = require("@jsdevtools/chai-exec");
const chai = require("chai");

chai.use(chaiExec);

describe('CLI', function() {
    it("should greet and exit with 0", () => {
        // Run your CLI
       let myCLI = chaiExec('node-commander-template hello Jim"');

        // Assert syntax
        chai.assert.stdout(myCLI, "Hello, Jim!\n"); //Don't forget the newline
        chai.assert.stderr(myCLI, "");
        chai.assert.exitCode(myCLI, 0);
     });

    it("should greet and capitalize and exit with 0", () => {
        // Run your CLI
       let myCLI = chaiExec('node-commander-template hello --capitalize Jim"');

        // Assert syntax
        chai.assert.stdout(myCLI, "HELLO, JIM!\n"); //Don't forget the newline
        chai.assert.stderr(myCLI, "");
        chai.assert.exitCode(myCLI, 0);
     });
});
