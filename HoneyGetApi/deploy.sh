docker build -t honey-get-api-image .

docker tag honey-get-api-image registry.heroku.com/honey-get-api/web

docker push registry.heroku.com/honey-get-api/web

heroku container:release web -a honey-get-api