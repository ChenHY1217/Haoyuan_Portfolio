import React, { ReactNode } from 'react'

type ShimmerButtonProps = {
  title: string;
  icon?: ReactNode;
  position?: string;
  handleClick?: () => void;
  className?: string;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({title, icon, position, handleClick, className}) => {
  return (
    <button className={`inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none md:w-60 md:mt-2 gap-2 ${className}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
    </button>
  )
}

