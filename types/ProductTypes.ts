export type image = [
    {
        _type: 'image',
        _key: string,
        asset: [Object]
    }
]

export type productType = [
    {
    description: string,
    _id: string,
    category: string[],
    slug: string,
    price: number,
    name: string,
    image: image,
    }
] | [] ;
