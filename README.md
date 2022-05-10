# hacker-news-app
This is the project I made for the start2impact javascript advanced path.

## Table of Content
* [Description](#Description)
* [Installation](#Installation)
* [Built](#Built)
* [Dependencies](#Dependencies)
* [DevDependencies](#DevDependencies)
* [Author](#Author)
* [License](#License)

## Description
For the realization of the app I used the external [hacker news](https://github.com/HackerNews/API) service to report updates in real time
of the tech world. Following the documentation I contacted [the API](https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty)
to retrieve the list of ids, after which for each of them I used another API to link the respective news, the name of the author and the upload date.

![](src/assets/imgs/screenshot.png)
[click to watch](https://giovannivalastro.github.io/hacker-news-app/) 

## Installation
If you want to clone the repository type the command:
```
git clone https://github.com/GiovanniValastro/hacker-news-app
  ```
## Built
* HTML
* CSS
* Javascript

## Dependencies
* [axios: 0.27.2](https://www.npmjs.com/package/axios)
* [lodash: 4.17.21](https://www.npmjs.com/package/lodash)
 
## DevDependencies
* [webpack: 5.72.0](https://www.npmjs.com/package/webpack)                      
* [webpack-cli: 4.9.2](https://www.npmjs.com/package/webpack-cli)                     
* [webpack-dev-server: 4.8.1](https://www.npmjs.com/package/webpack-dev-server)
* [html-webpack-plugin: 5.5.0](https://www.npmjs.com/package/html-webpack-plugin)
* [css-loader: 6.7.1](https://www.npmjs.com/package/css-loader)
* [style-loader: 3.3.1](https://www.npmjs.com/package/style-loader)
* [gh-pages: 3.2.3](https://www.npmjs.com/package/gh-pages)

## Author
For more information visit [my website](https://giovannivalastro.github.io/).

## License
Distributed under the MIT License. See [LICENSE.txt](https://github.com/GiovanniValastro/hacker-news-app/blob/master/LICENSE) for more information.
