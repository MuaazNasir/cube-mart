
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            title: 'Name of product',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        },
        {
            title: 'category',
            name: 'category',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'categories'
                        }
                    ]
                }
            ]
        },
        {
            name : 'recommended',
            title : 'recommended',
            type : 'boolean'
        },
        {
            name : 'topRated',
            title : 'Top Rated',
            type : 'boolean'
        },
        {
            name : 'mostSaled',
            title : 'Most Saled',
            type : 'boolean'
        },

    ],
    preview: {
        select: {
            title: 'name',
            media: 'image.0.asset',
        },
    },
};
