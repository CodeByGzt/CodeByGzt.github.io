var posts=["2023/08/01/Typora + PicGo + OSS 配置图床/","2023/11/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };