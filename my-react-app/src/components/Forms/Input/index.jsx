import { forwardRef } from "react";
import Styles from "../Input/style.module.scss";

export default forwardRef (({label, id, error, ...rest}, ref) =>{
    return (
        <div className={Styles.divBox}>
            <label className="headline one" htmlFor={id}>{label}</label>
            <input className="headline one" ref={ref} {...rest} />
            {error ?<p> {error.message} </p> : null}
        </div>
    );
});