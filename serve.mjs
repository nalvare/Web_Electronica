import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'public');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.doc':'application/msword','.pdf':'application/pdf'};
const port=Number(process.env.PORT||4173);
http.createServer((req,res)=>{
 try {
  const u=new URL(req.url,'http://localhost');
  const pathname=decodeURIComponent(u.pathname);
  const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  if(!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(fs.readFileSync(path.join(root,'404.html')));return;}
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res);
 } catch {res.writeHead(400);res.end('Solicitud no válida');}
}).listen(port,'127.0.0.1',()=>console.log(`Vista local: http://127.0.0.1:${port}`));
