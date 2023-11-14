import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { BlogPost } from "@/data/@types/BlogPostInterface";

const PostApi = axios.create({
    baseURL: 'http://localhost:3002/api/posts',
    headers: {
        'Content-Type': 'application/json'
    }
});


export default async(req: NextApiRequest, res: NextApiResponse) => {
    switch(req.method) {
        case 'GET':
            return handleGet(req, res)
        case 'POST':
            return handlePost(req, res)
        case 'PUT':
            return handlePut(req, res)
        default:
            res.status(405).send({error: "Metódo não permitido"});
    }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    const posts = await PostApi.get('/'); 
    res.status(200).json(posts.data);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {

    const newPost = req.body.data as BlogPost;

    newPost.slug = newPost.title
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^\w-]+/g, '')

    const createdPost = await PostApi.post('/', newPost); 
    res.status(201).json(createdPost.data);
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {

    const newPost = req.body.data as BlogPost;
   
    await PostApi.put('/', newPost, {
        params: {
            id: newPost.id
        }
    }); 

    res.status(200).end();
}
