import "../css/style.css";
import axios from "axios";
import _ from "lodash";

let box = document.querySelector(".box");
let load = document.getElementById("btn");

showNews();

async function showNews() {
  let newsItem = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json");
  let newsId = 0;
  createElement(newsItem.data, newsId);

  load.addEventListener("click", function () {
    newsId += 10;
    createElement(newsItem.data, newsId); 
  });
}

function createElement(array, index) {
  Promise.all(array.slice(index, index + 10).map((item) => 
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
    .then(res => res.data)))
    .then(( res => { 
      res.forEach(news => {
        box.insertAdjacentHTML("beforeend",
                             `<div class ="news">
                                <a href = ${_.get(news, "url", location.href)} target =_blanck>
                                  ${_.get(news, "title", "title")} 
                                </a>
                                <span class = "news-by">
                                  by ${_.get(news, "by", "author")} 
                                </span>
                                <span class = "news-time">
                                  ${timeDifference(Date.now(), news.time * 1000)} ago
                                </span> 
                              <div>`
        );
      });     
    }))
      .catch(error => {
        box.insertAdjacentHTML("beforeend",
                             `<div class="alr">
                                Sorry an error was detected.<br>  
                                <span>${error}</span>
                              </div>`   
        );
      });       
}      

function timeDifference(timeNow, timeNews) {
  let minute = 60 * 1000;
  let hour = minute * 60;
  let day = hour * 24;

  let timeAgo = timeNow - timeNews;

  if (timeAgo < minute) {
    return Math.round(timeAgo / 1000) + " seconds";
  } else if (timeAgo < hour) {
    return Math.round(timeAgo / minute) + " minutes";
  } else if (timeAgo < day) {
    return Math.round(timeAgo / hour) + " hours";
  }
}
