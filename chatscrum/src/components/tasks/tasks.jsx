import React from 'react'
import taskLists from '../../static/tasks';

function tasks() {
  return (
    <div className='tasker'>
        <div className="container">
          <div className="weekly box">
            <h4 className="task">Weekly Task</h4>
            {taskLists.map((task, index) => (
                <p className='task' key={task.id}>
                    {task.item}
                </p>
            ))}
          </div>
          <div className="daily box">
            <h4 className="task">Daily Task</h4>
          </div>
        </div>
    </div>
  )
}

export default tasks;
