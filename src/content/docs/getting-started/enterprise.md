---
title: Enterprise Refact Edition (Beta)
description: A page which explains what Refact is and how it works.
---

Enterprise self-hosted version of Refact allows you to deploy various code models for a local AI code assistant inside your IDE. It also allows you to create a fine-tuned model on your company's codebase. 
The enterprise plan is designed for teams who want to have full control over their Refact experience and access to all features.

## Prerequisites

- Docker with GPU support
- `docker-compose 1.29.2` or higher

## Pull Docker Image

Run the following in your terminal:
```
docker pull smallcloud/refact_self_hosting_enterprise:beta
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

## Deploy a LLM
![Deploy](../../../assets/enterprise-deploy.png)

### Add one of the supported models

Each model has different supported functions (chat / completion / toolbox / fine-tuning). The list of supported models with different functions can be found here [https://docs.refact.ai/supported-models/supported-models/].

### Enabling vLLM

With the enterprise version of Refact, you can use an inference engine that uses PagedAttention from the vLLM library. It works faster and supports continuous batching, which means it can start work on new inference tasks, while continuing to serve other clients at the same time.

To enable vLLM select the Refact/1.6B/vllm model from the list of available models.

### Sharding (coming soon)

You can choose to deploy a model to several GPUs with sharding. Select the number of GPUs that you would like to run your model on by selecting 1,2 or 3 in the sharding menu.

### Shared GPU

To run several smaller models on one GPU, select the "share GPU" option from the menu next to the selected model.

### Connecting OpenAI API

If you have an OpenAI API key, you can connect it to Refact and use GPT-series models inside Refact.

:::note
With this integration you will send your data to 3rd party providers (OpenAI). To enable OpenAI integration, you should go to settings (top right) and set and save your API key for the server usage.
:::

## Fine-tune a model on your codebase
![Finetune](../../../assets/enterprise-finetune.png)

### Preparing a dataset for fine-tuning

Refact fine-tuning doesn't require you to prepare your dataset in any way - it happens automatically. In the sources tab, add links to your git repos (public and private are supported), or alternatively you can give it an archive (.zip, .tar.gz or .tar.bz2). You can also upload individual files, that's especially useful if you want to use specific held-out files as a test set for fine-tuning.

After you upload your dataset, Refact will filter the data automatically.
There are 2 stages for filtering the data: 
- The first stage uses an adapted version of Git Linguist to filter out binary files, known types of generated files, files with a lot of digits in them, and some other files unsuitable for training. Duplicates are also removed at this stage.
- The second stage uses a language model, it needs to run on GPU. It filters out files that have loss too high according to the language model. High loss means the model cannot predict the text in the file very well, that happens on random data, or text that is not code at all.

You can verify what this automatic process is doing by clicking on "Accepted" and "Rejected" links. These logs will give you a reason why any specific file is rejected. The second stage will give you the loss values for each file.

### Start Fine-Tuning

After your dataset has been filtered, you're ready to start the fine-tuning process.
First, select one of the pre-trained models for fine-tuning. 
For a list of the models that currently support fine-tuning please see here [https://docs.refact.ai/supported-models/supported-models/].

Once you start fine-tuning, the training time will be automatically determined by the dataset size and complexity. 

The training process involves optimizing the model's weights and parameters to minimize the loss function and improve its performance.

#### Advanced settings
You can specify custom parameters for fine-tuning in the "Advanced settings" tab.
For example, if you want to improve the model's capacity or change the schedule of learning , ie make the training longer / shorter.

![Advanced settings](../../../assets/enterprise-advanced.png)

- Lora R / Lora Alpha -  some hyperparameters, related to a number of optimization parameters in the fine-tuned model.

- Lora Init Scale - a hyperparameter used during the initialization of trainable weights in the fine-tuned model.

- Lora dropout - a probability at which dropout technique (regularization) is applied, used inside the `lora` trainable parameters.

- Learning Rate - a hyperparameter that determines the step size at each iteration while moving towards a minimum of the loss function. A higher learning rate can lead to faster convergence but might overshoot the optimal solution, while a smaller learning rate might converge slowly or get stuck in local minima.

- Batch Size - the number of training examples utilized in one iteration of a batch. For instance, if you have 1,000 training examples and your batch size is 100, it will take 10 iterations to complete one epoch.

- Warmup Num Steps- the initial phase of training where the learning rate gradually increases from a very small value to its originally set value. This warmup can help stabilize the training at the beginning. For example, if warmup_num_steps is 1000, for the first 1000 steps, the learning rate will increase linearly from nearly 0 to its set value.

- Weight Decay- a regularization technique used to prevent overfitting. It adds a penalty to the loss function, typically in the form of L2 regularization. This means that during training, a fraction of the weights (defined by the weight decay rate) is subtracted, pushing the weights towards zero and preventing them from growing too large.

- Train Steps: The total number of steps (or iterations) for which the model will be trained. If you have a dataset of size 1000 and you use a batch size of 100, then completing 10 steps would mean you've processed the entire dataset once (or completed one epoch).

- Learning Rate Decay Steps: In many training regimes, it's beneficial to reduce the learning rate over time, as it can help the model converge to a better solution. Learning rate decay steps define how often the learning rate should be decreased. For example, if the learning rate decay steps are set to 5000, then for every 5000 training steps, the learning rate would be decreased (multiplied) by a set factor (e.g., 0.9 or 0.95).

- Low GPU memory mode: It's used when you have a GPU with a low amount of memory. It will almost double the computation time but save a bunch of memory.

### Analyzing fine-tuned model

We automatically split filtered files into train and test sets and on the plot you can see 2 curves for the loss function: train and test. Checkpoints with minimal test loss are considered to be the best.

### Using a fine-tuned model

- Select which checkpoint from the latest fine-tune run you want to use: best from the latest or specify a custom checkpoint.  

- Connect the model to your IDE<br><br>
For VS Code: go to "Settings" and specify the server address and Refact API key provided by your admin.<br><br>
For JetBrains: go to "Settings" and specify the server address and the Refact API key provided by your admin.

Once you connect the API key, start writing code and code suggestions from a new fine-tuned model will appear automatically.
