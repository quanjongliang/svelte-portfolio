git pull origin main
docker build -t svelte-portfolio .
docker stop svelte-portfolio
docker rm svelte-portfolio
docker run -p 9999:9999 --name svelte-portfolio -d --restart=always svelte-portfolio