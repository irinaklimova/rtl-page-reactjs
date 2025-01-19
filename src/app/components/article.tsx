'use client'
import styles from "./article.module.css";
import type {Article} from "@/app/types/article";

export default function Article({article}: {article: Article}) {
    return (
        <article>
            <a href='#' className={styles.link}>
                <div className={styles.picture}>
                    <picture>
                        <source media="(max-width: 767px)" srcSet={article.afbeelding.afbeelding} />
                        <source media="(min-width: 768px)" srcSet={article.afbeelding.afbeelding} />
                        <img className={styles.image} alt={article.titel} src={article.afbeelding.afbeelding} width="250" height="100" />
                    </picture>
                </div>
                <header className={styles.header}>
                    <span className={styles.label}>{article.labelValue}</span>
                    <h3>{article.titel}</h3>
                </header>
            </a>
        </article>
    )
}
