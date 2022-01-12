import { getRepository } from "typeorm";
import { Category } from "../entities/category";


export class deleteCategoryService{
    async execute(id: string){
        const repo = getRepository(Category)
        if(!await repo.findOne(id)){ /*Se a categoria não existir, retornar um erro */
            return new Error ("A categoria não existe")
        }
        else{
            await repo.delete(id);
        }

    }
}