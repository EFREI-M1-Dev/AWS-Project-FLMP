#!/bin/bash


install_docker() {
    local instance_name=$1
    multipass exec "$instance_name" -- sudo apt-get update
    multipass exec "$instance_name" -- sudo apt-get install -y docker.io
}

# Fonction pour joindre les workers au Swarm
join_swarm() {
    local instance_name=$1
    local join_command=$2
    multipass exec "$instance_name" -- $join_command
}

multipass launch --name master
multipass launch --name worker1
multipass launch --name worker2


install_docker master
install_docker worker1
install_docker worker2


SWARM_INIT_OUTPUT=$(multipass exec master -- sudo docker swarm init --advertise-addr $(multipass info master | grep IPv4 | awk '{print $2}'))


JOIN_TOKEN=$(multipass exec master -- sudo docker swarm join-token worker -q)


JOIN_COMMAND="sudo docker swarm join --token $JOIN_TOKEN $(multipass info master | grep IPv4 | awk '{print $2}'):2377"


join_swarm worker1 "$JOIN_COMMAND"
join_swarm worker2 "$JOIN_COMMAND"


multipass exec master -- git clone https://github.com/EFREI-M1-Dev/AWS-Project-FLMP.git


multipass exec master -- sudo docker service create --name registry -p 5000:5000 registry:2


multipass exec master -- bash -c "cd AWS-Project-FLMP/app/server && sudo docker image build -t 127.0.0.1:5000/server_image:latest -f Dockerfile ."
multipass exec master -- bash -c "cd AWS-Project-FLMP/app/client && sudo docker image build -t 127.0.0.1:5000/client_image:latest -f Dockerfile ."
multipass exec master -- sudo docker image push 127.0.0.1:5000/server_image:latest
multipass exec master -- sudo docker image push 127.0.0.1:5000/client_image:latest

multipass exec master -- sudo docker stack deploy -c AWS-Project-FLMP/swarm/docker-compose.yml mon_projet
multipass exec master -- sudo docker stack services mon_projet