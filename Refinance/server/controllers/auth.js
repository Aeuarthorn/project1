const bcrypt = require('bcryptjs') //import bcryptjs
const User = require('../models/User') //import model
const jwt = require('jsonwebtoken');
const { token } = require('morgan');


exports.register = async (req, res) => {
    try {
        //Check user
        const { username, password } = req.body;
        var user = await User.findOne({ username }) //ติดต่อกับ model เพื่อค้นหาค่าที่ระบุไว้ ถ้ามีจะจบ loop นี้
        if (user) {
            return res.status(400).send("User not Already exit");
        }
        const salt = await bcrypt.genSalt(10)
        user = new User({
            username,
            password,
        });
        //Endcrypt
        user.password = await bcrypt.hash(password, salt); //เข้ารหัส
        await user.save();  //บันทึก
        res.send('register success');  //แจ้งหน้าบ้านว่าสำเร็จ

    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error!!');
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        var user = await User.findOneAndUpdate({ username }, { new: true });  //time login
        if (user && user.enabled) {
            //Check Password
            const logins = await bcrypt.compare(password, user.password)
            if (!logins) {
                return res.status(400).send('Password Invalid!!')
            }
            //Payload 
            const payload = {
                user: {
                    username: user.username,
                    role: user.role,
                },
            };
            //Generate Token
            jwt.sign(payload, "jwtSecret",
                { expiresIn: 3600 }, (err, token) => {
                    if (err) throw err;
                    res.json({ token, payload })
                });

        } else {
            return res.status(400).send('User Not Found!!');
        }

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error!!");
    }
}

exports.listUser = async (req, res) => {
    try {
        res.send('list User ');
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error!!');
    }
}

exports.editUser = async (req, res) => {
    try {
        res.send('Edit User ')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!')
    }
}

exports.deleteUser = async (req, res) => {
    try {
        res.send('Delete User ')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!')
    }
}
