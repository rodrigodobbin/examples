# Grunt

To run the example you will need [Grunt](https://gruntjs.com/) installed in your machine.

`$ npm install -g grunt-cli`

Now that you have Grunt installed and are in this path, let's install the npm dependecies for this project by running:

`$ npm install`

---

Sass Task -> Run the compiler and transform the `scss/app.scss` file into css:

`$ grunt sass`

Watch Task -> Listen to file changes and on save compile it using the sass task:

`$ grunt watch`

Cssmin Task -> Run the compiler and minify the `css/app.css` file into `css/app.min.css`:

`$ grunt cssmin`

Serve Task (task that we register manually) -> Runs the Sass Task then the Watch Task:

`$ grunt serve`

Serve Build (task that we register manually) -> Runs the Cssmin Task:

`$ grunt build`

All the `.scss` files are in the `scss` folder, after you compile it, the `.css` file will be in the `public/css` folder.

---

Grunt allow us to center some configuration in a file, we use the `config.json` file for this.
And we set it to be equals `pkg` inside our `initConfig` method.

---

If you want to see the result in the browser (we have a simple express server to serve our files):

`$ npm start`

## What is covered here?

In this example we can see:

1. Compile scss to css
2. Minify css code
3. Watch task
