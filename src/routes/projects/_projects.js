import fs from 'fs';
import path from 'path';
import { parseFrontmatter } from '../../utils/parseFrontmatter';
const baseDir = "content/projects";

export function getProjects() {
  const files = fs.readdirSync(baseDir).filter(file => file.endsWith('.md') || !file.includes('.'))
  return files.map(fileName => {
    const project = getProject(fileName);

    const { metadata } = parseFrontmatter(project);
    return {
      ...metadata,
      slug: fileName.replace(/\.[^/.]+$/, ""),
    };
  });
}

export function getProject(fileName) {
  if(fileName.endsWith('.md')) {
      return fs.readFileSync(path.resolve(baseDir, fileName), 'utf-8');
  } else {
    let filePath = path.resolve(baseDir, `${fileName}/index.md`);
    if(fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    } else {
      filePath = path.resolve(baseDir, `${fileName}.md`);
      return fs.readFileSync(filePath, 'utf-8');
    }
  }
  return null;
}