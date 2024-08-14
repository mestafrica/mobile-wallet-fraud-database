/**
 * Button component props.
 *
 * The props interface extends the default button HTML attributes,
 * adding additional props for the variant, icon, and disabled state.
 * The `[x: string]: any` type allows for additional props to be passed.
 */
type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {

    // The variant of the button. Defaults to 'outline'.
    variant?: 'solid' | 'outline';

    // The click event handler for the button.
    onClick?: () => void;

    // The icon to be displayed on the button.
    icon?: React.ElementType;

    // Whether the button is disabled. Defaults to false.
    disabled?: boolean;

    // Allows for additional props to be passed to the button.
    [x: string]: any;
}

/**
 * Button component.
 *
 * The Button component accepts props for the variant, icon, and disabled state,
 * as well as any additional props for the underlying button element.
 * The component renders a button element with the appropriate styles and content.
 */
const Button: React.FunctionComponent<Props> = (props) => {
    // Destructure the props to extract the variant, onClick, icon, disabled, and children
    const {
        variant = 'outline',
        onClick,
        icon: Icon,
        disabled = false,
        children,
        ...rest
    } = props;

    // Define the base styles for the button
    const baseStyles = 'px-6 py-2 rounded-md text-sm flex items-center';

    // Define the styles for a solid variant button
    const solidStyles = 'bg-blue-700 text-white';

    // Define the styles for an outline variant button
    const outlineStyles = 'border border-blue-500 text-blue-500';

    // Determine the button styles based on the variant
    const buttonStyles = variant === 'solid' ? solidStyles : outlineStyles;

    // Render the button element with the appropriate styles and content
    return (
        <button
            className={`${baseStyles} ${buttonStyles}`}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {/* Render the icon if provided */}
            {Icon && <Icon className="mr-2" />}
            {/* Render the children */}
            {children}
        </button>
    );
}

export default Button;

