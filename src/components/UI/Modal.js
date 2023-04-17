import { Fragment } from 'react';
import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';

const Backdrop=props=>{
 return <div className={`${classes.backdrop} ${props.className}`} onClick={props.onclose}></div>
};
const ModalOverlay=props=>{
    return <div className={`${classes.modal} ${props.className}`}>
        <div className={`${classes.content} ${props.className}`}>
            {props.children}
        </div>
    </div>
}
 const portal=document.getElementById('overlays');
const Modal=(props)=>{
return <Fragment>
   {ReactDOM.createPortal( <Backdrop onclose={props.onclose} />,portal)}
   { ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portal)}
</Fragment>
};
export default Modal;