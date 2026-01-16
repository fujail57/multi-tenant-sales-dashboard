// fetch my blog ::::::::
blogRouter.get("/my-blog", async (req, res) => {
  const body = req.body;
  // const allBlogs = await blogDb.find({});
  const myBlogs = await blogDb.find({ createdBy: req.user.id }).populate("createdBy");
  return res.render("myblog", {
    blogs: myBlogs,
    user: req.user,
  });
});

//  add comments ::::::::::::  do it later
blogRouter.post("/comment/:blogId", async (req, res) => {
  await commentDb.create({
    comment: req.body.comment,
    blogId: req.params.blogId,
    createdBy: req.user.id,
  });
  return res.redirect(`/blog/${req.params.blogId}`);
});