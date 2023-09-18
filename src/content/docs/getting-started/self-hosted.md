---
title: Self-hosted Refact
description: A page with instructions on how to run a self-hosted Refact option..
---

The easiest way to run this server is a pre-build Docker image.

Install [Docker with NVidia GPU support](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker). On Windows you need to install WSL 2 first, [one guide to do this](https://docs.docker.com/desktop/install/windows-install).

Run docker container with following command:

```bash
docker run -d --rm -p 8008:8008 -v perm-storage:/perm_storage --gpus all smallcloud/refact_self_hosting
```
`perm-storage` is a volume that is mounted inside the container. All the configuration files, downloaded weights and logs are stored here.

To upgrade the docker, delete it using `docker kill XXX` (the volume `perm-storage` will retain your data), run `docker pull smallcloud/refact_self_hosting` and run it again.

Now you can visit http://127.0.0.1:8008 to see the server Web GUI.

> Add yourself to docker group to run docker without sudo (works for Linux): `commandline sudo usermod -aG docker {your user}` 
List all containers: `commandline docker ps -a` 
Start and stop existing containers (stop doesn't remove them): `commandline docker start XXX docker stop XXX` 
Shows messages from a container: `commandline docker logs -f XXX` 
Remove a container and all its data (except data inside a volume): `commandline docker rm XXX` 
Check out or delete a docker volume: `commandline docker volume inspect VVV docker volume rm VVV`

Go to plugin settings and set up a custom inference URL http://127.0.0.1:8008

### JetBrains
Settings > Tools > Refact.ai > Advanced > Inference URL

### VSCode
Extensions > Refact.ai Assistant > Settings > Infurl