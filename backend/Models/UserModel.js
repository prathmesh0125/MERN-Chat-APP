const mongoose = require("mongoose");
const bcrypt =require("bcryptjs")

const userData=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profileimg:{type:String,
    default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
}, {
    timestamps: true,
  }
);

userData.methods.matchPassword= async function (enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
}

userData.pre('save',async function (next){
  if(!this.isModified){
    next();
  }
  const salt= await bcrypt.genSalt(10);
  this.password=await bcrypt.hash(this.password,salt);
})
const User=mongoose.model("user",userData);

module.exports=User;
