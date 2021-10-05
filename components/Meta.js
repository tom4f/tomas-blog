import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Tomáš Kučera - Self-Taught Web Developer',
  keywords: 'React, TypeScript, JavaScript, HTML, CSS, SASS, PHP, MySQL, NextJS, React Native',
  description: 'My Web Development Projects',
}

export default Meta
