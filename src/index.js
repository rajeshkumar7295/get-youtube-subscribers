const app = require('./app')
require("dotenv").config();
const database=require("./createDatabase");
const port=process.env.PORT||5000;

database();

// Start Server
app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});
app.listen(port, () => console.log(`App listening on port ${port}!`))
