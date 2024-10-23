const User = require('../model/user.model');

exports.createUser = async (req,res) => {
    try {
        let user = await User.findOne({username: req.body.username , isDeleted : false});
        if(user !== null) return res.status(400).json({message : 'user Is already Exists'});
        user = await User.create({...req.body});
        res.status(201).json({message : "user Was Created....",user});
    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message : 'Internal Server Error'});
    }
};


