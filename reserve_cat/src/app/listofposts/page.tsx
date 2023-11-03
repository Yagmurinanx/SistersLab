import Image from "next/image";
const getPostsData = async () =>
{ const res = await fetch('https://jsonplaceholder.typicode.com/postserorr')
return res.json();
}

const getCatData = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random', {cache:"no-store"});
    return res.json();
}


export default async function ListOfPosts(){
     const [posts, cat] = await Promise.all([
        getPostsData(),
        getCatData()
    ]);
        
    
    return <div>
        <Image src={cat.message} alt="cat" width={100} height={100} />
        {posts.map((post: any)=> {
            return <p>{post.title}</p>
        })}
    </div>
}