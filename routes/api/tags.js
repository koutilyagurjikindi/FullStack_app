var router = require('express').Router(0)
var mongoose = require('mongoose')
var Article = mongoose.model('Article')

router.get('/',function(req,res,next){
  Article.findById().distinct('tagList').then(function(tags){
    return res.json({tags: tags})
  }).catch(next)
})

module.exports = router;

