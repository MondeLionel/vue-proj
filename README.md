

A SPA (Single Page App.) using Vue.js, vue-cli webpack template, SASS, Pugjs and consumes Foursquare API, especially public '/venues' endpoint. With that data,  you can search for cafes, pizza or bars(Yes, even places deemed uncouth) in any location you want. Results are shown in a grid interface and your last ten recent searches are there for you to visit again. When you click on one of the venues, application will take you to appropriate detail page where you can browse pictures of the place and tips by other users.

#note that many geolocation APIs including Foursqaure, Instagram, and all of the Google APIs have placed new and remarkablely tedious monetization 'strangleholds'. Because of this, the experience will not be as smooth as it could be

### Demo
https://vue-foursquare.surge.sh

### Prerequisites

Running on a localhost is not recommended unless actively developing(refer to Demo link instead) if you must and if you insist, do use node v6.11.1 and use the ffg commands:

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:3003
yarn start

```

## Running the tests and linters

Because of time constraints, tests and code coverage tasks are not ready for this project. But project makes heavy use of linters (ESLint, Stylelint and as a formatter, Prettier). All linting tasks are ready for your use; they also check your styles and scripts on every pre-commit.

If you use an text-editor or an IDE that has support for extensions of the mentioned above libraries you can have the comfort of a very robust development environment :)

## Tidbits/ Technologies used and why.
1. Pug - For all the lazy FE devs in the world.
2. Sass - for everyone who hates writing css to the core
3. VueJS - For all the developers who like things that are well documented with a boatload of active developers.
4. NodeJS - Well, because Node.
5. Webpack - Because it comes with the Vue template

## No maps?
No. The use case would have been fine but maps are essetially much better when they serve an actual purpose. Also because Google is getting very stingy with their Maps API. Project was using Vuetify plugin for google maps geolocation autocomplete. But every keystroke equals an API call! The limits on API calls is very stringent thus was removed from the project. Now using Algolia!! 