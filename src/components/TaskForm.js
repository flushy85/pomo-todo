import React, { useState } from 'react'
import { TextField, Button, FilledInput } from '@material-ui/core'
import { Transition } from 'react-transition-group'
const TaskForm = ({
  selected,
  handleDelete,
  handleSubmit,
  setShowForm,
  showForm,
  setPomo,
  setText,
  text,
  pomo,
  transitionStyles,
}) => {
  const formStyle = {
    background: 'white',
    padding: '30px',
    borderRadius: '5px',
    opacity: 1,
    transition: 'all 0.3s ease',
    height: 'auto',
  }

  const inputStyle = {
    display: 'flex',
    flexDirection: 'column',
  }
  const numberInputStyle = {
    margin: '10px',
    width: '20%',
  }
  const textInputStyle = {
    margin: '10px',
  }
  const notesInputStyle = {
    margin: '10px',
    width: '80%',
  }
  const notesButton = {
    textDecoration: 'underline',
    color: '#8B808B',
    fontSize: '1rem',
    textAlign: 'left',
    marginLeft: '12px',
    border: 'none',
    background: 'white',
  }
  const buttonContainer = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '5px',
  }
  const saveButton = {
    border: 'solid 1px',
    marginLeft: '15px',
    color: '#3F2747',
  }
  const deleteButtonContainer = {
    display: 'flex',
    float: 'left',
  }

  const [showNotes, setShowNotes] = useState(false)
  return (
    <Transition in={showForm} timeout={{ enter: 300, exit: 0 }} unmountOnExit>
      {(state) => (
        <form
          onSubmit={handleSubmit}
          style={{ ...formStyle, ...transitionStyles.form[state] }}
        >
          <div style={inputStyle}>
            <TextField
              style={textInputStyle}
              id="outlined-basic"
              label="What are you working on?"
              variant="outlined"
              value={text}
              required
              onChange={({ target }) => setText(target.value)}
            />

            <TextField
              style={numberInputStyle}
              autoFocus={true}
              type="number"
              label="Select"
              InputProps={{ inputProps: { min: 1, max: 10 } }}
              variant="outlined"
              value={pomo}
              onChange={({ target }) => setPomo(target.value)}
              helperText="Est time"
            />
            {!showNotes ? (
              <button onClick={() => setShowNotes(true)} style={notesButton}>
                + Add note
              </button>
            ) : (
              <FilledInput
                style={notesInputStyle}
                multiline={true}
                label="Select"
                InputProps={{ inputProps: { min: 1, max: 10 } }}
                placeholder="Some notes..."
                rows={3}
              />
            )}
          </div>
          <div>
            <div style={deleteButtonContainer}>
              {selected ? <Button onClick={handleDelete}>delete</Button> : null}
            </div>
            <div style={buttonContainer}>
              <Button
                style={{ color: '#8B808B', float: 'left' }}
                onClick={() => {
                  setShowForm(false)
                  setShowNotes(false)
                }}
              >
                cancel
              </Button>
              <Button style={saveButton} type="submit">
                Save
              </Button>
            </div>
          </div>
        </form>
      )}
    </Transition>
  )
}

export default TaskForm
