import type { SVGProps } from "react";

export type IconName =
  | "arrow-right"
  | "briefcase"
  | "download"
  | "layers"
  | "mail"
  | "menu"
  | "phone"
  | "quote"
  | "send"
  | "sparkles"
  | "x";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}

export function Icon({ name, size, ...props }: IconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    width: size ?? props.width ?? 24,
    height: size ?? props.height ?? 24,
    ...props,
  };

  switch (name) {
    case "arrow-right":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M12 12v2" />
        </svg>
      );
    case "download":
      return (
        <svg {...commonProps}>
          <path d="M12 15V3" />
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
        </svg>
      );
    case "layers":
      return (
        <svg {...commonProps}>
          <path d="m12 2 8 4-8 4-8-4 8-4Z" />
          <path d="m4 10 8 4 8-4" />
          <path d="m4 16 8 4 8-4" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      );
    case "menu":
      return (
        <svg {...commonProps}>
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      );
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.47-1.2a2 2 0 0 1 2.11-.45c.84.3 1.71.5 2.61.63A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "quote":
      return (
        <svg {...commonProps}>
          <path d="M7 7H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3" />
          <path d="M20 7h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3" />
          <path d="M7 17v-3a3 3 0 0 1 3-3h4" />
          <path d="M20 17v-3a3 3 0 0 0-3-3h-4" />
        </svg>
      );
    case "send":
      return (
        <svg {...commonProps}>
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...commonProps}>
          <path d="M12 3 9.5 9.5 3 12l6.5 2.5L12 21l2.5-6.5L21 12l-6.5-2.5L12 3Z" />
          <path d="M19 3h1" />
          <path d="M19 3v1" />
          <path d="M19 19h1" />
          <path d="M19 19v1" />
        </svg>
      );
    case "x":
    default:
      return (
        <svg {...commonProps}>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      );
  }
}
