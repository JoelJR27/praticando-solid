import BaseButtonProps from "./BaseButtonProps";

interface LongPressButtonProps extends BaseButtonProps {
    onLongPress: () => void;
}