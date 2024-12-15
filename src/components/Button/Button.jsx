import "./Button.css";

const Button = ({ text, onClick, type = 'button', role = "primary" }) => {
    return (
    <button type= {type} onClick={onClick} className={`btn-${role}`}>
        {text}
    </button>
    );
};

export default Button;