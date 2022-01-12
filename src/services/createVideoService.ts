import { getRepository } from "typeorm";
import { Category } from "../entities/category";
import { Video } from "../entities/video";

type videoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class createVideoService{
    async execute({name, description} : videoRequest){ /*Quero receber isso do video request */
        const repo = getRepository(Video);
        const repoCategory = getRepository(Category);

        if(!await repoCategory.findOne(category_id)){
            return new Error("categoria não existe")
        }
        else{
            const video = repo.create({name, description, duration, category_id});

            await repo.save(video);

            return video;
        }
    }
}