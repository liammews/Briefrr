
export default {
  name: 'briefs',
  title: 'Briefs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
        name: 'publishedAt',
        title: 'Published at',
        description: 'You can use this field to schedule projects where you show them',
        type: 'datetime'
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string'
    },
    {
        name: 'from',
        title: 'From',
        type: 'string'
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image'
     },
    {
        name: 'catagory',
        title: 'Catagory',
        type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
        name: 'link',
        title: 'Link',
        type: 'text',
      },
    {
      title: 'overview', 
      name: 'Overview',
      type: 'PortableText', 
    },
    {
      title: 'background', 
      name: 'Client_Background',
      type: 'PortableText', 
    },
    {
      title: 'audience', 
      name: 'Audience',
      type: 'PortableText', 
    },
    {
      title: 'objectives', 
      name: 'Objectives',
      type: 'PortableText', 
    },
    {
      title: 'delivery', 
      name: 'Delivery',
      type: 'PortableText', 
    },
  ],
}
