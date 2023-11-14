import { useRef, useState, FormEvent } from 'react';
import styles from '../../ui/styles/pages/posts/publish.module.css';
import { ApiService } from '@/data/services/ApiService';

export default function PostsPublish() {

    const [title, setTitle] = useState(''),
        [description, setDescription] = useState(''),
        [picture, setPicture] = useState(''),
        blogEditorRef = useRef<HTMLDivElement>(null);

        async function sendPost(event: FormEvent) {
            event.preventDefault();
            const postContent = blogEditorRef.current?.innerHTML || '';

            if (title.length > 0 && 
                description.length > 0 && 
                picture.length > 0 &&
                postContent.length > 0) {

                await ApiService.post('posts', {
                    data: {
                        title, 
                        description,
                        picture,
                        content: postContent
                    }
                });
                console.log(ApiService);
                resertForm()
             
            }

        }


        function resertForm() {
            setTitle('');
            setDescription('');
            setPicture('');
            if (blogEditorRef.current) {
                blogEditorRef.current.innerHTML = '';
            }
        }

    return (
        <>
            <h2 className='text-center my-8 text-2xl font-semibold'>Novo post</h2>
            <div className='flex justify-center'>
                <form onSubmit={sendPost} method="post">

                    <input className='w-full mb-5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(event) => setTitle(event.target.value)} placeholder='Titulo' value={title} type="text" />

                    <input className='w-full mb-5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(event) => setDescription(event.target.value)} placeholder='Descrição' value={description} type="text" />

                    <input className='w-full mb-5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(event) => setPicture(event.target.value)} placeholder='Imagem' value={picture} type="url" />

                    <div className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40' style={{ resize: "both", overflow: "auto" }} ref={blogEditorRef} contentEditable />

                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 w-full' type='submit'>Publicar</button>
                </form>

            </div>
        </>
    )
}
