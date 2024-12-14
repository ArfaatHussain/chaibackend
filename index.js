
require('dotenv').config();
const express = require('express');
const app = express();
// const port = 3000;


const data = {
    "login": "ArfaatHussain",
    "id": 175181944,
    "node_id": "U_kgDOCnEQeA",
    "avatar_url": "https://avatars.githubusercontent.com/u/175181944?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ArfaatHussain",
    "html_url": "https://github.com/ArfaatHussain",
    "followers_url": "https://api.github.com/users/ArfaatHussain/followers",
    "following_url": "https://api.github.com/users/ArfaatHussain/following{/other_user}",
    "gists_url": "https://api.github.com/users/ArfaatHussain/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ArfaatHussain/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ArfaatHussain/subscriptions",
    "organizations_url": "https://api.github.com/users/ArfaatHussain/orgs",
    "repos_url": "https://api.github.com/users/ArfaatHussain/repos",
    "events_url": "https://api.github.com/users/ArfaatHussain/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ArfaatHussain/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2024-07-10T04:40:54Z",
    "updated_at": "2024-12-06T10:58:57Z"
  }
  
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/twitter',(req,res)=>{

    res.send("Arfaat twitter account")
})

app.get('/login',(req,res)=>{
    res.send("<h1> Please login </h1>")
})

app.get('/github',(req,res)=>{
    res.json(data);
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});   