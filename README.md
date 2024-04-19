# Spring Slider

Spring Slider is a [Swiper](https://swiperjs.com) template with a fancy "spring" transition effect between slides.

It can be easily integrated into your [Framework7](https://framework7.io) or [Ionic](https://ionicframework.com) app as Swiper already integrated into these frameworks.

## Features

- it is based on [Swiper](https://swiperjs.com) and reuses modified "Creative" effect, so it supports all relevant Swiper features
- any content can be placed within slides
- can be actually any size (aspect ratio)

## Package

In the package you will find:

- static demo - using plain HTML, CSS, and JS
- modules demo - project using ES modules created with Vite
- all required extra styles
- all required JavaScript to make it work
- instructions on how to build, run and preview the project

<!-- STORE_END -->

## Project Structure

This project uses [Vite](https://vitejs.dev) for development and bundling the production build.

- `/demo-static/` - folder with static demo using plain HTML, CSS and JS files
- `/demo-vite/` - folder with `.html`, `.js`, `.scss` source files. These files are processed by Vite during development, and will be bundled on production build.
- `/assets/` - folder with static assets (usually images) which are not processed by Vite during development, but still will be bundled on production build.
- `/www/` - folder with production build bundled with Vite (this folder will appear when you run a command to create production build).

### Dependencies

First of all, we need to install all dependencies, run in terminal:

```
npm i
```

### Development

To launch development server (with hot reload), run the following command in terminal:

```
npm run dev
```

And the project will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

To create a production build, run the following command in terminal:

```
npm run build
```

And production-ready project will be available in `/dist/` folder.

## Connect to Git

It is possible to connect this project folder to the new repository. For example for GitHub:

1. Create new GitHub repository at https://github.com/new

2. Initialize Git. In terminal run:

   ```
   git init
   ```

3. Add remote origin. Replace $USERNAME and $REPOSITORY with your GitHub username and newly created repository name:
   ```
   git remote add origin https://github.com/$USERNAME/$REPOSITORY.git
   ```

That is all, after that you can track, commit and push/pull to repo, for example:

```
git add .
git commit -m "initial commit"
git push origin master
```
