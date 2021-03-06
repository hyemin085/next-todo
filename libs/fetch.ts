//
// export default async function fetcher(...args: string[]) {
//     const res = await fetch(...args)
//     return res.json()
// }

export const fetcher = (url) => fetch(url).then((res) => res.json());