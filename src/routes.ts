import {Router} from "express"
import { MessageController } from "./controllers/MessageController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController
const userController = new UsersController();
const messagesController = new MessageController();

routes.post("/settings", settingsController.create)
routes.get("/settings/:username", settingsController.findByUserName)
routes.put("/settings/:username", settingsController.update)


routes.post("/users", userController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser) 

export {routes}