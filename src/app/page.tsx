'use client'
import styles from "./page.module.css";
import {getArticles} from "@/app/api/article";

import ArticleComponent from "@/app/components/article";
import {useEffect, useRef, useState} from "react";
import {Article} from "@/app/types/article";

export default function Home() {
    const [articles, setArticle] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const sectionRef = useRef<HTMLSelectElement>(null);
    useEffect(() => {
        getArticles().then(res => setArticle(res));
    }, []);
    useEffect(() => {
        const loadArticles = (e: Event) => {
            if (sectionRef.current && window.innerHeight + window.scrollY > sectionRef.current.scrollHeight && !loading) {
                setLoading(true);
                getArticles().then(res => {
                    setArticle([...articles, ...res]);
                    setLoading(false);
                });
            }
        };
        window.addEventListener('scroll', loadArticles);
        return () => {
            window.removeEventListener('scroll', loadArticles);
        }
    }, [articles]);
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.section} ref={sectionRef}>
                    {articles.map(article => <ArticleComponent key={article.id} article={article}/>)}
                </section>
            </main>
        </div>
    );
}
