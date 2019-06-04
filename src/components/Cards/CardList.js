import * as React from 'react';
import Card from './Card';
import { Spinner } from '../Spinners/index'
import { Modal } from '../Modals/index'
import { convertToState, stateToUploadData } from '../../ultility/ultility';
import { ReactComponent as Upload } from '../../resources/icons/upload.svg';
import { ReactComponent as Fetch } from '../../resources/icons/fetch.svg';
import { ReactComponent as AddRow } from '../../resources/icons/add-row.svg';
import '../../resources/styles/app.scss';
import { apiUrl } from '../../constants/api'
import { useState, useEffect } from 'react';

/*Parent Component and also managing State*/
const CardList = ({
    title,
    content
}) => {
    /* Init state */
    const [data, setData] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);

    /* simulating componentDidMount and componentwillMount to add listener and  deleteListener  */
    useEffect(() => {

        const handleWindowClick = () => {
            setShowModal(false)
        }

        window.addEventListener('click', handleWindowClick);

        return () => {
            window.removeEventListener('click', handleWindowClick);
        }

    }, [])


    /* change the editability of input in each card component  */
    const changeEditability = (value, actionName) => actionName === "title" ? { titleEditable: value } : (actionName === "content" ? { contentEditable: value } : {});

    /* find index of object that It's editability is changed and return  new object of data list without changing the orginal object   */
    const getNewState = (id, data, actionName, editable) => {
        const newData = [...data];
        const index = newData.findIndex(x => x.id === id);
        if (index !== -1) {
            const item = newData[index];
            const tail = changeEditability(editable, actionName);
            newData.splice(index, 1, { ...item, ...tail });
        }
        return newData
    }

    /* whenever user click on lable or input of each Card this event  raise from child component  */
    const handleTextClick = (id, actionName) => setData(getNewState(id, data, actionName, true));

    /* whenever user click on lable or input of Card this event  raise from child component*/
    const handleTextBlur = (id, actionName) => setData(getNewState(id, data, actionName, false));

    /* whenever user click on  Trash Icon this event raise from child component*/
    const handelRemoveBin = (id) => setData(data.filter(x => x.id !== id));

    /* whenever the value of each input is changed this event raise  from child component */
    const handleTextValueChange = (id, actionName, userValue) => {
        const newData = [...data];
        const index = newData.findIndex(x => x.id === id);

        if (index !== -1) {
            const item = newData[index];
            const tail = actionName === "title" ? { titleEditable: true, title: userValue } :
                (actionName === "content" ? { contentEditable: true, content: userValue } : {});
            newData.splice(index, 1, { ...item, ...tail });
        }

        setData(newData);
    }

    /* getting data from endPoint */
    const handleGetData = event => {
        if (!showSpinner) {
            setShowSpinner(true);
            fetch(apiUrl)
                .then(response => response.json())
                .then((responseData) => {
                    if (responseData && responseData.length !== 0) {
                        setData(convertToState(responseData));
                        setShowSpinner(false);
                    }
                });
        }
    }

    /* uploading data to endPoint */
    const handleUploadData = event => {
        if (!showSpinner) {
            setShowSpinner(true);
            fetch(apiUrl, {
                method: 'post',
                body: JSON.stringify(stateToUploadData(data))
            })
                .then(response => response.json())
                .then((responseData) => {
                    setShowSpinner(false);
                    setShowModal(true);
                })
        }
    }
    /* whenever user click on addrow Icon this event raise */
    const handleAddRow = () => {
        setData([...data, { title: "", content: "", id: Math.floor(Math.random() * 1000), titleEditable: true, contentEditable: false }]);
    }
    /* handling close button of modal(for showing data is uploaded) */
    const handleClose = () => setShowModal(false);

    return (
        <React.Fragment >
            <div className="header" >
                <div className="title" >
                    <h3> Transcriptions </h3>
                </div>
                <div className="icon" >
                    <div title="UploadData"
                        className="upload"
                    >
                        <Upload onClick={handleUploadData} />
                    </div>
                    <div title="GetData">
                        <Fetch onClick={handleGetData} />
                    </div>
                </div>
            </div>
            <div className="body" >
                <div className="container" >
                    <div className="card-list" > {
                        data.map((item) => {
                            return <Card {...item}
                                onTextClick={handleTextClick}
                                onTextBlur={handleTextBlur}
                                onTextValueChange={handleTextValueChange}
                                onRemoveBin={handelRemoveBin}
                                key={item.id}
                            />
                        })
                    }
                    </div>
                    <div className="addRow" title="AddRow">
                        <AddRow className="icon"
                            onClick={handleAddRow} />
                    </div>
                </div>
            </div>
            {showSpinner && <Spinner showSpinner={showSpinner} />}
            {showModal && <Modal onClose={handleClose} showModal={showModal} />}
        </React.Fragment>)
}

export default CardList;