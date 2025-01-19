import {NextApiRequest, NextApiResponse} from "next";
import { promises as fs } from 'fs';
import {randomUUID} from "crypto";
import {ARTICLES_COUNT} from "@/app/api/article";
import {Article} from "@/app/types/article";

export const GET = async(req: NextApiRequest) => {
    const file = await fs.readFile(process.cwd() + '/public/assignment.json', 'utf8');
    const parsed = JSON.parse(file);
    let res: Article[] = [];
    parsed.afbeelding.afbeelding = parsed.afbeelding.afbeelding.replace('acc-', '');
    for (let i = 0; i < ARTICLES_COUNT; i++) {
        res.push({...parsed, id: randomUUID()});
    }
    return Response.json(res);
}