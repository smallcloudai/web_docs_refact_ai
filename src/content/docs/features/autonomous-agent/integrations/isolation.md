---
title: Isolation Tool
description: Configure and use Docker-based isolation for command execution
---

The Isolation Tool enables the Refact.ai Agent to run commands inside isolated Docker containers, providing a controlled and secure environment for execution. This tool is ideal for maintaining workspace separation and minimizing risks.

## Configurations

### Container Settings
- **Container Workspace Folder**: Define the folder inside the container that will serve as the workspace
  - Default: `/app`
- **Docker Image ID**: Specify the Docker image ID to be used for creating the container
  - Example: `refact-image:v1.0`
- **Host LSP Path**: Provide the path to the Language Server Protocol (LSP) on the host system
  - Example: `/opt/refact/bin/refact-lsp`
- **Command**: Define the command to execute inside the Docker container
  - Example: `python run.py`

### Runtime Settings
- **Keep Containers Alive For X Minutes**: Specify the duration (in minutes) to keep containers running before termination
  - Default: 60
- **Ports**: Map container ports to host ports using comma-separated values in published:target format
  - Example: `8080:3000,5000:5432`

### Confirmation Rules
- **Ask User**: Specify patterns for commands that require user confirmation before execution
- **Deny**: Block potentially destructive commands matching specified patterns
  - Examples:
    - `docker* rm *`: Prevents the removal of containers
    - `docker* stop *`: Blocks stopping containers