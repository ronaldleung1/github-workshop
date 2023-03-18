const fs = require("fs");
const path = require("path");

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (_req, res) => {
  let data = [];

  const files = fs.readdirSync(
    path.join(process.cwd(), "people")
  );
  console.log(process.cwd())
  files.forEach((file) => {
    const content = fs.readFileSync(
      path.join(process.cwd(), "people"),
      "utf8"
    );

    data.push(JSON.parse(content));
  });

  try {
    data = data.sort(() => Math.random() - 0.5);
  } catch (err) {}
  res.status(200).json(data);
};