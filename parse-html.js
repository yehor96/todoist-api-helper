import fs from 'fs/promises';
import { JSDOM } from 'jsdom';

const authorLocator = '.audioplayer_container .author a';
const titleLocator = '.audioplayer_container .title a';
const chaptersLocator = '.menu_link .track';
const durationsLocator = '.menu_link .duration';

const parseHtml = async () => {
    const html = await fs.readFile('page.html', 'utf8');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const fullTitle = document.querySelector(authorLocator).firstChild.textContent + ' - ' + document.querySelector(titleLocator).firstChild.textContent;
    const chapterElems = document.querySelectorAll(chaptersLocator);
    const chapters = Array.from(chapterElems).map(element => element.textContent);
    const durationElems = document.querySelectorAll(durationsLocator);
    const durations = Array.from(durationElems).map(element => element.textContent);

    return {
        title: fullTitle,
        chapters: chapters,
        durations: durations
    }
}

export default parseHtml;