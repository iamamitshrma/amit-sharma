import { exec } from "child_process"
export async function POST(req) {
    const { code } = await req.json();
    const output = new Promise((resolve, reject) => {
        exec(`python python/js-compiler.py ${code}`, (error, stdout, stderr) => {
            if(stderr) {
                reject(stderr)
            }
            if(error) {
                console.log(error)
                reject(error)
            }
            resolve(stdout)
        })
    })
    const result = await output;
    return new Response(JSON.stringify({
        output: result
    }))

}