import React from 'react';

interface ButtonProps {
  name: string;
  className?: string; 
  type?: "button" | "submit" | "reset"; 
  onClick?: () => void;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    const { name, className, type, onClick } = this.props;
    return (
      <button type={type} className={className} onClick={onClick}>
        {name}
      </button>
    );
  }
}
