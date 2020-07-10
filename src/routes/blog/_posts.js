import fs from 'fs';
import path from 'path';
import { parseFrontmatter } from '../../utils/parseFrontmatter';

const baseDir = "content/blog";

export function getPosts() {
  return fs.readdirSync(baseDir).map(fileName => {
    const postName = fileName.split('.')[0];
    const post = getPost(postName);
    const { attributes } = parseFrontmatter(post);
    return {
      slug: postName,
      title: postName,
      ...attributes,
      date: new Date(attributes.date).toLocaleDateString(),
    };
  });
}

export function getPost(fileName) {
  let filePath = path.resolve(baseDir, `${fileName}.md`);
  if(!fs.existsSync(filePath)) {
    filePath = path.resolve(baseDir, `${fileName}/index.md`);
  }
  return fs.readFileSync(filePath, 'utf-8');
}