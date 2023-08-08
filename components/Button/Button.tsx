import { MaybeParentComponentProps } from 'interfaces/ParentComponentProps';

import styles from './Button.module.css';

interface ButtonProps extends MaybeParentComponentProps {
  variant: 'default' | 'outline';
}

export default function Button(props: ButtonProps) {
  return (
    <div className={styles.ButtonComponent + ' ' + styles[props.variant]}>
      <span>{props.children}</span>
    </div>
  );
}

Button.defaultProps = {
  variant: 'default',
};
