import React, { useState } from 'react';
import '../scrumboard/scrumboard.css';

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function Tasks({data, deleteTask}) {

  const [taskRoll, updateTaskRoll] = useState(data)

  const handleOnDragEnd = result => {
    if (!result.destination) return;

    const tasks = Array.from(taskRoll);
    const [reorderedItem] = tasks.splice(result.source.index, 1)
    tasks.splice(result.destination.index, 0, reorderedItem)
    updateTaskRoll(tasks)
  }

  return (
    <div>
    <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="container">
          <Droppable droppableId="tasket">
            {(provided)=>(
              <div {...provided.droppableProps} ref={provided.innerRef} className="weekly box">
              <h4 className="task">Weekly Task</h4>
              {data.map(({id, content}, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                         <p style={{color: "black"}} key={id} onClick={() => deleteTask(id)} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={snapshot.isDragging ?  "tasker": "tasklist"}>
                         {content}
                        </p>
                    )}
                  </Draggable>
              )
            })}
            {provided.placeholder}
            </div>
            )}
            
          </Droppable>

         <Droppable droppableId="tasketer">
          {(provided) => (
            <div className="daily box" {...provided.droppableProps} ref={provided.innerRef}>
            <h4 className="task">Daily Task</h4>
            {provided.placeholder}
            </div>
          )}
         </Droppable>
        </div>
    </DragDropContext>
    </div>
  )
}

export default Tasks;
