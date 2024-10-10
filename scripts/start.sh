docker stop freelancer-strapi||true
docker rm freelancer-strapi||true
docker run --name freelancer-strapi --restart=always -d -p 1337:1337 freelancer-strapi
