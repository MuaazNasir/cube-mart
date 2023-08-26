export default {
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name : 'name',
            title : 'category name',
            type : 'string',
        },
        {
            name : 'image',
            title : 'image',
            type : 'image',
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}