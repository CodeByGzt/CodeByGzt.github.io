var posts=["2023/10/21/Docker学习笔记/","2023/08/01/Typora + PicGo + OSS 配置图床/","2023/12/05/Vue3快速上手/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };