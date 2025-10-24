import express from 'express'

let port = 1212
let host = '127.0.0.1'
const app =express()

//root request -url: 127.0.0.1:8080/

app.get("/",(req,resp)=>{
    return resp.json("msg : Root-request")
})


app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server Running https://${host}:${port}`)
})