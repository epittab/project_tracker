const express = require('express')
const next = require('next')
const cors = require('cors');
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()

  server.use(cors());  

  server.get('/enrique', (req, res) => {
    return res.end("hello and goodbye");
  })

  server.get('/tasks/:project_id', (req, res) => {
    console.log(req.params)
    res.render(req, res, '/tasks', {project_id: req.params.project_id})
  })
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})