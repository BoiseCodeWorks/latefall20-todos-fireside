import { todosService } from "../services/TodosService";
import BaseController from "../utils/BaseController"
export class TodosController extends BaseController {
  constructor() {
    super("api/:userName/todos");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .put("/:todoId", this.edit)
      .delete("/:todoId", this.delete)
  }
  async delete(req, res, next) {
    try {
      let user = req.params.userName
      res.send(await todosService.delete(req.params.todoId, user))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let user = req.params.userName
      req.body.user = user
      res.send(await todosService.edit(req.params.todoId, req.body))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let user = req.params.userName
      req.body.user = user
      res.send(await todosService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      let queries = req.query
      let gamingTags = req.query.gamingTags
      let userId = req.params.userName
      res.send(await todosService.find({ user: userId }))
    } catch (error) {
      next(error)
    }
  }
}