import { useRouter } from 'next/router';
import { fetchAllArticles } from './api/articles'
import ArticleList   from '../components/ArticleList'

export default function Home( { articles, images, webToken, loginStatus } ) {
    const router = useRouter()

    const filteredArticles = ( filterKey, filterValues ) => {
        const { pathname, query } = router
        return !!query[filterKey]
            ? articles.filter( article => article[filterKey] === query[filterKey] )
            : articles.filter( article => !filterValues.includes(article.category) )
    }

    const filterKey = 'category'
    const filterValues = [ 'projects', 'tomas' ]

    return router.isFallback
        ? <div>
            Loading Blog...
          </div>
        : <ArticleList
            articles = { filteredArticles( filterKey, filterValues ) }
            images = { images} 
            loginStatus = { loginStatus }
            webToken = { webToken }
          />
}

export const getStaticProps = async () => { 
    const allArticles = await fetchAllArticles()
    return {
        props: allArticles,
        revalidate: 10,
    }
}