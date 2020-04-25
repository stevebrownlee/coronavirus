# Beginner JavaScript Review

## Coronavirus Tracker

In this exercise, your task to build a workflow for testing people for the coronavirus infection and then making that people who test poritive are put into isolation.

## Setup

1. Open your terminal and `cd` to your workspace directory.
1. Clone this project.
1. Once the project is cloned, `cd coronavirus` and then run `npm install`.
1. Once the installations are complete, run the `npm run test` command (_see animation below_). You will see all of the tests for your code - which ones pass, and which ones fail. As soon as you make changes to your code, the tests will run automatically, so keep this terminal window open while you are working on this project. When you need to stop working on it, use the `Ctrl+C` keyboard shortcut to stop the tests from running.


> **Note:** All of the code for this project will be created the `src` directory of the project. Open a new terminal session, and `cd` to the project directory again. Then you can `cd src` to change to that directory in your terminal. To check what's already in the `src` directory, use the `ls` command to see its contents.

## Pushing Your Code

Since you cloned an official NSS repository, you don't have permissions to push code to it. What you need to do is push to your own repository. Part of this assessment includes verifying that you make a minimum of 4 commits and pushes of your code.

1. Go to your Github page.
1. Create a new repository named `coronavirus`.
1. Copy the connection URL _(remember to make sure you use the SSH format, not HTTPS)_.
1. In your terminal, make sure you are currently in the project directory.
1. Run the command: `git remote remove origin`
1. Run the command: `git remote add origin paste_connection_url_here`


## Testing the Public

1. Create a `scripts/TestFacility.js` module.
1. Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
1. Define and export a function named `testPerson`.
1. The `testPerson` function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
    1. First name of the person being tested (e.g. "Kelly", "Peter")
    1. Age of the person (e.g. 31, 65)
1. The `testPerson` function must return an object with the following properties on it.
    1. `firstName` whose value comes from the parameter
    1. `age` whose value comes from the parameter
    1. `temperature` whose value is the following code which will generate a random number between 98 and 107.
        ```js
        Math.ceil(Math.random()*9)+97
        ```

#### Checking Your Work

In the `main.js` module, invoke the `testPerson` function and provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the object.


Also look at your terminal window that is running the tests and make sure that the `Pottery object is created with correct properties` test is passing.

Once you have it working, make 5 pieces of pottery in `main.js`.

**THEN PUSH YOUR CODE TO GITHUB**

## Doctor Consultation

1. Define a `scripts/Kiln.js` module.
1. Define and export a function named `firePottery` that is responsible for acting as a kiln.
1. The function must accept the following values as input _(i.e. it needs parameters)_, in the following order. If you don't remember, you can easily [add new properties to objects in JavaScript](https://www.dyn-web.com/tutorials/object-literal/properties.php).
    1. An object representing a piece of pottery that was made at the wheel in the `makePottery` function.
    1. A number specifying the firing temperature of the kiln.
1. The function must add a new property of `fired` with the value of `true` to the object.
1. The function must add a new property of `cracked` to the object.
    1. If the temperature of the kiln is above 2200 degrees then `cracked` property must have a value of `true`.
    1. If the temperature of the kiln is at, or below,  2200 degrees then `cracked` property must have a value of `false`.
1. After both of the new properties have been added, return the augmented object.

#### Checking Your Work

In the `main.js` module, invoke the `firePottery` function for each of the 5 pieces of pottery you created. Ensure you provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the objects and make sure it has the right properties on each.

To check your work, make sure that at least one of your pieces of pottery is fired at a temperature that is too high.

Also look at your terminal window that is running the tests and make sure that the following tests pass.

* `Pottery marked as fired after going in the kiln`
* `Pottery object is cracked when temperature is above 2200`
* `Pottery object is uncracked when temperature is below 2200`

**THEN PUSH YOUR CODE TO GITHUB**

## Display the Catalog

Your next task is to create HTML representations of the pottery you want to sell at the craft fair and display them on the DOM. Then you will track which ones you sell.

### Define DOM Target

1. Create an `<article>` element in the `index.html` file.
1. The article element must have a class of `infected`.

### Create Pottery HTML

1. Create a `scripts/PotteryList.js` module.
1. Define and export a `PotteryList` function.
1. The `PotteryList` function must get the items to be sold from the `PotteryCatalog.js` module.
1. The `PotteryList` function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
    ```html
    <section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">Mug</h2>
        <div class="pottery__properties">
            Item weighs 3 grams and is 6 cm in height
        </div>
        <div class="pottery__price">
            Price is $20
        </div>
    </section>
    ```
1. Once all pottery objects have been converted to HTML representation strings, update the inner HTML of the `<article>` element with that string.

#### Checking Your Work

In the `main.js` module, invoke the `PotteryList` component function. Make sure your web server is running, and then visit http://localhost:8080 and you should see your uncracked pottery displayed. It should look similiar to this.


Then look at your terminal window that is running the tests and make sure that the following tests pass.

* `Pottery is rendered to DOM`

**THEN PUSH YOUR CODE TO GITHUB**

