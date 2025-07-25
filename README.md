# This is my site agradip.fyi
## Setup
`pnpm build` will build static files at "out" directory. Serve them directly but the nginx config should be
```
location / {
  try_files $uri $uri/ $uri.html /index.html;
}
```