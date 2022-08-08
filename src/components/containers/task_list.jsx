import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/taskComponent';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    const changeState = (id) => {
        console.log('ToDo: Cambiar estado de una tarea');
    }
    return (
        <div>
            <div>
                Your Tasks:
            </div>
            {/* for/map task */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
