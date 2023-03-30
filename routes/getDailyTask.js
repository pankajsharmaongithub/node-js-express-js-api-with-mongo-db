module.exports = function (app,Task) {

    app.get("/getDailyTask/:status/:email", async (req, res) => {

        try {

            const status=req.params.status;
            const email=req.params.email;
            const data = await Task.find({status:status,email:email});
            res.send(data);

        } catch (error) {
            console.log(error);
        }

    })

}