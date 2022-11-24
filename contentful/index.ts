// @ts-ignore
import {createClient}  from 'contentful'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.ACCESS_TOKEN!
})

export default client