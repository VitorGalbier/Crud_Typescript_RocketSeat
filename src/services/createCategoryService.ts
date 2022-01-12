import { getRepository } from "typeorm";
import { Category } from "../entities/category";

type categoryRequest = {
    name: string;
    description: string;
}

export class createCategoryService{
    async execute({name, description}:categoryRequest): Promise<Category | Error> /*o que eu espero receber*/{
        const repo = getRepository(Category) /*Quero que retorne o Category */
        //select + from Categories where name = name limit 1
        if(await repo.findOne({name})){
            return new Error("Já existe");
        }
        
        const category = repo.create({ /*Vai criar um objeto de categoria para poder salvar */
            name,
            description
        })
        await repo.save(category);
        return category
    }
}