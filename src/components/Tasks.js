import React, { useState } from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  List,
} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import MenuIcon from '@material-ui/icons/Menu'
import TickIcon from '@material-ui/icons/CheckCircleOutline'
import AddTask from './AddTask'
import TaskForm from './TaskForm'

import { Transition } from 'react-transition-group'
import ListHeader from './ListHeader'

const Task = ({ task, index, handleEdit, handleDone, transitionStyles }) => {
  const listItem = {
    background: 'white',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#282c34',
    height: 48,
    padding: '0 30px',
    margin: '0 0 8px',
    justifyContent: 'center',
    transition: `transform 400ms ease-in, opacity 200ms ease-in`,
    opacity: 1,
  }
  const [done, setDone] = useState(false)
  const timeLeft = (task) => {
    return `${task.done} / ${task.pomo}`
  }
  if (!task) {
    return <ListItem></ListItem>
  } else {
    return (
      <Transition appear in={true} timeout={0} unmountOnExit>
        {(state) => (
          <ListItem
            style={{ ...listItem, ...transitionStyles.listItem[state] }}
          >
            <ListItemIcon>
              <IconButton
                style={{ color: task.complete ? '#FE6B8B' : '#282c34' }}
                onClick={() => {
                  setDone(!done)
                  handleDone(index)
                }}
              >
                <TickIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText
              style={{
                textDecoration: task.complete ? 'line-through' : 'none',
                color: task.complete ? 'grey' : null,
              }}
              primary={`${task.text}`}
            />
            <ListItemText>{timeLeft(task)}</ListItemText>
            <IconButton onClick={() => handleEdit(task)} edge="end">
              <MenuIcon />
            </IconButton>
          </ListItem>
        )}
      </Transition>
    )
  }
}

const Tasks = ({
  tasks,
  setTasks,
  setShowForm,
  showForm,
  text,
  pomo,
  setText,
  setPomo,
  selected,
  handleEdit,
  handleSubmit,
  handleDelete,
  handleDone,
}) => {
  const transitionStyles = {
    listItem: {
      entering: {
        transform: 'rotateX(-90deg)',
        opacity: 0,
      },
      entered: { transform: 'rotateX(0deg)', opacity: 1 },
      exiting: { opacity: 0 },
      exited: { opacity: 0 },
    },
    form: {
      entering: {
        opacity: 0,
        transform: 'scale(0)',
      },
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
      exited: { display: 'none' },
    },
    addTask: {
      entering: {
        opacity: 0,
        transform: 'scale(0)',
      },
      entered: {},
      exiting: { opacity: 0 },
      exited: { display: 'none' },
    },
  }
  if (!tasks) return null
  return (
    <List>
      <ListHeader setTasks={setTasks} tasks={tasks} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          handleEdit={handleEdit}
          handleDone={handleDone}
          transitionStyles={transitionStyles}
        />
      ))}
      <Transition in={!showForm} timeout={0} unmountOnExit>
        {(state) => (
          <AddTask
            button
            onClick={() => {
              setShowForm(true)
            }}
            style={{
              ...transitionStyles.addTask[state],
            }}
          >
            <ListItemIcon>
              <AddCircleOutlineIcon style={{ color: 'white' }} />
            </ListItemIcon>
            Add Task
          </AddTask>
        )}
      </Transition>
      <TaskForm
        transitionStyles={transitionStyles}
        showForm={showForm}
        setShowForm={setShowForm}
        text={text}
        pomo={pomo}
        setText={setText}
        setPomo={setPomo}
        selected={selected}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </List>
  )
}

export default Tasks
