import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props =>
    props.isDragDisabled ? 'lightgrey' : props.isDragging ? '#cacae0' : '#fff'};
`;

// const Handle = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: #e0caca;
//   border-radius: 4px;
//   margin-right: 8px;
// `;

export default class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === 'task-1';
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            // only one element has to have those props to be the handle
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
          >
            {/* <Handle {...provided.dragHandleProps} /> */}
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
