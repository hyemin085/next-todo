import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const projects = [
    'facebook/flipper',
    'rust-lang/rust',
    'vercel/next.js'
]

export default function api(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.id) {
        axios(`http://3.34.47.186:4000/`)
            .then(response => response.data)
            .then(data => {
                setTimeout(() => {
                    res.json(data)
                }, 2000)
            })

        return
    }
    setTimeout(() => {
        res.json(projects)
    }, 2000)
}