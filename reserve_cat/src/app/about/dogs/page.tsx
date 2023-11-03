
import Image from "next/image";

const getDogData = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random', {cache:"no-store"});
    return res.json();
}


export default async function AboutDogs(){
     const  dog = await (
       getDogData());
        
    
    return <div>
       <div className="gap-8 columns-3 ">
        <Image class="px-3 py-2 "src={dog.message} alt="cat" width={300} height={300} />
        <Image class="px-3 py-2"src={dog.message} alt="cat" width={300} height={300} /><Image class="px-3 py-2"src={dog.message} alt="cat" width={300} height={300} /><Image class="px-3 py-2"src={dog.message} alt="cat" width={300} height={300} /><Image class="px-3 py-2"src={dog.message} alt="cat" width={300} height={300} /><Image class="px-3 py-2"src={dog.message} alt="cat" width={300} height={300} />
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">With no effect</button>

    </div>
}