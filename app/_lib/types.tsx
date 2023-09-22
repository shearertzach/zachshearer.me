interface NavbarIcon {
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>>,
    path: string,
    color?: string,
    classname?: string,
}

interface Blurb {
    fromColor: string,
    centerColor?: string,
    toColor: string,
    top: number,
    left: number
}

interface BlogPost {
    id: number,
    title: string,
    year: number,
    date: string,
    body: BlogPostBody[]
}

interface BlogPostBody {
    header: string,
    body: string[]
}