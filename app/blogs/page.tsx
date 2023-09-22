import Link from 'next/link'
import blogs from '../_lib/posts.json'

export default function Blogs() {
    return (
        <main>
            <h1 className="text-2xl mb-10">Blogs</h1>
            {blogs.map(({ id, title, year, date }) => (
                <Link href={`/blogs/${id}`}>
                    <div className='p-6 rounded-lg transition-all hover:bg-white hover:bg-opacity-[4%] w-full border-2 border-transparent hover:border-[#2b2b2b] mb-5'>
                        <h1 className='text-xl'>{title}</h1>
                        <h4 className='text-xs ml-4 text-slate-400 mt-3'>{new Date(date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h4>
                    </div>
                </Link>
            ))}
        </main>
    )
}