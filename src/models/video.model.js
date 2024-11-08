import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({

    videoFiles:{
        type : String,
        required : true
    },
    thumbnails : {
        type : String, //cloudinary
        required : true

    },
    title : {
        type : String,
        required : true
    },
    description: {
        type : String, 
        required : true

    },
    duration : {
        type : Number // not given by user cloudinary will give
    },
    views :{
        type : Number,
        default :0
    },
    isPublished:{
        type : true,
        default : true
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }

},
  {
    timestamps : true, //updatedAt and createdAt
  }

)
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoSchema);