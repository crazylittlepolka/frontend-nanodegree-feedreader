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
    
    //this test suite is all about the RSS
    //feeds definitions, the allFeeds variable in our application
    describe('RSS Feeds', function() {

         //test spec: allFeeds variable has been defined and it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         //test spec that loops through each feed in AllFeeds object and ensures that
         //each has URL defined and it is not empty
         for (let feed of allFeeds) {
            it('URL is defined', function(){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe("");
            });
         }
         
         //test spec that loops through each feed in AllFeeds object and ensures that
         //each has name defined and it is not empty
         for (let feed of allFeeds) {
            it('has a name', function(){
                expect(feed.name).toBeDefined();
                expect(feed.name).toBeTruthy();
            });
         }
    });

    //test suite for the menu performance
    describe('The menu', function() {

         //test spec if menu element is hidden by default
         it('is hidden', function(){
            //checking if menu is hidden by deafult
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

        //test spec if menu appears or hide when clicked
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
     
     //test suite for Initial Entries
    describe('Initial Entries', function(){

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
            
        //test spec if with new feed there is new content

         //wait after loadFeed asyn function with two arguments is called and done, and feed loaded
         // and assign entryFeed variable value of this feed
            
            beforeEach(function(done){
                
                loadFeed(0, function(){
                entryFeed = $('.feed').html();
                done();
                });

                //call loadFeed function with another feed
                loadFeed(1, function(){

                //newFeed is assigned a value of that feed
                newFeed = $('.feed').html();
                });
            });

            it('when new feed is loaded content changes', function(done) {

                //check if newFeed and entryFeed has different values
                expect(newFeed).not.toEqual(entryFeed);
                done();
            });

    });
}());
