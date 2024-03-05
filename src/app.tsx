import React from 'react'

import styles from './app.module.css'
import Button from './components/button/button'
import Task from './components/task/task'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { addTask } from './redux/slices/task.thunks'
import { AppState } from './redux/store'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state: AppState) => state.tasks.tasks)

  const [newTask, setNewTask] = React.useState<string>('')
  const [filter, setFilter] = React.useState<string>('all')

  const handleAddTask = async (): Promise<void> => {
    if (newTask.trim() !== '') {
      await dispatch(addTask(newTask))
      setNewTask('')
    }
  }

  const completedTasks = tasks.filter((task) => task.completed)
  const incompletedTasks = tasks.filter((task) => !task.completed)

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Todo App</h1>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          placeholder='Add a new task...'
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          className={styles.input}
        />
        <button onClick={handleAddTask} className={styles.addTaskButton}>
          Add task
        </button>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.buttonContainer}>
        <Button
          type='button'
          onClick={() => setFilter('all')}
          disabled={filter === 'all'}
        >
          All ({tasks.length})
        </Button>
        <Button
          type='button'
          onClick={() => setFilter('completed')}
          disabled={filter === 'completed'}
        >
          Completed ({completedTasks.length})
        </Button>
        <Button
          type='button'
          onClick={() => setFilter('incompleted')}
          disabled={filter === 'incompleted'}
        >
          Incompleted ({incompletedTasks.length})
        </Button>
      </div>
      <div className={styles.tasksWrapper}>
        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Tasks</h2>
          <ul className={styles.taskList}>
            {tasks
              .filter((task) => {
                if (filter === 'completed') {
                  return task.completed
                }
                if (filter === 'incompleted') {
                  return !task.completed
                }
                return true
              })
              .map((task, index) => <Task
                key={task.id} task={task} index={index} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
