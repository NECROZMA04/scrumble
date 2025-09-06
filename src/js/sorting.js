let tempTasks = JSON.parse(localStorage.getItem('tasks')) || []; // Clone tasks from local storage
function sortTasks(filteredTasks) {
    const sortValue = document.getElementById('sortOptions').value;

    if (sortValue === 'all') {
        displayTasks(filteredTasks);
        return;
    }

    const sortedTasks = filteredTasks.sort((a, b) => {
        if (sortValue === 'priority') {
            const priorityOrder = { 'urgent': 1, 'important': 2, 'medium': 3, 'low': 4 };
            return (priorityOrder[a.priority.toLowerCase()] || 5) - (priorityOrder[b.priority.toLowerCase()] || 5);
        } else if (sortValue === 'points') {
            return (b.storyPoints || 0) - (a.storyPoints || 0); 
        }
        return 0;
    });
}
sortTasks(tempTasks);

