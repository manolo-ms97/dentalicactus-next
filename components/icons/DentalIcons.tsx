import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

const defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// Odontología General — tooth with checkmark
export const ToothCheckIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...defaultProps} width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
    <path d="M12 2C9.5 2 8 3.5 7 5C6 6.5 5.5 8 5 10C4.5 12 4.5 14 5 16C5.5 18 6.5 20 7.5 22C8 22 8.5 20 9 18C9.5 16 10 14 12 14C14 14 14.5 16 15 18C15.5 20 16 22 16.5 22C17.5 20 18.5 18 19 16C19.5 14 19.5 12 19 10C18.5 8 18 6.5 17 5C16 3.5 14.5 2 12 2Z" />
    <path d="M9 9L11 11L15 7" />
  </svg>
);

// Estética Dental — tooth with sparkle/shine
export const ToothSparkleIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...defaultProps} width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
    <path d="M12 4C10 4 8.5 5.2 7.8 6.8C7 8.5 6.5 10 6 12C5.5 14 5.5 16 6 18C6.5 19.5 7 21 8 22C8.5 22 9 20 9.5 18C10 16 10.5 14.5 12 14.5C13.5 14.5 14 16 14.5 18C15 20 15.5 22 16 22C17 21 17.5 19.5 18 18C18.5 16 18.5 14 18 12C17.5 10 17 8.5 16.2 6.8C15.5 5.2 14 4 12 4Z" />
    <path d="M3 3L3.5 1.5L4 3L5.5 3.5L4 4L3.5 5.5L3 4L1.5 3.5Z" />
    <path d="M19 1L19.4 2.2L20.5 2.5L19.4 2.8L19 4L18.6 2.8L17.5 2.5L18.6 2.2Z" />
    <path d="M21 8L21.3 9L22.5 9.3L21.3 9.6L21 10.5L20.7 9.6L19.5 9.3L20.7 9Z" />
  </svg>
);

// Ortodoncia — braces on teeth
export const BracesIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...defaultProps} width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
    {/* Left tooth */}
    <path d="M5 4C4 4 3 5 3 7V11C3 13 4 14 5 14H7C8 14 9 13 9 11V7C9 5 8 4 7 4Z" />
    {/* Middle tooth */}
    <path d="M10 4C9.3 4 8.5 5 8.5 7V11C8.5 13 9.3 14 10 14H14C14.7 14 15.5 13 15.5 11V7C15.5 5 14.7 4 14 4Z" />
    {/* Right tooth */}
    <path d="M17 4C16 4 15 5 15 7V11C15 13 16 14 17 14H19C20 14 21 13 21 11V7C21 5 20 4 19 4Z" />
    {/* Bracket squares */}
    <rect x="4.5" y="7.5" width="3" height="3" rx="0.5" />
    <rect x="10.5" y="7.5" width="3" height="3" rx="0.5" />
    <rect x="16.5" y="7.5" width="3" height="3" rx="0.5" />
    {/* Wire */}
    <line x1="3" y1="9" x2="7.5" y2="9" />
    <line x1="7.5" y1="9" x2="10.5" y2="9" />
    <line x1="13.5" y1="9" x2="16.5" y2="9" />
    <line x1="19.5" y1="9" x2="21" y2="9" />
    {/* Gums */}
    <path d="M2 16C4 15 6 14.5 8 15C10 15.5 11 16 12 16C13 16 14 15.5 16 15C18 14.5 20 15 22 16" />
    <path d="M2 19C4 18 6 17.5 8 18C10 18.5 11 19 12 19C13 19 14 18.5 16 18C18 17.5 20 18 22 19" />
  </svg>
);

