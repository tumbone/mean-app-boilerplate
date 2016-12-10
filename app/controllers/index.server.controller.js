exports.render = function(req,res){
  res.render('index', {
      title:'Mean Mvc Boilerplate',
      user: req.user ? req.user.username : ''
  });
}
