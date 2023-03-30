
module.exports = function (app,Task,dateMod) {

    app.post("/updateTask", async (req, res) => {

        try {

            const task=req.body.task;
            const id=req.body.id;
            const now  =  new Date();
            const update_date = dateMod.format(now,'YYYY/MM/DD HH:mm:ss');
            const data={task:task}

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