// Implantes — dental implant screw
export const ImplantIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...defaultProps} width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
    {/* Crown/cap */}
    <path d="M8 2H16L15 7H9Z" />
    {/* Abutment */}
    <path d="M10 7H14V9H10Z" />
    {/* Screw threads */}
    <path d="M10 9L8.5 11H15.5L14 9" />
    <line x1="8.5" y1="11" x2="9" y2="13" />
    <line x1="15.5" y1="11" x2="15" y2="13" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="13" x2="9.5" y2="15" />
    <line x1="15" y1="13" x2="14.5" y2="15" />
    <line x1="9.5" y1="15" x2="14.5" y2="15" />
    <line x1="9.5" y1="15" x2="10" y2="17" />
    <line x1="14.5" y1="15" x2="14" y2="17" />
    <line x1="10" y1="17" x2="14" y2="17" />
    <line x1="10" y1="17" x2="10.5" y2="19" />
    <line x1="14" y1="17" x2="13.5" y2="19" />
    <line x1="10.5" y1="19" x2="13.5" y2="19" />
    {/* Point */}
    <path d="M10.5 19L12 22L13.5 19" />
  </svg>
);

// Endodoncia — tooth with root canal/shield
export const ToothShieldIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...defaultProps} width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
    <path d="M12 2C9.5 2 8 3.5 7 5C6 6.5 5.5 8 5 10C4.5 12 4.5 14 5 16C5.5 18 6.5 20 7.5 22C8 22 8.5 20 9 18C9.5 16 10 14 12 14C14 14 14.5 16 15 18C15.5 20 16 22 16.5 22C17.5 20 18.5 18 19 16C19.5 14 19.5 12 19 10C18.5 8 18 6.5 17 5C16 3.5 14.5 2 12 2Z" />
    {/* Root canal lines inside tooth */}
    <path d="M12 6V10" />
    <path d="M10 8L12 10L14 8" />
  </svg>
);

// Odontopediatría — small tooth with smile
export const BabyToothIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...defaultProps} width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
    <path d="M12 3C9.8 3 8.5 4.3 7.7 5.8C6.8 7.5 6.3 9 5.8 11C5.3 13 5.3 15 5.8 17C6.3 18.8 7 20.5 8 22C8.5 22 9 20 9.5 18C10 16 10.5 14.5 12 14.5C13.5 14.5 14 16 14.5 18C15 20 15.5 22 16 22C17 20.5 17.7 18.8 18.2 17C18.7 15 18.7 13 18.2 11C17.7 9 17.2 7.5 16.3 5.8C15.5 4.3 14.2 3 12 3Z" />
    {/* Happy face on tooth */}
    <circle cx="10" cy="8" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="14" cy="8" r="0.7" fill="currentColor" stroke="none" />
    <path d="M10 10.5C10.5 11.5 11.2 12 12 12C12.8 12 13.5 11.5 14 10.5" />
  </svg>
);

// Cirugía Oral — tooth with forceps
export const SurgeryIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...defaultProps} width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
    {/* Tooth */}
    <path d="M14 1C12.5 1 11.5 2 11 3C10.5 4 10 5 9.8 6.5C9.5 8 9.5 9.5 9.8 11C10 12 10.5 13 11 14C11.3 14 11.5 13 11.8 12C12 11 12.3 10 14 10" />
    <path d="M14 1C15.5 1 16.5 2 17 3C17.5 4 18 5 18.2 6.5C18.5 8 18.5 9.5 18.2 11C18 12 17.5 13 17 14C16.7 14 16.5 13 16.2 12C16 11 15.7 10 14 10" />
    {/* Forceps handles */}
    <path d="M3 14L9 8" />
    <path d="M3 8L9 14" />
    <circle cx="6" cy="11" r="1" />
  </svg>
);

// Periodoncia — tooth with magnifying glass
export const ToothSearchIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg {...defaultProps} width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
    {/* Tooth (shifted right) */}
    <path d="M14 2C12 2 11 3.2 10.3 4.5C9.5 6 9 7.5 8.7 9.5C8.3 11.5 8.3 13.5 8.7 15.5C9 17 9.5 18.5 10.3 20C10.7 20 11 18.5 11.3 17C11.6 15.5 12 14 14 14C16 14 16.4 15.5 16.7 17C17 18.5 17.3 20 17.7 20C18.5 18.5 19 17 19.3 15.5C19.7 13.5 19.7 11.5 19.3 9.5C19 7.5 18.5 6 17.7 4.5C17 3.2 16 2 14 2Z" />
    {/* Magnifying glass */}
    <circle cx="5.5" cy="8" r="3.5" />
    <line x1="8" y1="10.5" x2="10.5" y2="13" />
  </svg>
);
