

  module.exports = function (app,User,bcrypt,jwt) {

    app.post("/register_control", async (req, res) => {
        // Our register logic starts here
try {
    // Get user input
    const { name, email, password } = req.body;


    // Validate user input
    if (!(name && email  && password )) {
      res.status(400).send("Please fill all fields");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });


    if (oldUser) {
      return res.send({status:201,msg:"User Already exists"}); 
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);


    // Create user in our database
    const user = await User.create({
      name: name, // sanitize: convert email to lowercase
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });


    // Create token
    const token = jwt.sign( { user_id: user._id, email },process.env.TOKEN_KEY,{ expiresIn: "1h"} );

    // save user token
    user.token = token;

    // return new user
    // res.status(201).json(user);
    res.send({status:200,token:token}); 


  //   res.send(token); return;

  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
    })
}