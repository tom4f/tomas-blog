import { serverPath } from '../config'
import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'
import NextImage from './NextImage'

export default function ArticleItem( { article, images, loginStatus } ) {

    const imagePath = `${serverPath}/fotogalerie_lucka/${article.image}.jpg`

    const getImageParamsFromDB = images.find( img => img.id === article.image )

    return (
        <Link href = { `/${article.title_url.toLowerCase()}` } >

            <a className={articleStyles.card}>

                <aside>
                    <NextImage src={ imagePath } imageParams={ getImageParamsFromDB }  width='200px' text={false} />
                </aside>

                <div>
                    { loginStatus
                        ? <span style={{ color: 'green' }}>Uprav :-)&nbsp;</span>
                        : null }
                        
                    <small>{ article.date } </small>&nbsp;&nbsp;
                    <i>{ article.category }</i>
                    <h3>{article.title}</h3>
                    {article.intro}
                </div>

            </a>

        </Link>
    )
}