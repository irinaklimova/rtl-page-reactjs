'use client'
import styles from "./article.module.css";
import type {Article} from "@/app/types/article";

export default function Article({article}: {article: Article}) {
    const getCroppedImg = (width: number)=> {
        return article.afbeelding.crops.find((crop) => crop.width === width)?.path;
    }
    return (
        <article>
            <a href='#' className={styles.link}>
                <div className={styles.picture}>
                    <picture>
                        <source media="(max-width: 767px)" srcSet={getCroppedImg(512)} />
                        <source media="(min-width: 768px)" srcSet={getCroppedImg(1024)} />
                        <img className={styles.image} alt={article.titel} src={article.afbeelding.afbeelding} width="auto" />
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
