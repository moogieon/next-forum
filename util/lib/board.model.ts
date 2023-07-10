import mongoose, { Schema, models } from "mongoose";

export const BoardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Board = models?.Test || mongoose.model("Board", BoardSchema);

export default Board;
