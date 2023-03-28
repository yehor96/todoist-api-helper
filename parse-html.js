import fs from 'fs/promises';
import { JSDOM } from 'jsdom';

const chaptersLocator = '.menu_link .track';
const durationsLocator = '.menu_link .duration';

const html = await fs.readFile('page.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

const chapterElems = document.querySelectorAll(chaptersLocator);
const chapters = Array.from(chapterElems).map((element) => element.textContent);
const durationElems = document.querySelectorAll(durationsLocator);
const durations = Array.from(durationElems).map((element) => element.textContent);

console.log("chapters: " + chapters);
console.log("durations: " + durations);