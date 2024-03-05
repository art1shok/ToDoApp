import React, { useState } from 'react'

import { useAppDispatch } from '../../redux/hooks'
import {
  editTask,
  removeTask,
  toggleTask,
} from '../../redux/slices/task.thunks'
import Button from '../button/button'
import styles from './task.module.css'
import { ITaskProps } from './task.types'

const Task: React.FC<ITaskProps> = ({ task }) => {
  const dispatch = useAppDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(task.text)

  const handleToggleTask = (id: number): void => {
    dispatch(toggleTask(id))
  }

  const handleRemoveTask = (id: number): void => {
    dispatch(removeTask(id))
  }

  const handleEditTask = (): void => {
    dispatch(editTask({ 'id': task.id, 'text': editedText }))
    setIsEditing(false)
  }

  const containerClassName =
    task.completed ? `${styles.taskItem} ${styles.completedTask}` : styles.taskItem

  return (
    <li key={task.id} className={containerClassName}>
      {isEditing ? <div className={styles.taskTextContainer}>
        <input
          type="text"
          value={editedText}
          onChange={(event) => setEditedText(event.target.value)}
          className={styles.input}
          maxLength={50}
        />
        <div className={styles.buttonsContainer}>
          <Button type="button" onClick={() => setIsEditing(false)}>
              Cancel
          </Button>
          <Button type="button" onClick={handleEditTask}>
              Save
          </Button>
        </div>
      </div> : <div className={styles.taskTextContainer}>
        <span
          className={styles.taskText}
          onClick={() => handleToggleTask(task.id)}
        >
          {task.text}
        </span>
        <div className={styles.buttonsContainer}>
          <Button type="button" onClick={() => handleRemoveTask(task.id)}>
              Remove
          </Button>
          {!task.completed &&
              <Button
                type="button"
                onClick={() => {
                  setIsEditing(true)
                  setEditedText(task.text)
                }}
              >
                Edit
              </Button>
          }
        </div>
      </div>
      }
    </li>
  )
}

export default Task
