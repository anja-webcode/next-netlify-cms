export default {
  cms_manual_init: true,
  backend: {
    // name: 'github',
    // repo: 'username / name of the repo',
    name: 'test-repo',
    branch: 'main',
  },
  publish_mode: 'editorial_workflow',
  media_folder: 'public/img',
  public_folder: 'img',
  // site_url: 'blog.incode.com',
  // display_url: 'https://blog.incode.com/',
  slug: {
    encoding: 'ascii',
    clean_accents: true,
    sanitize_replacement: '-',
  },
  collections: [
    {
      name: 'blog',
      label: 'Blog Post',
      folder: 'posts',
      create: true,
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
        },
        {
          label: 'Featured Image',
          name: 'thumbnail',
          widget: 'image',
          required: false,
        },
        {
          label: 'Author',
          name: 'author',
          widget: 'string',
          default: 'Admin',
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
      ],
    },
  ],
}
