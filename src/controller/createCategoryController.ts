import { createCategoryService } from "../services/createCategoryService"
import { Request, Response } from "express"

export class createCategoryController{
    async handle(request: Request, response: Response){
        const {name, description} = request.body
        const service = new createCategoryService()
        const result = await service.execute({name, description})
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        else{
            return response.json(result);
        }

    }
}