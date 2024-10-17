<h2>User Interface</h2>
<p>
The user interface of the application is designed to be user-friendly and intuitive.
1: Homepage: Features a grid of images, a search bar, and easy navigation.
2: earch Results: Allows filtering by orientation, color, and supports infinite scrolling.
3: Image Details: Displays larger previews, download options, photographer info, and related images.
4: User Profiles: Showcases photographers' portfolios and their image stats.
5: Collections: Lets users organize and explore images in collections.
6: Login/Sign-Up: Simple, user-friendly forms with social login options.
7: Responsive Design: Optimized for both desktop and mobile devices.
</p>
<h2>Backend</h2>
<p>
1: Storing Images: The backend keeps all the images and their details (like who took them) in a database. When you search for a picture, the backend finds it for you.
2: User Login: When you log in or sign up, the backend checks your info to make sure you’re allowed to access your account.
3: Searching for Images: When you type something in the search bar, the backend looks through the database to find the right pictures that match your keywords.
4: Uploading Photos: When photographers add their pictures, the backend saves them, resizes them if needed, and keeps track of the details.
5: User Profiles: The backend manages user profiles, collections of favorite images, and any settings you have.
6: Tracking Downloads: It tracks how many times an image has been downloaded or viewed, which helps understand what users like.
7: Speeding Up the Site: The backend uses special techniques to make the website load faster and handle many users at once.
</p>
<h2>Recurring</h2>
<p> 
function dispenser(a){
    //This function takes an argument a and returns another function that takes a second argument b.
  return function(b){
    //he second function returns yet another function, glass, which takes a third argument g.
    return function glass (g){
      return "You can drink Water"
      //The glass function always returns the string "You can drink Water," regardless of the arguments passed.
    }
  }
};

let dis= dispenser("yes")

  //Calling dispenser("yes") returns a new function that expects the next argument, b.
dis now holds a function waiting for b.

 let water=dis("cold water")

//Calling dis("cold water") returns another function waiting for the third argument, g.
water now holds a function that expects g

 let cup=water("present")
//Calling water("present") returns the string "You can drink Water".
console.log(cup)
So, cup is set to "You can drink Water."
</p>

<h2>Stateless</h2>
<p>
1. Each Request is Independent

When you use OLX, every action you perform (like searching for items, viewing a product, or contacting a seller) is treated as a separate request. The server processes each request as if it’s happening for the first time, without remembering what you did before.

2. No Memory of Previous Actions

Stateless systems don’t remember your previous steps. For example, if you searched for a car and then looked at a laptop, OLX doesn't remember your search history unless it's stored in cookies or the browser. Each search or action you perform starts fresh.

3. User Session Management

To maintain user experience (like staying logged in or viewing saved items), OLX uses things like cookies, tokens, or local storage on your browser. These methods help identify your session without the server having to remember the state. This makes it easier to log in from different devices without any server-side memory.

4. Scalability and Performance

Since the server doesn’t store session data, OLX can handle a large number of users at the same time more easily. Each server can process requests independently, which helps the site perform faster and handle more traffic.

Example in OLX:

Searching for a Product: When you search for "bikes," OLX's server processes this request independently. If you search again for "cars," it doesn’t connect your previous search.
Viewing an Item: When you click on a product, OLX shows the item details without knowing what you viewed before. Your browsing history is managed by your own browser, not the server.
So, statelessness helps OLX keep things fast and scalable, while still using tokens or cookies to keep you logged in or track simple preferences.
</p>
<h2>I will this discuss about API request method</h2>

<p>
<h4>GET REQUEST</h4>
It is used for search data,view category.

<h4>POST REQUEST</h4>
It is used for post ads,login or sign up request.

<h4>PUT REQUEST</h4>
Such as editing an ad or updating your profile information.

<h4>DELETE REQUEST</h4>
When i need to delete my ad/post or account.

<h4>PATCH REQUEST</h4>
When i need to update my ad picture i this case i will  use patch request.
</p>

