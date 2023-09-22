import Blurb from "./blurb";

export default function BlurbGrid(): JSX.Element {
    return (
        <div className="absolute w-screen h-screen top-0 left-0 -z-10">
            <Blurb className="left-[80%] top-[10%] max-w-[150px] from-blue-700 via-red-700 to-cyan-700" />
            <Blurb className="left-[10%] top-[0%] max-w-[205px] from-blue-700 via-purple-700 to-cyan-700" />
        </div>
    )
}