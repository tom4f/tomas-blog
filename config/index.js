const dev = process.env.NODE_ENV !== 'production';

export const serverPath = dev ? 'http://localhost' : 'https://www.frymburk.com';

export const photoApiScript = '/api/photo/read.php?fotoGalleryOwner=_tomas';
export const photoFolder = '/rekreace/fotogalerie_tomas';
export const photoGalleryLink = `${serverPath}/photo-gallery`;

export const blogApiScript = '/rekreace/api/pdo_read_blog_tomas.php';
export const blogApiScriptExt = '_tomas';
//
export const apiPath = dev
  ? 'http://localhost:3000'
  : 'https://tomas-blog.vercel.app';
