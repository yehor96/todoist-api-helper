# todoist-api-helper
Script for automatic task creation in Todoist based on Scribd book page html.

Flow:
1) Set Todoist api key and parent project id in todoist/create.js file
2) Get html of the whole page with opened table of contents for selected Scribd book and paste it in page.html file
![image](https://user-images.githubusercontent.com/48737037/233929180-ee083ff8-66f7-4c7f-91f1-1d4408379857.png)
3) Execute `npm run create` in terminal. The project with the book name will be created in Todoist under parent project with tasks per each chapter with its duration
![image](https://user-images.githubusercontent.com/48737037/233929897-29630f09-d127-46df-b440-a639e92c9824.png)
