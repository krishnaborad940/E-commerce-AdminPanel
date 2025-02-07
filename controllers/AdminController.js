const Admin = require("../Models/adminModel")
const path=require('path')
const fs=require('fs')
const passport = require("passport")
const nodemailer=require('nodemailer')
const { CURSOR_FLAGS } = require("mongodb")

module.exports.dashbord=async(req,res)=>{
   
        return res.render('dashbord')
   
}

module.exports.form=async(req,res)=>{
   
    return res.render('form')

}

module.exports.insertAdmin=async(req,res)=>{

    console.log(req.body)
    console.log(req.file)
    let newImg='';
    if(req.file){
        newImg=await Admin.ImgPath+'/'+req.file.filename
    }
    req.body.Image=newImg

let AddAdmin=await Admin.create(req.body)
    return res.redirect('back')

}
module.exports.viewAdmin=async(req,res)=>{
   
    let viewAdminData=await Admin.find()
    return res.render('viewAdmin',{viewAdminData})

}

module.exports.deleteadmin=async(req,res)=>{
    let id=req.params.id;
    let getdata=await Admin.findById(id)
    if(getdata){
        let deletImage= path.join(__dirname,'..',getdata.Image)
        fs.unlinkSync(deletImage)
    }

   
    let deleteData=await Admin.findByIdAndDelete(req.params.id)
    return res.redirect('back')

}
module.exports.updateAdmin=async(req,res)=>{
   
    let singleObj=await Admin.findById(req.query.id)
   
    return res.render('updateAdmin',{singleObj})

}

module.exports.EditAdmin=async(req,res)=>{
   
    let singleData=await Admin.findById(req.body.id)
    if(req.file){


        let oldImg=path.join(__dirname,'..',singleData.Image)
        fs.unlinkSync(oldImg)

        let newImg=await Admin.ImgPath+'/'+req.file.filename
        req.body.Image=newImg

        let updateData=await Admin.findByIdAndUpdate(req.body.id,req.body)
    return res.redirect('viewAdmin')

    }
else{
    // let singledata=await Admin.findById(req.body.aid);
    req.body.Image=singleData.Image;
    let updatedata=await Admin.findByIdAndUpdate(req.body.id,req.body);
    return res.redirect('viewAdmin')
}


   

}

module.exports.MyProfile=async(req,res)=>{
    return res.render('MyProfile')
}

module.exports.Login=async(req,res)=>{
    return res.render('Login')
}


module.exports.loginAdmin=async(req,res)=>{
    return res.redirect('/dashbord')
}

module.exports.changePassword=async(req,res)=>{
    return res.render('changePassword')
}

module.exports.changePass=async(req,res)=>{
    let oldData=req.user

    if(oldData.password==req.body.currentPassword){

        if(req.body.currentPassword!=req.body.NewPassword){
            if(req.body.NewPassword==req.body.ConfirmPassword){
                let change=await Admin.findByIdAndUpdate(oldData._id,{password:req.body.NewPassword})
            }
            else{
                console.log("current and confirm password is not match")
            }
        }
        else{
            console.log("current and new password is match please take differnt password")
        }

    }else{
        console.log("current password is not match")
    }
    return res.redirect('/signOut')
}


module.exports.signOut=async(req,res)=>{
    req.session.destroy(function(err){
    if(err){
        return false;
    }
    else{
        
        return res.redirect("/")
    }
})
}




module.exports.checkEmail = async (req, res) => {
    return res.render('checkEmail');
};

module.exports.checkEmails = async (req, res) => {
    let emailCheck = await Admin.find({ email:req.body.email }).countDocuments();

    if (emailCheck === 1) {
        let passcheck = await Admin.findOne({ email:req.body.email });

        let OTP = Math.floor(Math.random()*100000);
        console.log(OTP);
        res.cookie('otp', OTP);
        res.cookie('email', passcheck.email);

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // ensure this SMTP host is correct
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: "boradkrishna940@gmail.com", // your SMTP email
                pass: "paokimdcptlqeabm", // your SMTP email password
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        // Send email to the user, not a hardcoded email address
        const info = await transporter.sendMail({
            from: 'boradkrishna940@gmail.com', // sender address
            to: "boradkrishna940@gmail.com", // send OTP to the user's email
            subject: "Verify OTP", // Subject line
            html: `<b>Your OTP is here: ${OTP}</b>`, // HTML body
        });

        console.log('Message sent: %s', info.messageId);
       
    }

    return res.redirect('/checkOtp');
};



module.exports.checkOtp=async(req,res)=>{
    return res.render('checkOtp')
}

module.exports.verifyOtp=async(req,res)=>{
    // console.log(req.body)
    if(req.body.otp==req.cookies.otp){
        res.clearCookie('otp')
        return res.redirect('/ForgotPass')
    }
    else{

        return res.redirect('back')
    }
}

module.exports.ForgotPass=async(req,res)=>{
    return res.render('ForgotPass')
}

module.exports.forgotPassword=async(req,res)=>{
    if(req.body.newPassword=== req.body.confirmPassword){
        let lastCheckEmail=await Admin.find({email:req.cookies.email}).countDocuments()
        if(lastCheckEmail==1){
            let lastCheckPass=await Admin.findOne({email:req.cookies.email})
            let updatePassword=await Admin.findByIdAndUpdate(lastCheckPass.id,{password:req.body.password})
            if(updatePassword){
                res.clearCookie('email')
                return res.redirect('/')
            }else{
                console.log("password is not update")
                return res.redirect('back')
            }
        }else{
            console.log("email is not same")
            return res.redirect('back')
        }
    }else{

        console.log("somthing went wrong")
        return res.redirect('back')
    }
}


module.exports.ActiveStatus=async(req,res)=>{

    let AdminSatus=await Admin.findByIdAndUpdate(req.query.adminId,{"Status":false})
    return res.redirect('back')
}

module.exports.DeActiveStatus=async(req,res)=>{
    let AdminSatus=await Admin.findByIdAndUpdate(req.query.adminId,{"Status":true})
    return res.redirect('back')
}