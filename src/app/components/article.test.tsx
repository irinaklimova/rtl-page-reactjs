import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import ArticleComponent from './article';
import { Article } from './../types/article';

const article: Article = {
    id: 'id',
    titel: 'titel',
    labelValue: 'labelValue',
    afbeelding: {
        afbeelding: 'imageUrl',
        crops: []
    }
}

describe('ArticleComponent', () => {
    it('renders a header with label', () => {
        render(<ArticleComponent article={article}/>);
        const banner = screen.getByRole('banner');
        expect(banner).toHaveTextContent(article.labelValue);
    });
    it('renders a header with title', () => {
        render(<ArticleComponent article={article}/>);
        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent(article.titel);
    });
    it('renders an image with correct url', () => {
        render(<ArticleComponent article={article}/>);
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', article.afbeelding.afbeelding)
    });
});