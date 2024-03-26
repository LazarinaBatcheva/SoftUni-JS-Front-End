function printBrowserHistory(browserData, commandsList) {
    const browserHistory = browserData;
    const cleareCommand = 'Clear History and Cache';
    const openCommand = 'Open';
    const closeCommand = 'Close';

    for (const data of commandsList) {
        if (data === cleareCommand) {
            browserHistory['Open Tabs'] = [];
            browserHistory['Recently Closed'] = [];
            browserHistory['Browser Logs'] = [];
            continue;
        }

        const [command, siteName] = data.split(' ');

        if (command === closeCommand && browserHistory['Open Tabs'].includes(siteName)) {
            browserHistory['Open Tabs'] = browserHistory['Open Tabs'].filter(tab => tab !== siteName);
            browserHistory['Recently Closed'].push(siteName);
            browserHistory['Browser Logs'].push(`${command} ${siteName}`);
            continue;
        } else if (command === openCommand) {
            browserHistory['Open Tabs'].push(siteName);
            browserHistory['Browser Logs'].push(`${command} ${siteName}`);
        }
    }

    console.log(browserHistory['Browser Name']);
    console.log(`Open Tabs: ${browserHistory['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserHistory['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserHistory['Browser Logs'].join(', ')}`);
}


// test code

printBrowserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"]);

console.log();

printBrowserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);
