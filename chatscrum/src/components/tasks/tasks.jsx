import React, { useState } from 'react'
import taskLists from '../../static/tasks';
import '../scrumboard/scrumboard.css';

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function Tasks() {

  const [taskRoll, updateTaskRoll] = useState(taskLists)

  const handleOnDragEnd = result => {
    if (!result.destination) return;
    if (result.source.droppableId !== result.destination.droppableId){
      const sourceColumn = result.source.droppableId;
      const destColumn = result.destination.droppableId;
      const [removeItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedItem)
      updateTaskRoll(items)
    }
    else{
      const items = Array.from(taskRoll);
      const [reorderedItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedItem)
      updateTaskRoll(items)
    }
  }

  return (
    <div>
    <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="container">
          <Droppable droppableId="tasket">
            {(provided, snapshot)=>(
              <div {...provided.droppableProps} ref={provided.innerRef} className={snapshot.isDraggingOver ? "droppablearea": "weekly box"}>
              <h4 className="task">Weekly Task</h4>
              {taskRoll.map(({id, item}, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                         <p style={{color: "black"}} key={id} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={snapshot.isDragging ?  "tasker": "tasklist"}>
                         {item}
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
