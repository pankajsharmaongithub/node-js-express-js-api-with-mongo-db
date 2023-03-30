
module.exports = function (app,Task,dateMod) {

    app.post("/updateTaskStatus", async (req, res) => {

        try {

            const status=req.body.status;
            const id=req.body.id;
            const now  =  new Date();
            const update_date = dateMod.format(now,'YYYY/MM/DD HH:mm:ss');
            const data={status:status,update_date:update_date}

            const isUpdated = await Task.findByIdAndUpdate(
                    {_id:id},
                    {
                        $set:data
                    }
                );

                // if(isUpdated){
                    res.send({status:200});
                // }else{
                    // res.send({status:201});
                // }
        } catch (error) {
            console.log(error);
        }

    })

}