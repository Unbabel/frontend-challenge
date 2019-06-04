import * as React from 'react'
import '../../resources/styles/spinner.scss'
import { ReactComponent as SpinnerLoading } from '../../resources/icons/spinner.svg';
const Spinner = () => {
    return (<div className="spinner">
         <SpinnerLoading />
    </div>)
}
export default Spinner;