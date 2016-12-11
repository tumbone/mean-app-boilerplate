exports.render = function(req,res){
  res.render('index', {
      title:'Mean Mvc Boilerplate',
      //Render the user object directly in the EJS view
      user: JSON.stringify(req.user)
  });
}
