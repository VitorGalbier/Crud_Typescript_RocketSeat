import { Router } from "express";
import { createCategoryController } from "./controller/createCategoryController";
import { deleteCategoryController } from "./controller/deleteCategoryController";
import { getAllCategoriesController } from "./controller/getAllCategoriesController";
import { updateCategoryController } from "./controller/updateCategoryController";

const routes = Router();

routes.post("/categories", new createCategoryController().handle);
routes.get("/categories", new getAllCategoriesController().handle);
routes.delete("/categories/:id", new deleteCategoryController().handle);
routes.put("/categories/:id", new updateCategoryController().handle)

export { routes };