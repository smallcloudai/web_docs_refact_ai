---
title: Changelog
description: A page with the changelog of Refact.
---
## January 16, 2024
### Open-Source Updates

- **Memory Consumption Fix** for local Cassandra.
- **Unified Volume:** One volume for all data, including the database.
- **Encodings Fix** for the fine-tuning process.
- **Minor Fixes** addressing various small issues.

### Enterprise Updates

- **Tag Upgrade:** Transition from `beta` to `latest` in `docker-compose.yml`. Ensure to update your compose file.
- **Runpod Support:**
    - Local database integration.
    - One storage solution for all data.
- **Minor UI Fixes:** Improvements and bug fixes.
## January 3, 2024
### New Models

Expanding the list of available models with:
- **Mistral**
    - 7B
- **Mixtral**
    - 8x7B
- **Deepseek**
    - 6.7B
    - 33B
- **Magicoder**
    - 6.7B

### Statistics
We are introducing a new cool feature - user stats. 
Check out the new page with informative charts to see the impact of having Refact!
![Refact.ai Statistics Page](../../assets/statistics.png)
## November 17, 2023
### Deepseek-Coder Models
We added support for the deepseek-coder family models, and you can use these models for completion and fine-tuning.
### Codellama/7b
Starting today, the `codellama/7b` model is available for fine-tuning.
### Faster Fine-Tuning
Fine-tuning is now faster for GPUs with CUDA capabilities `8.0` and higher. 
### UI & Performance
General UI and performance improvements.

## October 26, 2023
### Model Updates

**Starcoder 1b, 3b, and 7b models** are now available for completion and finetuning.

### Features

#### Upload LoRA

- **LoRA Upload**: LoRA upload feature is now available. You can now upload LoRA either via a direct link or by uploading the file.

#### Download Run

- **"Download Run"** feature allows downloading the best checkpoint.
- The **"Download Checkpoint"** feature allows you to download only the selected checkpoint.

#### UI & UX Improvements

- **Model Hosting Tab**: The selected finetune checkpoint associated with the model is now visible.
- **Finetune Tab**: The selected model for completion is now visible on the Finetuning page. From now on, you can easily view the model for which you've selected the checkpoint.
- **Checkpoint Selection**: You can now set the best checkpoint for a run.

### Bug Fixes & Performance Improvements

- We've crushed some bugs and optimized Refact for even better performance.
## October 6, 2023
We now have a new version and plan for Enterprise. Read more [here](https://refact.ai/blog/2023/introducing-refact-for-enterprise/)
![Refact for Enterprise](https://refact.ai/images/blog/introducing-refact-for-enterprise/refact-server.png)

## September 4, 2023

Today we're introducing Refact LLM: 1.6B code model with infill real-time code completion (state of the art for the size) and chat.

## July 28, 2023

Refact is now open-source and available for everyone in our GitHub repository. We've added self-hosted fine-tuning, and support for more LLMs: WizardLM, WizardCode, and Llama2.

## May 4, 2023

We're releasing a new Self-Hosted Server that allows Refact users to use code completion, code transformation, and chat functions powered by the StarCoder 15b code model on your own GPU.

## April 20, 2023

There's now a new self-hosted version of Refact, to try it please follow these [instructions](https://github.com/smallcloudai/refact-self-hosting).

## March 30, 2023

Today we're launching AI toolbox and AI chat. The functions that are now available in Refact include: Explain Error, Comment each line, Add Docstrings, Fix Bug, Explain Code, Add console logs, Chat, Analyze Computational Complexity, Descriptive Naming, Make Code Shorter, Add type hints, Highlight and Fix, Select and Refactor. [Read more](https://refact.ai/blog/2023/introducing-refact-ai)

## December 27, 2022

We are excited to announce the Refact plugin refact.ai for Visual Studio Code and JetBrains family editors. The plugin is available for free and can be installed directly from the Visual Studio Code Marketplace or the JetBrains plugin repository. You have the option to self-host the inference on your own GPU or use our cloud service with free trial. We welcome your feedback and suggestions.

## December 15, 2022

Today we are releasing 0.3b and 3b multi language code generation models. Check them out on Hugging Face:

|                     | Size(B) | Human Eval@1 | Human Eval@100 |
| ------------------- | ------- | ------------ | -------------- |
| CodeParrot          | 1.5     | 4.0          | 17.9           |
| PolyCoder           | 2.7     | 5.6          | 17.7           |
| GPT-J               | 6       | 11.6         | 27.7           |
| FB INCODER-6.7B     | 6.7     | 15.2         | 47.0           |
| CODEGEN-MULTI 6b    | 6.1     | 18.2         | 44.9           |
| CODEGEN-MULTI 3b    | 2.7     | 14.51        | 38.6           |
| CONTRASTcode/medium | 0.3     | 11.0         |                |
| CONTRASTcode/3b     | 3       | 16.9         |                |

In addition to regular prompting, those models also can infill code in the middle and produce changes to the code by following instructions. Stay tuned for an open source library to use these capabilities!

**Small Magellanic Cloud AI Ltd**, is a UK-registered company focused on creating AI tools for coding.

References:

- https://huggingface.co/smallcloudai/codify_medium_multi
- https://huggingface.co/smallcloudai/codify_3b_multi