import ValueSchema from "../models/Value";
import TodoSchema from "../models/Todo";

import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Todos = mongoose.model("Todo", TodoSchema);

}

export const dbContext = new DbContext();
