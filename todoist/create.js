import { TodoistApi } from "@doist/todoist-api-typescript";

//Set api key:
const api = new TodoistApi("");
const taskPrefix = 'Chapter ';
const projectName = process.argv[2];
const tasksNum = process.argv[3];

api.getProjects()
    .then(projects => {
        let result = projects.filter(project => {
            if (project.name == projectName) {
                return project;
            }
        })
        return result;
    })
    .then(data => {
        if (data.length) {
            for (let i = 1; i <= tasksNum; i++) {
                api.addTask({
                    content: `${taskPrefix}${i}`,
                    order: i - 1,
                    projectId: data[0].id
                })
            }
        } else {
            console.log(`Project with name '${projectName}' not found`)
        }
    })
    .catch((error) => console.log(error));