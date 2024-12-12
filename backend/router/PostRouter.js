const router=require ("express").Router()
const {createClient, SupabaseClient}=require("@supabase/supabase-js")
const bcrypt=require('bcrypt')
require("dotenv").config()

const supabase = createClient(process.env.DATABASE_URL, process.env.DATABASE_KEY)

router.get('/data', async(req, res)=>{
    try {
        const {data}= await supabase.from('webdb').select()
        console.log(data)
        return res.send(data)
    } catch (error) {
        return res.send(error)
    }
})

router.post('/buat', async(req, res)=>{
    const nim= req.body.nim
    const nama= req.body.nama
    const jenis_kelamin= req.body.jenis_kelamin
    const salt=10

    const {error} = await supabase.from('webdb').insert({
        nama,
        nim,
        jenis_kelamin
    })
    if(error){
        return res.send(error)
    }
    console.log("Terkirim")
    res.send("Terkirim")
})

router.put('/update/:id', async(req, res)=>{
    const {id}=req.params
    const nama=req.body.nama
    const nim=req.body.nim
    const jenis_kelamin=req.body.jenis_kelamin
    
    const {error} =await supabase.from('webdb').update({
        nama,
        nim,
        jenis_kelamin
    })
    .eq('id', id)
    if(error){
        res.send(error)
    }
    res.send("update")
})

router.get('/rubah/:id', async(req, res)=>{
    const {id}= req.params
    
    try {
        const{data}=await supabase.from('webdb').select('*').eq('id', id)
        console.log(data)
        res.send(data)
    } catch (error) {
        return res.send(error)
    }
})

router.post("/register", async(req, res)=>{
    const username= req.body.username
    const password=req.body.password
    if (!username || !password){
        res.send("Tolong username dan password tidak boleh kosong")
    } else{
        const passwords=bcrypt.hashSync(password, 10)
        const sqlQueryCheck="SELECT COUNT (id) as total_record FROM data WHERE username = ?"
        await db.query(sqlQueryCheck, [username], (err, result)=>{
            if(!err){
                if(result[0] && result[0].total_record !=0){
                    res.json({
                        error: true,
                        message: "User sudah ada"
                    })
                } else{
                    const sqlQuery="INSERT INTO data(username, password) VALUE(?, ?)"
                    db.query(sqlQuery, [username, passwords], (err, result)=>{
                        if(err){
                            console.log(err)
                        } else{
                            res.send(result)
                            console.log(result)
                        }
                    })
                }
            }
        })
    }
})

router.delete('/hapus/:id', (req, res)=>{
    const {id}=req.params
    const sqlQuery="DELETE FROM mahasiswa WHERE id=?"
    db.query(sqlQuery, id, (err, result)=>{
        if(err){
            console.log(err)
        } else{
            res.send(result)
            console.log(result)
        }
    })
})

module.exports=router