import { createServer } from 'http'
import next from 'next'

const hostname = '127.0.0.1'
const port = 3000

const app = next({
  dev: true,
  hostname,
  port,
})

const handle = app.getRequestHandler()

await app.prepare()

createServer((req, res) => {
  handle(req, res)
}).listen(port, hostname, () => {
  console.log('')
  console.log('================================')
  console.log('  Le Vontea Website')
  console.log('  http://localhost:3000')
  console.log('================================')
  console.log('')
})