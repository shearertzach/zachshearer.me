export default function Blurb({ className }: { className: string }): JSX.Element {
    return (
        <div className={`rounded-full bg-gradient-to-br opacity-60 -z-50 aspect-square w-[30%] blur-2xl filter fixed -translate-x-1/2 -translate-y-1/2 mx-auto animate-pulse ${className}`}
        />
    )
}