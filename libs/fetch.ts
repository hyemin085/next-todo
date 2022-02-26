
export default async function fetcher(...args: string[]) {
    const res = await fetch(...args)
    return res.json()
}

// const fetcher = (url) => fetch(url).then((res) => res.json());