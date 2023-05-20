import app from './src/app.js'

const port = process.env.PORT || 5001

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
