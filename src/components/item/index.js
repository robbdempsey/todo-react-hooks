import React from 'react';
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './item.module.css'

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default function Item (props) {
  // todo: seems a bit hacky to have to check props like this
  // without the check we get more errors than just the prop-type 
  // ones that denote what is required.
  if (Object.keys(props).length === 0) {
    return null
  }

  const { 
    item,
    onComplete,
    onDelete
  } = props
  const { id, name } = item
  const markCompleted = (item.complete && item.complete === true)
    ? styles['todo-item-completed']
    : ''

  return (
    <div className={styles['todo-item__container']}>
      <div className={styles['todo-item-complete']}
        onClick={() => onComplete(id)} >
        <FontAwesomeIcon
          icon={faCheckCircle} 
          className={`${styles['complete-icon']} ${markCompleted}`}
        />
      </div>
      <div className={styles['todo-item-name']}>{name}</div>
      <div className={styles['todo-item-delete']}
        onClick={() => onDelete(id)} >
        <FontAwesomeIcon icon={faTrashAlt} className={styles['delete-icon']}/>
      </div>
    </div>
  );
}
