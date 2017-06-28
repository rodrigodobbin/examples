# SCSS

To run the example you will need [GruntJS](https://gruntjs.com/) installed in your machine.

`$ npm install -g grunt-cli`

Now that you have Grunt installed and are in this path, let's install the npm dependecies for this project by running:

`$ npm install`

---

To run the compiler and transform the `scss/app.scss` file into css:

`$ grunt sass`

To run the compiler, transform the `scss/app.scss`file into css and watch the code that your are doing:

`$ grunt watch`

All the `scss` code are in the `scss` folder, after you compile it, the `css` code will be in the `public/css` folder.

---

If you want to see the code in the browser (we have a simple express server to serve our files):

`$ npm start`
