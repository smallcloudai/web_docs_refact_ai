---
title: Fine-tuning
description: A page describing fine-tuning concept.
---

### Why?

Code models are trained on a vast amount of code from the internet, which may not perfectly, align with your specific codebase, APIs, objects, or coding style. By fine-tuning the model, you can make it more familiar with your codebase and coding patterns. This allows the model to better understand your specific needs and provide more relevant and accurate code suggestions. Fine-tuning essentially helps the model memorize the patterns and structures commonly found in your code, resulting in improved suggestions tailored to your coding style and requirements.

### Which Files to Feed?

It's a good idea to give the model the current code of your projects, because it's likely any new code in the same project will be similar -- that's what makes suggestions relevant and useful. However, it's NOT a good idea feed 3rd party libraries that you use, as the model may learn to generate code similar to the internals of those libraries.

### Data Scanning

During the scanning process, files uploaded to Refact as a dataset for the fine-tuning process are validated to determine their suitability.

Files rejected during the validation process are dismissed and won't be incorporated into the dataset used in the fine-tuning stage.

The potential rejection reasons are listed below:

1. **Linguist error** - Indicates that Refact couldn't open the file or the file might be corrupted.
2. **Not text** - That reason is applicable for binary files which are not suitable for the fine-tuning.
3. **File is too large** - If the file size is more than 512kb, that file will not be included in the dataset as a too-large file.
4. **Excluded by mask** - Refers to files that are manually excluded.
5. **Duplicates** - Duplicated files are rejected from the dataset.
6. **Lots of digits** - If the percentage of digits in the file exceeds a specific amount, the file will be rejected from the filtered dataset.
7. **Filter empty** - That reason is applicable when perplexity a metric assessing the model's predictive probability) cannot be calculated.

:::note
Files that didn't pass the linguist scanning could not be included manually after the filtering process.
:::

### GUI

Use `Sources` and `Finetune` tabs in the web UI to upload files (`.zip`, `.gz`, `.bz2` archive, or a link to your git repository) and run the fine-tune process. After the fine-tuning process finishes (which should take several hours), you can dynamically turn it on and off and observe the difference it makes for code suggestions.

:::note
Both VS Code and JB plugins cache the responses. To force the model to produce a new suggestion (rather than immediately responding with a cached one), you can change the text a few lines above, for example, a comment Alternatively, you can use the Manual Suggestion Trigger (a key combination), which always produces a new suggestion.
:::
