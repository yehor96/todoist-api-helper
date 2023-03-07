import { TodoistApi } from "@doist/todoist-api-typescript"

//Set api key:
const api = new TodoistApi("")
const projectName = process.argv[2]

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
        for (let i = 0; i < data.length; i++) {
            api.deleteProject(data[i].id)
                .then(deleted => console.log('Deleted project: ' + data[i].id))
        }
    })