import { Request, Response } from 'express';
import { getAllCategoryService } from '../services/getAllCategoryService';

export class getAllCategoriesController {
    async handle (request : Request, response: Response){
        const service = new getAllCategoryService();
        const categories = await service.execute();

        return response.json(categories)
    }
}