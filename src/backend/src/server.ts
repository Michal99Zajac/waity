import application from './app'


(async () => {
  const app = await application()

  const PORT = Number(process.env.PORT) || 8080
  const HOST = process.env.HOST || 'localhost'

  app.listen(PORT, HOST, () => {
    console.log(`server listen on http://${HOST}:${PORT}`)
  })
})()
