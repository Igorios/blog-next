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
        case 'DELETE':
            return handleDelete(req, res)
        default:
            res.status(405).send({error: "Metódo não permitido"});
    }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {

    const post = await PostApi.get('/', {
        params: {
            id: req.query.postId
        }
    }); 

    if (post.data) {
        res.status(200).json(post.data);
    } else {
        res.status(404).send({error: 'Post não encontrado'})
    }

}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {

    await PostApi.delete('/', {
        params: {
            id: req.query.postId
        }
    }); 

    res.status(200).end();

}

