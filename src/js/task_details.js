function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function getPriorityIcon(priority) {
    switch (priority?.toLowerCase()) {
        case 'low':
            return '🟢'; 
        case 'medium':
            return '🟡'; 
        case 'important':
            return '🟠'; 
        case 'urgent':
            return '🔴'; 
    }
}

function getStyledTags(tags) {
    const tagColors = {
        'front-end': 'background-color: #ffd561; color: #fff;',
        'back-end': 'background-color: #66ccff; color: #fff;',
        'ui': 'background-color: #ff99cc; color: #fff;',
        'ux': 'background-color: #cc99ff; color: #fff;',
        'database': 'background-color: #66e91b; color: #fff;',
        'api': 'background-color: #ff5757; color: #fff;',
        'framework': 'background-color: #ff914d; color: #fff;',
        'testing': 'background-color: #5271ff; color: #fff;',
    };

    // Split tags and map them to styled HTML elements
    return tags.split(',').map(tag => {
        const style = tagColors[tag.trim().toLowerCase()] || 'background-color: #ccc; color: #fff;'; // Default style
        return `<span class="tags" 
                style=" padding: 5px 10px;
                        border-radius: 20px;
                        font-size: 16px;
                        ${style}">${tag.trim()}</span>`;}).join(' ');
}

document.addEventListener('DOMContentLoaded', function () {
    const taskId = getUrlParameter('taskId');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(t => t.id === taskId);
    

    if (task) {
        // Display task details
        document.getElementById('taskTitle').textContent = task.title;
        document.getElementById('taskStatus').textContent = task.status || 'Not Started';
        document.getElementById('taskAssignee').textContent = task.assignee || 'Not Assigned';
        document.getElementById('taskStages').textContent = task.stages || 'Unknown Stage';
        document.getElementById('taskType').textContent = task.type|| 'Unknown Type';
        document.getElementById('taskDescription').textContent = task.description || 'No Description Available';
        document.getElementById('taskStoryPoints').textContent = `${task.storyPoints || 0} SP`;
        document.getElementById('taskTags').textContent = task.tags || 'No Tag';
        
        const priorityIcon = getPriorityIcon(task.priority);
        const priorityContainer = document.getElementById('taskPriority');
        priorityContainer.innerHTML = `${priorityIcon} ${task.priority || 'No Priority'}`;

        const tagContainer = document.getElementById('taskTags');
        tagContainer.innerHTML = getStyledTags(task.tags);

    } else {
        // Handle case where task is not found
        console.error('Task not found');
    }

    const editLink = document.getElementById('editLink');
    if (taskId) {
        editLink.href = `edit-task.html?taskId=${taskId}`;
    } else {
        console.error('Task ID not found in URL');
    }
    
});