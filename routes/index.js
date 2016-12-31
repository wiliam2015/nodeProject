var express = require('express');
var router = express.Router();
var mongodb = require('../database/connectMongoDB');
/* GET home page. */
router.get('/', function(req, res, next) {
//保存测试开始
//  var UserEntity = new mongodb.userModel({
//      name : 'wiliam',
//      age : 22,
//      email :'wiliam@ss.com'
//  });
//    UserEntity.save(function(error,doc){
//        if(error){
//            console.log('error :' + error);
//        }else{
//            console.log(doc);
//            console.log('保存成功');
//        }
//    });
//    res.render('index', { title: 'Express',msg:''});
//保存测试结束
  mongodb.userModel.find({name:'wiliam'}, function(error, docs) {
        if(error){
            console.log('error :' + error);
            res.render('index', { title: 'Express',msg:'查询出错啦'+docs});
        }else{
            console.log(docs);
            console.log('查询成功');
            res.render('index', { title: 'Express',msg:'查出数据啦'+docs});
        }
  });

});

module.exports = router;
