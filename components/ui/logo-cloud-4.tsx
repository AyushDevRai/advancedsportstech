import Image from "next/image";
import { type ComponentProps } from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";

type Logo = { src: string; alt: string; width?: number; height?: number };
type LogoCloudProps = ComponentProps<"div"> & { logos: Logo[] };

export function LogoCloud({ logos, className, ...props }: LogoCloudProps) {
  return <div {...props} className={cn("logo-cloud relative mx-auto", className)}>
    <InfiniteSlider gap={56} reverse speed={60} speedOnHover={20}>
      {logos.map(logo => <Image className="logo-cloud-image pointer-events-none select-none" key={logo.alt} src={logo.src} alt={logo.alt} width={logo.width ?? 175} height={logo.height ?? 65} sizes="175px" loading="eager" />)}
    </InfiniteSlider>
    <ProgressiveBlur direction="left" blurIntensity={1} className="logo-cloud-blur pointer-events-none absolute inset-y-0 left-0" />
    <ProgressiveBlur direction="right" blurIntensity={1} className="logo-cloud-blur pointer-events-none absolute inset-y-0 right-0" />
  </div>;
}
