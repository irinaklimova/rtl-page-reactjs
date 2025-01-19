import {jest, describe, it, expect, beforeAll} from '@jest/globals';
import { Article } from '../types/article';
import { getArticles } from './article';


const article: Article[] = [{
    id: 'id',
    titel: 'titel',
    labelValue: 'labelValue',
    afbeelding: {
        afbeelding: 'imageUrl',
        crops: []
    }
}]
let spy: any;
let res = {
    json: () => Promise.resolve(article)
}

describe('Article Api', () => {
    beforeAll(() => {
        spy = jest.spyOn(global, 'fetch');
    })
    it('returns array of Articles with titel, label and image', async () => {
        spy.mockResolvedValue(res);
        const array = await getArticles();
        expect(array[0]).toHaveProperty('titel');
        expect(array[0]).toHaveProperty('labelValue');
        expect(array[0]).toHaveProperty('afbeelding');
    });
    it('returns the error', async () => {
        const err = new Error('Error');
        spy.mockRejectedValue(err);
        await expect(getArticles()).rejects.toThrow(err);
    });
})