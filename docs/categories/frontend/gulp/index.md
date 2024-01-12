# 简介

Gulp是一个基于node的流程管理工具，它可以实现将一系列有组织的任务，按照编程逻辑进行执行，实现开发甚至其他方面的任务管理。

前端开发已经不再只是搞搞样式，处理处理交互那么简单，前后端分离，后端只为前端提供api数据接口，以前url路由、html结构都需要后端来架构，如今这些全靠前端来处理，前端也具备了工程性。

这几年，模块化开发已经成为web应用前端开发的共识。以往套上jQuery走天下的时代已经过去了，前端已经发展成为复杂的大型应用开发工作。以SPA（Single Page Application）为代表的单页应用成为现在很多大公司发布前端产品的形式，以往以html+css+js的前端在这里已经不适用了，将所有资源进行打包，正是解决这种需求的方案，webpack等打包工具也孕育而生。

一年多以前，我接触的前端和上面的“以往的前端”并无二致，直到我进入morningstar，才逐渐认识到自己在前端领域是多么肤浅。我在自己的博客中，多次把自己工作中认知的，morningstar的开发pattern进行分享。同时，我现在所在的项目也正是使用gulp+webpack进行开发的，因此，我希望通过撰写（翻译）这本手册，既让自己重新回顾一下gulp的使用，以及希望在这个过程中有新的收获。

同时，我打算自己写中文手册，也是因为苦于没有比较好的中文手册给刚入门的同学使用，所以希望趁工作回家后的时间，快速的写出一本针对中国开发者快速入门和理解的文档。

- [gulp官方文档: https://gulpjs.com/](https://gulpjs.com/)
- [gulp中文文档: https://www.gulpjs.com.cn/](https://www.gulpjs.com.cn/)

我以前都是以文章的形式分享技术内容，我觉得技术的东西，用文章那种分散性的形式发表，会让人知识体系比较混乱，仅仅适合解决一些具体的细节性技术问题，而采用book的形式分享，则更有利于形成完整的知识体系。这是我第一次写一份完整的文档，并且阅读了不少英文材料，但是感觉还是不够详细，如果你有什么意见或觉得不足的地方，可以通过github、博客等各个渠道向我反馈。