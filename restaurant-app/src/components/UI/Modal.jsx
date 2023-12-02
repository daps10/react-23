import { useEffect, useRef } from 'react';
import {createPortal} from 'react-dom';

export default function Modal({ children, open, className='' }) {
  const dialog= useRef();

  // with this hook we manage the dialog manually 
  useEffect(() => {
    const modal= dialog.current;
    // it check open or not.
    if(open) {
      modal.showModal();
    }

    // modal cleanup
    return () => modal.close();
  }, [open]);

  // createportal mainly used to show case that content overly on div which has its own space.
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>{ children }</dialog>, 
    document.getElementById('modal')
  );
}