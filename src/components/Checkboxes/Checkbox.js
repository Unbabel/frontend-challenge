import * as React from 'react'
import '../../resources/styles/checkbox.scss'

const Checkbox = ({ onClick,activeCheckbox }) => {
    return (<React.Fragment>
        <div className="checkbox" >
            <label
                onClick={onClick}
                className={`label-checkbox ${activeCheckbox ? "checked" : ""}`}
            />
        </div>
    </React.Fragment>
    )
}
export default Checkbox;