var db = require('../models/index');
var User = require('../models/user')(db.sequelize,db.Sequelize);
var test = {};
// 测试接口
test.test = async function(req,res,next){
    // User.create({name:'jcj',createdAt: Date.now()});
    // var data = await User.findAll();
    var d={a:11} ;
    console.log(1111111111111);
    console.log(db['order']);
    console.log(1111111111111);
    var data = await User.findAll({
        where: {
            [db.sequelize.Op.or]: [{id:3}]
        }});
    data[0].name = 'cca1qq---';
    data[0].save();
    return res.send(data[0]);
    // return res.send(data[0].createdAt.toLocaleString());

}
module.exports = test;