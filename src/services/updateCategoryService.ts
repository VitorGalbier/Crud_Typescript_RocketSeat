import { type } from "os";
import { getRepository } from "typeorm";
import { Category } from "../entities/category";

type categoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class updateCategoryService{
    async execute({id, name, description} : categoryUpdateRequest){
        const repo = getRepository(Category);
        const category = await repo.findOne(id);

        if(!category){
            return new Error("Não existe")
        }
        else{
            category.name = name ? name : category.name;
            category.description = description ? description : category.description
            await repo.save(category);
            return category;
        }

    }
}