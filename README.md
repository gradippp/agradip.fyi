# This is my site agradip.fyi

## Setup

`pnpm build` will build static files at "out" directory. Serve them directly but the nginx config should be

```
location = / {
  try_files /index.html =404;
}

location / {
  try_files $uri $uri.html =404;
}

error_page 404 /404.html;
```
