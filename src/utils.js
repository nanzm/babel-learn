const fs = require("fs")

function dumpJson(content, path) {
  let distPath = path
  if (!path) distPath = process.cwd() + "/demo.json"
  //
  // if (!fs.existsSync(distPath)) {
  //   fs.mkdirSync(distPath)
  // }

  let data = null
  if (typeof content === "string") {
    data = content
  } else {
    data = JSON.stringify(content)
  }
  fs.writeFileSync(distPath, data, { flag: "a+" })
}

exports.dumpJson = dumpJson;
