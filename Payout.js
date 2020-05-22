const { openBrowser, goto, click, write, near, textBox, clear, waitFor, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://dev.devmobo.com/");
        await click("email");
        await write("sjagadesh11@yahoo.com");
        await click("password");
        await write("test12345");
        await click("submit");
        await click("payments");
        await click("old trafford");
        await click("payout");
        await click(textBox(near("Amount")));
        await clear();
        await write("5.00");
        await click("payout");
        await waitFor("payout created", 5000);
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();