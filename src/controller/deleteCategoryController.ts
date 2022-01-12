import { Request, Response } from 'express';
import { deleteCategoryService } from '../services/deleteCategoryService';

export class deleteCategoryController{
    async handle(request: Request, response: Response){
        const { id } = request.params

        const service = new deleteCategoryService;
        
        const result = await service.execute (id)
        
        if(result instanceof Error){
            return response.status(400).json();
        }
        else{
            return response.status(204).end(); /*204 = change */
        }
    }
}