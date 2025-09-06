let tempTasks = JSON.parse(localStorage.getItem('tasks')) || []; // Clone tasks from local storage
function filterTasks() {
    const filterValue = document.getElementById('filterOptions').value;

    const filteredTasks = filterValue === 'all'
        ? tempTasks
        : tempTasks.filter(task => (task.tags || '').toLowerCase() === filterValue.toLowerCase());

}



