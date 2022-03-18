import os
import sys
from pathlib import Path

import yaml
import jinja2

templateLoader = jinja2.FileSystemLoader(searchpath="./")
templateEnv = jinja2.Environment(loader=templateLoader)
target_base_path = sys.argv[1]


for base, dirs, files in os.walk('.'):
    for file in files:
        if file == "action.yml":
            path = Path(f"{target_base_path}/{base}")
            source = Path(f"{base}/{file}")
            action_path = source.parent
            base_path = Path(base).parent

            template_path = action_path / "README.md"
            if template_path.exists():
                tmpl = templateEnv.get_template(str(template_path))
                with open(source) as stream:
                    content = yaml.safe_load(stream)
                    content['path'] = str(action_path)

                if str(base_path) == ".":
                    target = f"{path.parent}/{path.name}.md"
                else:
                    filename = str(action_path).replace("/", "_")
                    target = f"{target_base_path}/{filename}.md"

                with open(target, "w") as stream:
                    stream.write(tmpl.render(content))
