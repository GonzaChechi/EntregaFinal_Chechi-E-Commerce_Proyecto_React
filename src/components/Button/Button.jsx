import './Button.css';
export const Button = ({ children, style, onClick }) => {
    return (
        <div>
            <button className='button'
                style={style}
                onClick={onClick}
            >
                {children}
            </button>
        </div>

    );
}


