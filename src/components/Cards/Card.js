import * as React from 'react';
import { ReactComponent as Delete } from '../../resources/icons/delete.svg';
import { ReactComponent as Person } from '../../resources/icons/person.svg';
import '../../resources/styles/card.scss';
import { Checkbox } from '../Checkboxes/index'
import { Content } from '../Contents/index'
import { useState } from 'react';

const Card = ({
    onTextClick,
    onTextBlur,
    onTextValueChange,
    onRemoveBin,
    title,
    content,
    titleEditable,
    contentEditable,
    id
}) => {
   /* Init state */
    const [showBin, setShowBin] = useState(false);
    const [activeCheckbox, setActiveCheckbox] = useState(false);

    /* handling mouse over when it Enters each card */
    const handleMouseOver = event => setShowBin(true);

     /* handling mouse over when it Leaves each card */
    const handleMouseOut = event => setShowBin(false);

    /* whenever user click on lable or input of Card this event  raise and Lifting state up to it's parent */
    const handleTextClick = (event, id, actionName) => onTextClick(id, actionName);

     /* whenever user click on lable or input of Card this event  raise and  Lifting state up to it's parent */
    const handleTextBlur = (event, id, actionName) =>  onTextBlur(id, actionName);
   
 /* whenever user click out of  lable or input of Card this event  raise and  Lifting state up to it's parent */
    const handleTextChange = (event, id, actionName) => {
        const userValue = event.currentTarget.value;
        onTextValueChange(id, actionName, userValue);
    }

 /* whenever user click on  Trash Icon this event raise and  Lifting state up to it's parent*/
    const handleRemoveBin = (event, id) =>  onRemoveBin(id);
    
    /* whenever user click on  each checkbox it's filled */
    const hanldeLableClick = event => setActiveCheckbox(!activeCheckbox);

    return (<div className="card"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseOut} >
        <div className="item" >
            <Checkbox onClick={hanldeLableClick} activeCheckbox={activeCheckbox} />
            <div className="icon" >
                <Person />
            </div>
            <div onClick={(event) => handleTextClick(event, id, "title")}
                className="title" > {!titleEditable ? (title || "Click here to edit Title") :
                    <Content value={title}
                        onChange={event => handleTextChange(event, id, "title")}
                        onBlur={event => handleTextBlur(event, id, "title")}
                        autoFocus={true}
                        inputType={"single"}
                        placeholder="Enter Title..."
                    />
                }
            </div>
            {
                showBin && < div className="deleteIcon" >
                    <Delete onClick={event => handleRemoveBin(event, id)} />
                </div>
            }
        </div>
        <div onClick={(event) => handleTextClick(event, id, "content")}
            className="content" > {!contentEditable ?
                (content || "Click here to edit content") :
                <Content value={content}
                    onChange={event => handleTextChange(event, id, "content")}
                    onBlur={(event) => handleTextBlur(event, id, "content")}
                    autoFocus={true}
                    inputType={"multi"}
                    placeholder="Enter Content..."
                />
            }
        </div>
    </div>
    )
}

export default Card;