const dev = process.env.NODE_ENV !== 'production'

export const serverPath = dev ? 'http://localhost/lipnonet/rekreace' : 'https://www.frymburk.com/rekreace'

export const photoApiScript = 'pdo_read_foto_tomas.php'
export const photoFolder = 'fotogalerie_tomas'
export const photoGalleryLink = `${serverPath}/photo-gallery`

export const blogApiScript = 'pdo_read_blog_tomas.php'
export const blogApiScriptExt = '_tomas'
//
export const apiPath = dev ? 'http://localhost:3000' : 'https://tomas-blog.vercel.app'