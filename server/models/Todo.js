import mongoose from "mongoose"
const Schema  = mongoose.Schema;

const Todo = new Schema (
  {
    description : {type: String, required: true},
    completed : {type: Boolean, required: true},
    user : {type: String, required: true},
  },
  {
    timestamps: true, toJSON: { virtuals: true}
  }
)

export default Todo