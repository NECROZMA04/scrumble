document.addEventListener("DOMContentLoaded", function () {
    const deleteModal = document.getElementById('deleteModal');
    const confirmDeleteButton = document.getElementById('confirmDelete');
    const cancelDeleteButton = document.getElementById('cancelDelete');
    const closeButton = document.querySelector('.close-button');
    const button = document.getElementById('createButton');

    let tempTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (tempTasks.length <= 6) {
        button.style.display = 'flex';
    }

    // Function to display tasks
    function displayTasks(tasks) {
        const container = document.getElementById('tasksContainer');
        container.innerHTML = '';

        if (tasks.length === 0) {
            const noTaskMessage = document.createElement('p');
            noTaskMessage.textContent = 'No task can be shown';
            noTaskMessage.className = 'no-task-message';
            container.appendChild(noTaskMessage);
            button.style.display = 'flex';
            return;
        }

        

        tasks.forEach((task) => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';

            let priorityIcon = '';
            switch (task.priority?.toLowerCase()) {
                case 'urgent':
                    priorityIcon = '🔴';
                    break;
                case 'important':
                    priorityIcon = '🟠';
                    break;
                case 'medium':
                    priorityIcon = '🟡';
                    break;
                case 'low':
                    priorityIcon = '🟢';
                    break;
                default:
                    priorityIcon = '⚪';
            }

            let tagClass = '';
            switch (task.tags?.toLowerCase()) {
                case 'front-end': tagClass = 'tag-front-end'; break;
                case 'back-end': tagClass = 'tag-back-end'; break;
                case 'ui': tagClass = 'tag-ui'; break;
                case 'ux': tagClass = 'tag-ux'; break;
                case 'database': tagClass = 'tag-database'; break;
                case 'api': tagClass = 'tag-api'; break;
                case 'framework': tagClass = 'tag-framework'; break;
                case 'testing': tagClass = 'tag-testing'; break;
                default: tagClass = 'tag-default';
            }

            taskElement.innerHTML = `
                <h2 class="card-title" onclick="window.location.href='task_details.html?taskId=${task.id}'">${task.title}</h2>
                <div class="card-content" onclick="window.location.href='task_details.html?taskId=${task.id}'">
                    <div class="tag-priority">
                        <span class="tag ${tagClass}">${task.tags || 'No Tag'}</span>
                        <span class="story-points">${task.storyPoints || 0} SP</span>
                    </div>
                    <div class="priority">
                        <span class="priority-icon">${priorityIcon}</span>
                        <span class="priority-text">${task.priority || 'No Priority'} Priority</span>
                    </div>
                </div>
            `;

            const span = document.createElement('span');
            span.innerHTML = '\u00d7';
            span.className = 'delete-span';
            span.onclick = () => deleteTask(task.id);

            taskElement.appendChild(span);
            container.appendChild(taskElement);
        });
    }
    displayTasks(tempTasks);
});