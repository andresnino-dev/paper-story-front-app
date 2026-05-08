export const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false, type = 'button' }) => {
    const baseStyle = "px-5 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm";
    const variants = {
        primary: "bg-slate-900 text-white hover:bg-slate-800",
        secondary: "bg-slate-50 text-slate-800 hover:bg-slate-100",
        danger: "bg-red-50 text-red-600 hover:bg-red-100"
    };
    return (
        <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`} disabled={disabled}>
            {children}
        </button>
    );
};