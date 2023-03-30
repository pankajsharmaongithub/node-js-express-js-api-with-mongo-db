
module.exports = function (app,Task,dateMod) {

    app.post("/createTask", async (req, res) => {

        try {

            const task=req.body.task;
            const email=req.body.email;
            const now  =  new Date();
            // by using date.format() method
            const cdate = dateMod.format(now,'YYYY/MM/DD HH:mm:ss');
            

            const data={email:email,task:task,create_date:cdate,update_date:cdate}

            const isTaskInserted = await Task.create(data);

                // if(isTaskInserted){
                    res.send({status:200});
                // }


        } catch (error) {
            console.log(error);
        }

    })

}