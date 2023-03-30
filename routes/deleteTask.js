
module.exports = function (app,Task) {

    app.post("/deleteTask", async (req, res) => {

        try {
            const id=req.body.id;
            const data={_id:id}

            const isDeleted = await Task.findOneAndDelete( {_id:id} );
                // if(isDeleted){
                    res.send({status:200});
                // }else{
                    // res.send({status:201});
                // }


        } catch (error) {
            console.log(error);
        }

    })

}