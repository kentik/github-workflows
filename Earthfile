VERSION 0.6

generate-docs:
    FROM python:3.9
    RUN pip install pyyaml jinja2

    COPY --dir . /code
    WORKDIR /code

    RUN python scripts/generate_docs.py docs/pipelines/reference/actions

    SAVE ARTIFACT ./docs AS LOCAL ./docs
