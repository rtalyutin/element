# Build Failure Analysis

The Docker build log shows that the `git clone` step is executed after setting `WORKDIR /opt/build`. Because the `WORKDIR` instruction creates the directory (if it does not already exist), the subsequent `git clone` command attempts to clone into an already existing directory (`/opt/build`). Git refuses to clone into a directory that already exists, resulting in the fatal error `destination path '/opt/build' already exists and is not an empty directory`.

To fix the issue, either:

- Clone into the current working directory with `git clone ... .` after the `WORKDIR` instruction, or
- Remove the directory before cloning (e.g., `rm -rf /opt/build && git clone ... /opt/build`), or
- Set `WORKDIR` to a parent directory (e.g., `/opt`) and clone into a new child directory.

Any of these approaches ensure that Git receives a non-existent target directory, preventing the clone failure.
