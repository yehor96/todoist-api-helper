import { TodoistApi } from "@doist/todoist-api-typescript";
import parse from '../parse-html.js'

//Set api key and parent project id:
const api = new TodoistApi("");
const parentId = '';

const parsingResult = await parse()

api.addProject({ 
    name: parsingResult.title, 
    parentId: parentId, 
    color: 'berry_red'
})
.then(project => {
    for (let i = 0; i < parsingResult.chapters.length; i++) {
        api.addTask({
            content: parsingResult.chapters[i],
            description: parsingResult.durations[i],
            order: i,
            projectId: project.id
        })
    }
})
.catch((error) => console.log(error))