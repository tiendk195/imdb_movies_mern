import mongoose, { Schema } from "mongoose";
import { optionModels } from "./optionModels.js";
export default mongoose.model(
  "Favorite",
  mongoose.Schema(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      mediaType: {
        type: String,
        required: true,
        enum: ["movie", "tv"],
      },
      mediaId: {
        type: Number,
        required: true,
      },
      mediaTitle: {
        type: String,
        required: true,
      },
      mediaPoster: {
        type: String,
        required: true,
      },
    },
    optionModels
  )
);
