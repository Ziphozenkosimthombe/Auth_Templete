const UserName = require('../models/UserName');
const Users = require('../models/UserName');

module.exports = {
    getUserName: async (req, res) => {
        console.log(req.user)
        try{
            const userItems = await UserName.find({userId:req.user.id})
            res.render('user.ejs',{users:userItems})
        }
        catch(err){
            console.log(err)
        }
    },
    postUserName: async (req, res) => {
        try{
            await UserName.create({userId:req.user.id,userName:req.body.userName})
            console.log('UserName has been added!')
            res.redirect('/user')
        }
        catch(err){
            console.log(err)
        }
    },  
}