export const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false, type = 'button' }) => {
    const baseStyle = "px-4 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-100 text-red-600 hover:bg-red-200"
    };
    return (
        <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`} disabled={disabled}>
            {children}
        </button>
    );
};