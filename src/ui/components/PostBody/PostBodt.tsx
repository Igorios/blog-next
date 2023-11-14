import { BlogPost } from '@/data/@types/BlogPostInterface';
import styles from './PostBodt.module.css';

export default function PostBlog({ post }: { post: BlogPost }) {
    return (
        <div className={styles.postContainer}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <img className={styles.postPicture} src={post.picture} alt={post.title} />

            <div dangerouslySetInnerHTML={{__html: post.content}} className={styles.postContent} />
            
        </div>
    )
}