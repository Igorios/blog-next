import { BlogPost } from "@/data/@types/BlogPostInterface";
import { ApiService } from "@/data/services/ApiService";
import { useEffect, useState } from "react";

export default function useIndex() {

    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        ApiService.get('/posts').then((res) => setPosts(res.data));
    }, []);
    
    
    // const posts: BlogPost[] = [
    //     {
    //         id: '1',
    //         title: 'Exército pune 17 militares por falha na fiscalização de armas e pede prisão preventiva de outros 6 por furto de metralhadoras',
    //         description: 'No total, 17 militares cumprem prisão disciplinar desde quarta (25). Como não têm participação direta no crime ficarão detidos de um a 20 dias',
    //         picture: 'https://s2-g1.glbimg.com/Y3tWl3MDQaUASOlq-JPOR1EVyao=/124x441:1767x1365/810x456/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/N/s/Jw1OmpT0a14spET70cTg/53287621523-a6f30948e5-k.jpg',
    //         slug: 'nova-pag',

    //     },
    //     {
    //         id: '2',
    //         title: 'Exército de Israel afirma que matou um dos arquitetos do ataque terrorista de 7 de outubro',
    //         description: 'Mais cedo, as forças armadas de Israel afirmaram ter feito operações pontuais por terra no norte da Faixa de Gaza.',
    //         picture: 'https://s2-g1.glbimg.com/Av-6RgjnwgpcBQwagj_M5Sv-vJ0=/0x856:8192x5464/810x456/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/Y/V/cmlwkFTkAD1LOzU79xsg/2023-10-22t070644z-1666685115-rc2gx3aermf9-rtrmadp-3-israel-palestinians-israel-military.jpg',
    //         slug: 'nova-pag',

    //     },
    //     {
    //         id: '3',
    //         title: 'Embaixador de Israel mostra na ONU vídeo de decapitação pelo Hamas',
    //         description: 'O embaixador, em seu discurso na ONU, disse que o grupo terrorista Hamas registrou os ataques com o objetivo de “aterrorizar o povo israelense, colocar medo no coração dos israelenses”.',
    //         picture: 'https://s2-g1.glbimg.com/pAPojBFnj_nDzyosOHYCb98TTwc=/0x150:4305x2572/810x456/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/V/b/5QXDDGSMGD8pIgGxKJXA/000-33z87ch.jpg',
    //         slug: 'nova-pag',

    //     },
    // ];

    return {
        posts,
    };

}
