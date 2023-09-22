// Fetching data from the JSON file
import blogPosts from '../../_lib/posts.json';


export default async function BlogPost({ params }: { params: { id: number } }) {
    const content: BlogPost | undefined = blogPosts.find((x) => x.id == params.id)

    if (content === undefined) return <main>Could not find blog post.</main>

    return (
        <main>
            <h1 className='text-3xl text-center'>{content.title}</h1>
            <h4 className='mt-3 text-gray-400 text-center font-light'>{new Date(content.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h4>
            <div className='h-[0.5px] w-11/12 max-w-[175px] my-10 bg-gray-600 mx-auto' />
            {content.body.map(({ header, body }) => (
                <>
                    <h1 className='text-xl mb-2'>{header}</h1>
                    {body.map(text => (
                        <p className='font-light text-gray-500 mb-5'>{text}</p>
                    ))}
                </>
            ))}
        </main>
    )
}