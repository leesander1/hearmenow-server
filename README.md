Hearmenow Server App
=======================
[![dependencies Status](https://david-dm.org/leesander1/hearmenow-server/status.svg)](https://david-dm.org/leesander1/hearmenow-server)
[![Build Status](https://travis-ci.org/leesander1/hearmenow-server.svg?branch=master)](https://travis-ci.org/leesander1/hearmenow-server)
[![devDependency Status](https://david-dm.org/leesander1/hearmenow-server.svg)](https://david-dm.org/leesander1/hearmenow-server#info=devDependencies)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/leesander1/hearmenow-server/blob/master/license)

**Get the Electron App**: https://hearmenowapp.com

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Built With

* Atom - ergaerga
* Time/Date - moments
* Login - passport
* DB - mongodb / mongoose mlab
* Tasks - cron
* Voice / SMS - twillio
* Email - ?SendGrid?
* Notifications - google cloud messaging (polymer)
* Front-end / Templating - Electron / Polymer & handlebars
* package manager - npm / yarn
* async
* bcrypt
* connect-mongo
* dotenv
* express-session
* body-parser
* express-validator
* serve-favicon
* mongoose
* nodemailer
* passport
* passport-google-oauth
* request
* twilio
* validator


Cheatsheets
-----------

### <img src="https://frontendmasters.com/assets/es6-logo.png" height="34" align="top"> ES6 Cheatsheet

#### Declarations

Declares a read-only named constant.

```js
const name = 'yourName';
```

Declares a block scope local variable.
```js
let index = 0;
```

#### Template Strings

Using the **\`${}\`** syntax, strings can embed expressions.

```js
const name = 'Oggy';
const age = 3;

console.log(`My cat is named ${name} and is ${age} years old.`);
```

#### Modules

To import functions, objects or primitives exported from an external module. These are the most common types of importing.

```js
import name from 'module-name';
```
```js
import * as name from 'module-name';
```
```js
import { foo, bar } from 'module-name';
```

To export functions, objects or primitives from a given file or module.

```js
export { myFunction };
```
```js
export const name = 'yourName';
```
```js
export default myFunctionOrClass
```

#### Spread Operator

The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

```js
myFunction(...iterableObject);
```
```jsx
<ChildComponent {...this.props} />
```

#### Promises

A Promise is used in asynchronous computations to represent an operation that hasn't completed yet, but is expected in the future.

```js
var p = new Promise(function(resolve, reject) { });
```

The `catch()` method returns a Promise and deals with rejected cases only.

```js
p.catch(function(reason) { /* handle rejection */ });
```

The `then()` method returns a Promise. It takes 2 arguments: callback for the success & failure cases.

```js
p.then(function(value) { /* handle fulfillment */, function(reason) { /* handle rejection */ });
```

The `Promise.all(iterable)` method returns a promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first passed promise that rejects.

```js
Promise.all([p1, p2, p3]).then(function(values) { console.log(values) });
```

#### Arrow Functions

Arrow function expression. Shorter syntax & lexically binds the `this` value. Arrow functions are anonymous.

```js
singleParam => { statements }
```
```js
() => { statements }
```
```js
(param1, param2) => expression
```
```js
const arr = [1, 2, 3, 4, 5];
const squares = arr.map(x => x * x);
```

#### Classes

The class declaration creates a new class using prototype-based inheritance.

```js
class Person {
  constructor(name, age, gender) {
    this.name   = name;
    this.age    = age;
    this.gender = gender;
  }

  incrementAge() {
    this.age++;
  }
}
```

:gift: **Credits**: [DuckDuckGo](https://duckduckgo.com/?q=es6+cheatsheet&ia=cheatsheet&iax=1) and [@DrkSephy](https://github.com/DrkSephy/es6-cheatsheet).



### <img src="http://i.stack.imgur.com/Mmww2.png" height="34" align="top"> JavaScript Date Cheatsheet

#### Unix Timestamp (seconds)

```js
Math.floor(Date.now() / 1000);
```

#### Add 30 minutes to a Date object

```js
var now = new Date();
now.setMinutes(now.getMinutes() + 30);
```

#### Date Formatting

```js
// DD-MM-YYYY
var now = new Date();

var DD = now.getDate();
var MM = now.getMonth() + 1;
var YYYY = now.getFullYear();

if (DD < 10) {
  DD = '0' + DD;
}

if (MM < 10) {
  MM = '0' + MM;
}

console.log(MM + '-' + DD + '-' + YYYY); // 03-30-2016
```
```js
// hh:mm (12 hour time with am/pm)
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var amPm = hours >= 12 ? 'pm' : 'am';

hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;

console.log(hours + ':' + minutes + ' ' + amPm); // 1:43 am
```

#### Next week Date object

```js
var today = new Date();
var nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
```

#### Yesterday Date object

```js
var today = new Date();
var yesterday = date.setDate(date.getDate() - 1);
```



###Mongoose Cheatsheet

#### Find all users:
```js
User.find((err, users) => {
  console.log(users);
});
```

#### Find a user by email:
```js
let userEmail = 'example@gmail.com';
User.findOne({ email: userEmail }, (err, user) => {
  console.log(user);
});
```

#### Find 5 most recent user accounts:
```js
User
  .find()
  .sort({ _id: -1 })
  .limit(5)
  .exec((err, users) => {
    console.log(users);
  });
```

#### Get total count of a field from all documents:
Let's suppose that each user has a `votes` field and you would like to count
the total number of votes in your database across all users. One very
inefficient way would be to loop through each document and manually accumulate
the count. Or you could use [MongoDB Aggregation Framework](https://docs.mongodb.org/manual/core/aggregation-introduction/) instead:

```js
User.aggregate({ $group: { _id: null, total: { $sum: '$votes' } } }, (err, votesCount)  => {
  console.log(votesCount.total);
});
```


Deployment
----------

### 1-Step Deployment with Heroku

<img src="http://blog.exadel.com/wp-content/uploads/2013/10/heroku-Logo-1.jpg" width="200">
- Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/)
- In terminal, run `heroku login` and enter your Heroku credentials
- From *your app* directory run `heroku create`
- Run `heroku addons:create mongolab`.  This will set up the mLab add-on and configure the `MONGOLAB_URI` environment variable in your Heroku app for you.
- Lastly, do `git push heroku master`.  Done!

**Note:** To install Heroku add-ons your account must be verified.

---

<img src="http://i.imgur.com/7KnCa5a.png" width="200">
- Open [mlab.com](https://mlab.com) website
- Click the yellow **Sign up** button
- Fill in your user information then hit **Create account**
- From the dashboard, click on **:zap:Create new** button
- Select **any** cloud provider (I usually go with AWS)
- Under *Plan* click on **Single-node (development)** tab and select **Sandbox** (it's free)
 - *Leave MongoDB version as is - `2.4.x`*
- Enter *Database name** for your web app
- Then click on **:zap:Create new MongoDB deployment** button
- Now, to access your database you need to create a DB user
- Click to the recently created database
- You should see the following message:
 - *A database user is required to connect to this database.* **Click here** *to create a new one.*
- Click the link and fill in **DB Username** and **DB Password** fields
- Finally, in `.env` instead of `mongodb://localhost:27017/test`, use the following URI with your credentials:
 - `db: 'mongodb://USERNAME:PASSWORD@ds027479.mongolab.com:27479/DATABASE_NAME'`

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/leesander1/hearmenow-server/tags).

Changelog
---------

### 1.0.0 (Feb 22, 2017)
- Initial Setup

## Authors

* [**Mario Jimenez**] - *[mariots](https://github.com/mariots)*
* [**Lee Sander**](https://github.com/leesander1) - *[leesander.com](https://leesander.com)*
* [**Kevin Taing**](https://github.com/kevintaing86) - *(https://github.com/kevintaing86)*

See also the list of [contributors](https://github.com/leesander1/hearmenow-server/contributors) who participated in this project.

## License

[MIT](https://github.com/leesander1/hearmenow-server/blob/master/license)

## Acknowledgements

* Hat tip to anyone whose code was used
* Project structure and information from [hackathon-starter](https://github.com/sahat/hackathon-starter)
* [Template for README](https://gist.githubusercontent.com/PurpleBooth/109311bb0361f32d87a2/raw/4a39c2139c4caa4686addc1e5dd490170fb82006/README-Template.md)
* The labels used in the issues section were inspired by [this site](https://robinpowered.com/blog/best-practice-system-for-organizing-and-tagging-github-issues/)
* Issue and PR Templates were inspired by [this site](https://www.talater.com/open-source-templates/#)
