function deleteTask(taskId) {
    deleteModal.style.display = 'block';

    confirmDeleteButton.onclick = function () {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        tempTasks = updatedTasks; // Update the temporary tasks as well
        displayTasks(tempTasks);
        deleteModal.style.display = 'none';
        if (tempTasks.length <= 6) {
            button.style.display = 'flex';
        }
    };

    cancelDeleteButton.onclick = closeButton.onclick = function () {
        deleteModal.style.display = 'none';
        if (tempTasks.length <= 6) {
            button.style.display = 'flex';
        }
        
    };

    window.onclick = function (event) {
        if (event.target === deleteModal) {
            deleteModal.style.display = 'none';
        }
        if (tempTasks.length <= 6) {
            button.style.display = 'flex';
        }
    };

    
}