"use client";
import { CustomButtonProps } from '@/types';

const Button = ({ title, containerStyles, handleClick}: CustomButtonProps) => {
  return (
    <button 
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={() => {handleClick}}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default Button