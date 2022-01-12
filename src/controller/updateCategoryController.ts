import { Request, Response } from "express";
import { updateCategoryService } from "../services/updateCategoryService";

export class updateCategoryController {
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const { name, description} = request.body

        const service = new updateCategoryService
        const result = await service.execute({id, name, description});

        if(result instanceof Error){
            return response.status(400).json(result)
        }
        else{
            return response.json(result)
        }
    }
}