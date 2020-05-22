const { openBrowser, goto, click, write, dropDown, near, radioButton, textBox, button, waitFor, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://dev.devmobo.com/");
        await click("email");
        try { yahoo } catch {};
        await write("sjagadesh11@yahoo.com");
        await click("password");
        await write("test12345");
        await click("submit");
        await click("payments");
        await click("Black Pearl");
        await click("Add Payment");
        await dropDown("Country").select("United States");
        await click(radioButton(near("entity")));
        await click(textBox(near("Mobile Number")));
        await click("the test phone number");
        await click(textBox(near("email")));
        await write("jagadeshs11@yahoo.com");
        await click("next");
        await click("use test code");
        await click(textBox({placeholder: "First name"}));
        await write("Jason");
        await click(textBox({placeholder: "Last name"}));
        await write("Todd");
        await click(textBox({placeholder: "company.com"}));
        await write("https://nomobo.co/");
        await click("next");
        await click("use test account");
        await click(button(near("Concord, CA")));
        await waitFor("STRIPE TEST BANK", 10000);
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();