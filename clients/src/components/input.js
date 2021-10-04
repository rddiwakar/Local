
import "../stylesheet/form.css"
function Input({className,title,placeholder,type,value}){
    return(
        <div className="marginStyle">
            {title ?
            <>
                <label>{title}</label>
                <br />
            </> : ""}
            <input 
                className={className}
                placeholder={placeholder}
                type ={type}
                value = {value}
             />
        </div>
    )
}
export default Input;