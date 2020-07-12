import fs from 'fs';
import path from 'path';

import { parseFrontmatter } from './parseFrontmatter';

export function getAll(baseDir) {
  const files = fs.readdirSync(baseDir).filter(file => file.endsWith('.md') || !file.includes('.'))
  return files
    .map(fileName => {
      const project = getOne(baseDir, fileName);

      const { metadata } = parseFrontmatter(project);
      return {
        ...metadata,
        slug: fileName.replace(/\.[^/.]+$/, ""),
        published: metadata.published ? new Date(metadata.published) : null,
      };
    })
    .sort((a, b) => b.published - a.published);
}

export function getOne(baseDir, fileName) {
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
}