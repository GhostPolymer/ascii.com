# Product Grid 
Best ascii faces on the market. 

# Before you get started:

Make sure the build is ran in  your cmd. If not it will bug out saying it's missing the "bundle.js" file.
So just run:
```
npm run build
```
Once the chunks are completed and the build has stopped, make sure the ``bundle.js`` file is in the correct directory.
Then full thrusters scotty:

```
npm start

```

## Problem: 

---
```
Products Grid
====

This is an ecommerce site, where you can buy all sorts of ascii faces like `(ノ・∀・)ノ` and `¯_(ツ)_/¯`, 
in a wide variety of font sizes. 
The homepage should display a list of products for people to browse.

Please read the instructions and FAQ below before beginning.

Features
----

- products are displayed in a grid.
- give the user an option to sort the products in ascending order. Can sort by "size", "price" or "id". The products list should be reloaded when a new sorting option is chosen.
- each product has :
  - a "size" field, which is the font-size (in pixels). We should display the faces in their correct size, to give customers a realistic impression of what they're buying.
  - a "price" field, in cents. This should be formatted as dollars like `$3.51`.
  - a "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.
- the product grid should automatically load more items as you scroll down.
- display an animated "loading..." message while the user waits for the data to load.
- to improve the user's experience, we should always pre-emptively fetch the next batch of results in advance, making use of idle-time.  But they still should not be displayed until the user has scrolled to the bottom of the product grid.
- when the user reaches the end and there are no more products to display, show the message "~ end of catalogue ~".

### Ads features

- after every 20 products we need to insert an advertisement from one of our sponsors. Use the same markup as the advertisement in the header shown in `public/index/html`, but make sure the `?r` query param is randomly generated each time an ad is displayed.
- Ads should be randomly selected, but a user must never see the same ad twice in a row.


Products API
----

- The basic query looks like this: `/api/products`
- The response format is JSON.
- To paginate results use the `_page` parameter, eg: `/api/products?_page=10&_limit=15` (returns 15 results starting from the 10th page).
- To sort results use the `_sort` parameter, eg: `/api/products?_sort=price`. Valid sort values are `price`, `size` and `id`.

FAQ
----

### How do I start the app?

Start with `npm start`. The server will look for any files you add to the `public/` directory.

### What libraries/frameworks, packages, tools can I use?

You need to use React.js as the main js library and Git for version control, but other than that you are free to work with any package of your choice with two exceptions - you should not use any package/plugin for the *loading of products on scroll* and *formatting of dates*. We want to see how you solve problems by writing your own JS code, so using any package/plugin for the above two features will immediately make us reject your submission.

### What about sort order (ascending / descending)?

We don't need to worry about alternate sort order for this project, we'll just use ascending-order for everything.

### Can I make changes to the backend or API?

No, your final solution should not include any changes to the server code.

### What should I do when I'm finished?

Please use Git and make regular commits while working on this app. After you have finished your work upload your app to a Github repo, and then send us an email with the link to that repo along with information about which features you have included in your solution, and provide clear instructions on how we can run your code and see the results in a browser.

### How is the exam graded?

We are looking for idiomatic use of javascript, and the ability to solve the problems with code that is clean and easy to read. Even though it's very small in scope, please show us how you would use the language and conventions to structure things in a clear and maintainable way. Please don't go overboard with using external packages/plugins and don't try to introduce extra complexity in your code just for the sake of showcasing your skills.

Try to create a simple and elegant UI for this. You are free to use SASS or any other CSS pre-processor of your choice, but plain CSS is fine too.

### This looks like it will take a while and I'm pretty busy

You're right! With something open-ended like this you could easily spend a week polishing and getting it just right. We don't expect you to do this, and we'll do our best to make sure you're not disadvantaged by this.

When we grade this exam we're not giving you a "score out of 100" for how many features you complete. We're trying to get some insight into your process, to see the way you work. So, by all means, spend more time if you want to. But you are also free to leave certain features out and give a written explanation of how you would approach it. The best approach is to spend your time on the features that you think is the best way to show us your strengths and experience.
```
---
## Solution:
---
# Day 1:
Today I began creating a shop in the hopes of being able to show my react skills. I started with:

  -Downloading all dependencies I felt comfortable with using for this project.
  
  -I tested the server with Postman and came up with this beauty:
  <img src="images/githubimage.JPG">

Success! We have an amazing server connection established. 

# Now I moved on to:
  -Testing the ads and if I have done everything correctly it should give us an image like so :
  <img src="images/githubimage2.JPG">
  
  Success round two baby! We have lift off.
# Next problem:
---
  - We have to connect the dates, prices and sizes for each ascii face and write them to the HTML page for customers to buy.
  - Test the dates, prices and products and see if they show as well as testing the time zone for accurate product uploading.
To do so we can view the progress so far here with this branch:
>  https://github.com/GhostPolymer/ascii.com/tree/base

# Day 2 Testing:
 To make sure the dates, prices and products are working, I went ahead and tested the products first with jest. I wanted to use mocha but jest is just easier to use with React as they are basically made by the same company. Makes things a wee bit easier. 
 - Testing the products
 - Using jest to test connections via Products, Dates, Size,Grid and GridItem.jsx files.
 - Extract or pull the mockDate file and use ProductGrid spec for Jest testing.
 
 End result for testing: Success.
 I did have some issues with the .spec files for Products, Dates and Size but the solution was easy as I just missed the correct spelling for dirnames and maybe a semicolon here or there.
 
 # Day 3 Server patching and adding any missing dependencies and fetching data:
 - Added any eslint missing from the original repo for this project.
 - Updated the server to work around the CORS issue that I'm sure everyone else normally has issues with.
 - Created more ads so the same ad didn't repeat twice.
 - Programmed a fetch feature to get products from Ascii store
 - Create product grid container.
 - Extract 'prop-types' into it's own file.
# Day 4 Create Reducers:
Reducers specify how the application's state changes in response to actions sent to the store so I began with:
- Creating product reducers for sortProducts, products, pageProducts, notAnymore products, loading Products and all products.
- Setup the InfiniteScroll property for unimaginable scrolling ability but on a serious note just checking off another part for              the requirements of the assignment which would be to add your own scrolling script to the project without a plugin.
- Add redux file components.
- Show ads among products every 20 products keeping in mind to not repeat it twice in a row.
# Day 5 Final Touches:
- It's two more days until I hand in the project and it's taken a good amount of time to complete this project. 
- Final polishes by adding restructured app, server and product files which cut loading time in half and made a faster and less      heaver application.
- Final style touches and completion.
# 6 Submit
- Thank you for being on this wild right of an assignment with me as I learn how to complete a React/Redux native project. I have learned a little bit in regards to this project and that is all I can honestly ever ask for in completing a project.
