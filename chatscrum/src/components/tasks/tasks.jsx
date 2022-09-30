import React from 'react'
import taskLists from '../../static/tasks';
import '../scrumboard/scrumboard.css';

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function Tasks() {
  return (
    <div className='tasker'>
    <DragDropContext>
        <div className="container">
          <Droppable droppableId="tasket">
            {(provided)=>(
              <div className="weekly box" {...provided.droppableProps} ref={provided.innerRef}>
              <h4 className="task">Weekly Task</h4>
              {taskLists.map(({id, item}, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                         <p style={{color: "#000"}} className="tasklist" key={id} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                         {item}
                        </p>
                    )}
                    {provided.placeholder}
                  </Draggable>
              )
            })}
            </div>
            )}
          </Droppable>

         <Droppable id="tasketer">
          {(provided) => (
            <div className="daily box" {...provided.droppableProps} ref={provided.innerRef}>
            <h4 className="task">Daily Task</h4>
          </div>
          )}
         </Droppable>
        </div>
    </DragDropContext>
    </div>
  )
}

export default Tasks;
