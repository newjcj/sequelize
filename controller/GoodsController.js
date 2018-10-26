var db = require('../models/index');
var User = require('../models/user')(db.sequelize,db.Sequelize);
var Goods = require('../models/goods')(db.sequelize,db.Sequelize);
var goods = {};
// 测试接口
goods.list = async function(req,res,next){
    // Goods.user = Goods.belongsTo(User1,{ foreignKey: 'user_id' })
    User.hasMany(Goods, {foreignKey:'user_id'});
    // }).then(ress => {
    //     console.log(1111)
    //     console.log(ress)
    //     // ress.getUser()
    //     res.send(ress)
    // })
    var data = await User.findOne({
            where:{
                id: 1
            },
            include: {
                model: Goods
            }
        });
    // // data.getgoods()
    // // where: {
    // //     [db.sequelize.Op.or]: [{id:1}]
    // // }
    // // console.log(data[0])
    // // data[0].name = 'cca1qq---2221';
    // // data[0].save();
    // // data[0].getGoods().then(re => {
    // //     console.log(111)
    // //     console.log(re)
    // // })
    return res.send(data);
    // return res.send(data[0].createdAt.toLocaleString());

}
module.exports = goods;