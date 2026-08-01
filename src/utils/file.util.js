import fs from "fs/promises";

export const readJsonFile = async (filePath) => {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

export const writeJsonFile = async (filePath, data) => {
  await fs.writeFile(
    filePath,
    JSON.stringify(data, null, 2),
    "utf-8"
  );
};