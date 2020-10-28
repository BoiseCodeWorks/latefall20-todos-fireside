import { dbContext } from "../db/DbContext";
import {BadRequest} from "../utils/Errors"
class TodosService {
  async delete(todoId, user) {
    let exists = await this.findById(todoId)
    // @ts-ignore
    if(!exists || exists.user != user){
      throw new BadRequest("This does not exist or you are not the owner");
    }
    // await dbContext.Todos.findByIdAndDelete(todoId)
    await dbContext.Todos.findOneAndDelete({_id: todoId})

    return "Succesfully Deleted"
  }
  async edit(todoId, body) {
    let exists = await this.findById(todoId)
    // @ts-ignore
    if(!exists || exists.user != body.user){
      throw new BadRequest("This does not exist or you are not the owner");
    }
    // return await dbContext.Todos.findByIdAndUpdate(todoId, body)
    return await dbContext.Todos.findOneAndUpdate({_id: todoId}, body, {new: true})

  }
  async create(body) {
    return await dbContext.Todos.create(body)
  }
  async find(query = {}) {
    return await dbContext.Todos.find(query)
  }
  async findById(id) {
    return await dbContext.Todos.findById(id)
  }


}
export const todosService = new TodosService();