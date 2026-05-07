const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-[3px]',
};

export const Loader = ({ label = 'Cargando...', size = 'md', inline = false, className = '' }) => {
    const spinnerSizeClass = sizeClasses[size] || sizeClasses.md;

    return (
        <div
            role="status"
            aria-live="polite"
            className={`${inline ? 'inline-flex items-center gap-2' : 'flex flex-col items-center justify-center gap-3 py-10'} ${className}`}
        >
            <span
                aria-hidden="true"
                className={`animate-spin rounded-full border-slate-300 border-t-slate-800 ${spinnerSizeClass}`}
            />
            {label ? <span className="text-sm text-gray-500">{label}</span> : <span className="sr-only">Cargando</span>}
        </div>
    );
};

