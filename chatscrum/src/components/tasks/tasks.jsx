import React from 'react'
import taskLists from '../../static/tasks';
import '../scrumboard/scrumboard.css';

function Tasks() {
  return (
    <div className='tasker'>
        <div className="container">
          <div className="weekly box">
            <h4 className="task">Weekly Task</h4>
            {taskLists.map(({id, item}, index) => {
              return (
              <p className='tasklist' key={id}>
                    {item}
                </p>
            )
          })}
          </div>
          <div className="daily box">
            <h4 className="task">Daily Task</h4>
          </div>
        </div>
    </div>
  )
}

export default Tasks;
