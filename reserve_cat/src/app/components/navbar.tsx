import Link from "next/link";
export default function Navbar() {
    return(
        <>
        <div className="bg-gray-500 text-white p-4">
            <Link href={"/"}>Home</Link>&nbsp;
            <Link href="/about" >About</Link>&nbsp;
            <Link href="/about/dogs">Dogs</Link>&nbsp;
            <Link href="/listofposts">Posts</Link>&nbsp;
            <Link href="/about/random_jokes">Random Jokes</Link>
           
        </div>
        
        
        
        </>
    );
}