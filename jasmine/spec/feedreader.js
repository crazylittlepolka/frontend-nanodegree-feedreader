/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         for (let feed of allFeeds) {
            it('URL is defined', function(){
                expect(feed.url).toBeDefined();
                expect(feed.url).toBeTruthy();
            });
         }
         
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         for (let feed of allFeeds) {
            it('has a name', function(){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeNull();
            });
         }
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('is hidden', function(){
            //checing if menu is hidden by deafult
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         it('changes visibility on click', function(){
            //trigger click event on menu-icon-link element
            $('.menu-icon-link').trigger('click');
            
            //test if the method is being called and menu appears
            expect(($('body')).hasClass('menu-hidden')).toBe(false);


            //we need to trigger click event on menu-icon-link element again
            $('.menu-icon-link').trigger('click');

            //now we test if the method is being called and menu is hidden
            expect(($('body')).hasClass('menu-hidden')).toBe(true);

         })
    });
     
     /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function(){

    /* TODO: Write a test that ensures when the loadFeed
             * function is called and completes its work, there is at least
             * a single .entry element within the .feed container.
             * Remember, loadFeed() is asynchronous so this test will require
             * the use of Jasmine's beforeEach and asynchronous done() function.
             */

            //we wait after loadFeed asyn function with two arguments is called and done      
            beforeEach(function(done){
                loadFeed(0, done);
            });
                         
          it('there is at least one .entry element within feed container', function(done){
            
            //looking for .entry elements within parent .feed element with .children() method
            //and expect that number of elements will not be 0

            expect($('.feed').children().length).not.toBe(0);
            done();
             });

            });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {
            //delare two variables 
            let entryFeed;
            let newFeed;
            
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         //wait after loadFeed asyn function with two arguments is called and done, and feed loaded
         // and assign entryFeed variable value of this feed
            
            beforeEach(function(done){
                
                loadFeed(0, function(){

                entryFeed = $('.feed').html();

                done()
               });
                        
            });


            it('when new feed is loaded content changes', function(done) {
               
               //call loadFeed function with another feed
                loadFeed(1, function(done){

                //newFeed is assigned a value of that feed
                newFeed = $('.feed').html();

                done()
               });

                //check if newFeed and entryFeed has different values
                expect(newFeed).not.toEqual(entryFeed);
                done();
            });

    });
}());
