import mongoose,{Schema} from "mongoose";
import jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    username :{
        type:String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index:true,
    },
    email :{
        type:String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    email :{
        type:String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    fullname :{
        type:String,
        required : true,
        trim : true,
        index:true
    },
    avatar :{
        type:String, //cloudinary url use krenge like aws but it's free
        required : true,
    },
    avatar :{
        type:String,
    },
    watchHistory:[{
        type : Schema.Types.ObjectId,
        ref : "Video"
    }

    ],
    password : {
        type : String,
        reuqired : [true , "Password is required"]
    },
    refreshToken : {
        type:String
    }

},
{
    timestamps : true  //createdAt and updated At
}
)

userSchema.pre("save",async function(next){
    
})





export const User = mongoose.model("User",userSchema)