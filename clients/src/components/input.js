
import "../stylesheet/form.css"
function Input({className,name,placeholder,type,value, onChange, onSubmit}){
    return(
        <div className="marginStyle">
            {name ?
            <>
                <label>{name}</label>
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