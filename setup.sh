#!/bin/bash
docker run -it --rm -v $(pwd):/usr/app -w /usr/app node:14-alpine sh -c "yarn"