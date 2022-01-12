import { getRepository } from "typeorm";
import { Category } from "../entities/category";

export class getAllCategoryService{
    async execute(){
        const repo = getRepository(Category)
        const categories = repo.find(); /*busca tudo de categoria */
        return categories;
    }
}