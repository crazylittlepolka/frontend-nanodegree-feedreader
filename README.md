# Frontend-nanodegree-feedreader

This application is to check if all demanded functionalities are properly executed by code in app.js file.

## Running the application
To run the application open index.html file in a browser.

## Testing
Resulting of implemented test are displayed right under the page content on grey background with Jasmine header.
When tests are displayed in green all tests passed.

## Provided Test:
1. RSS Feeds 	
* (test pos 1 - checks if allFeeds variables are defined).
* (tests pos 2 to 5 - check if each feed in allFeeds has defined url property, and it is not empty)
* (tests 6 to 9 - check if each feed in allFeeds has defined name property and it is not empty).

2. The menu	
* (test 1 - checks if menu element is hidden by default)
* (test 2 - checks if when menu icon is clicked it changes visibility on click)

3. Initial Entries 
* (test 1 - checks when loadFeed function is called and done, there is at least one .entry element withing .feed container)

4. New Feed Selection 	
* (test 1 - checks when a new feed is loaded by loadFeed function the content changes)

## Licence
No licence
