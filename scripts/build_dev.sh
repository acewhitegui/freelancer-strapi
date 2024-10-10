cd ..
# check files
ls
docker build --build-arg http_proxy=http://172.17.0.1:7890 --build-arg https_proxy=http://172.17.0.1:7890 -t freelancer-strapi . -f Dockerfile
#　清除none镜像
docker ps -a | grep "Exited" | awk '{print $1 }'|xargs docker stop||true
docker ps -a | grep "Exited" | awk '{print $1 }'|xargs docker rm||true
docker images|grep none|awk '{print $3 }'|xargs docker rmi||true