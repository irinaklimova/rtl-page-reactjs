import {Article} from "@/app/types/article";
export const ARTICLES_COUNT = 20;

export async function getArticles(): Promise<Article[]> {
    const res = await fetch('http://localhost:3000/api/articles');
    return await res.json();
}