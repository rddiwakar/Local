
import "../stylesheet/form.css"
function Input({className,name,placeholder,type,value, onChange,title}){
    return(
        <div className="marginStyle">
            {title ?
            <>
                <label>{title}</label>
                <br />
            </> : ""}
            <input 
                name={name}
                className={className}
                placeholder={placeholder}
                type ={type}
                value = {value}
                onChange={onChange}
             />
        </div>
    )
}
export default Input;