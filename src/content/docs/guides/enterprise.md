---
title: Enterprise Refact Edition (Beta)
description: What Enterprise Refact is and how it works.
---

Enterprise self-hosted version of Refact allows you to deploy various code models for a local AI code assistant inside your IDE. It also allows you to create a fine-tuned model on your company's codebase. 
The enterprise plan is designed for teams who want to have full control over their Refact experience and access to all features.

## Prerequisites

- Docker with GPU support
- `docker-compose 1.29.2` or higher

## Pull Docker Image

Run the following in your terminal:
```
docker pull smallcloud/refact_self_hosting_enterprise:latest
wget https://docs.refact.ai/docker-compose.yml
```
[Download](https://docs.refact.ai/docker-compose.yml) the `docker-compose.yml` file and run the docker `compose up` command in your terminal.

## Generating a Random Admin Password

The Refact server is designed to be safe to expose to the internet. To do it correctly, make sure you don't skip these two steps:
1. Generate a random password using the `openssl` utility:
    ```
    openssl rand -base64 15
    ```
    
    Add the result to `docker-compose.yml` file, the `ENTERPRISE_ADMIN_TOKEN` section.

2. Set up a Reverse Proxy that will handle incoming HTTPS requests and forward them to your Refact server running on HTTP (port 8008). The specific setup depends on what your organization uses.

Refact IDE plugins can connect to the Refact server using either HTTP or HTTPS protocols.

The unencrypted HTTP is fine when using a local network or VPN. But the plugins will require a valid SSL/TLS certificate for HTTPS connection. Ask the administrator in your company about setting up a reverse proxy and obtaining a valid certificate.

Server Web UI requires an admin password to log in. If you forgot the password, you can delete the container and run it again. The `docker-compose.yml` defines persistent volumes to store all the important data, they will survive container restart, kill/run cycle or upgrade.

### Activating the License

Enter your license key in Settings -> License. Once it's activated you will see the number of users and the expiration date for your license. 
If you don't have an enterprise license key, please [contact the Refact team](https://refact.ai/contact/), and will arrange it for you.

### Access Control

Managing users is possible through the Access Control tab.
Click "Add new user" and the user and their unique API key will be generated automatically. 
You can also add the team for each user.

![Login](../../../assets/enterprise-users.png)

### Enabling vLLM

With the enterprise version of Refact, you can use an inference engine that uses PagedAttention from the vLLM library. It works faster and supports continuous batching, which means it can start work on new inference tasks, while continuing to serve other clients at the same time.

To enable vLLM select the Refact/1.6B/vllm model from the list of available models.

## Setting up the plugins 
For VS Code: go to “Settings” and specify the server address and Refact API key provided by your admin.

For JetBrains: go to “Settings” and specify the server address and the Refact API key provided by your admin.

Once you connect the API key, start writing code, and code suggestions from a selected model will appear automatically. 
