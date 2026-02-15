import Image from "next/image";
import { assetUrl } from "@/lib/utils";

/* ─── Symbol (K geom) ─── */

type BrandVariant = "dark" | "light";

export function KTANASymbol({
  variant = "dark",
  size = 64,
  className,
}: {
  variant?: BrandVariant;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl(`/brand/symbol/${variant}.svg`)}
      alt={`KTANA Symbol ${variant}`}
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}

/* ─── Nome (wordmark KTANA) ─── */

export function KTANANome({
  variant = "dark",
  height = 33,
  className,
}: {
  variant?: BrandVariant;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl(`/brand/nome/${variant}.svg`)}
      alt={`KTANA Nome ${variant}`}
      width={Math.round(height * (173 / 33))}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      unoptimized
    />
  );
}

/* ─── Slogan ─── */

export function KTANASlogan({
  variant = "dark",
  height = 13,
  className,
}: {
  variant?: BrandVariant;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl(`/brand/slogan/${variant}.svg`)}
      alt={`KTANA Slogan ${variant}`}
      width={Math.round(height * (173 / 13))}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      unoptimized
    />
  );
}

/* ─── Nome + Slogan ─── */

export function KTANANomeSlogan({
  variant = "dark",
  height = 56,
  className,
}: {
  variant?: BrandVariant;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl(`/brand/nome-slogan/${variant}.svg`)}
      alt={`KTANA Nome + Slogan ${variant}`}
      width={Math.round(height * (173 / 56))}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      unoptimized
    />
  );
}

/* ─── Logo Horizontal (Symbol + Nome + Slogan) ─── */

export function KTANALogoHorizontal({
  variant = "dark",
  height = 106,
  className,
}: {
  variant?: BrandVariant;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl(`/brand/logo-horizontal/${variant}.svg`)}
      alt={`KTANA Logo Horizontal ${variant}`}
      width={Math.round(height * (301 / 106))}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      unoptimized
    />
  );
}

/* ─── Logo Vertical ─── */

export function KTANALogoVertical({
  variant = "dark",
  height = 149,
  className,
}: {
  variant?: BrandVariant;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl(`/brand/logo-vertical/${variant}.svg`)}
      alt={`KTANA Logo Vertical ${variant}`}
      width={Math.round(height * (101 / 149))}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      unoptimized
    />
  );
}

/* ─── Logo Extendido ─── */

export function KTANALogoExtendido({
  variant = "dark",
  height = 81,
  className,
}: {
  variant?: BrandVariant;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl(`/brand/logo-extendido/${variant}.svg`)}
      alt={`KTANA Logo Extendido ${variant}`}
      width={Math.round(height * (428 / 81))}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      unoptimized
    />
  );
}

/* ─── Logo Reduzido ─── */

export function KTANALogoReduzido({
  variant = "dark",
  size = 100,
  className,
}: {
  variant?: BrandVariant;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl(`/brand/logo-reduzido/${variant}.svg`)}
      alt={`KTANA Logo Reduzido ${variant}`}
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}

/* ─── Foto de Perfil ─── */

export function KTANAFotoPerfil({
  variant = "dark",
  size = 262,
  className,
}: {
  variant?: BrandVariant;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl(`/brand/foto-perfil/${variant}.png`)}
      alt={`KTANA Foto de Perfil ${variant}`}
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}

/* ─── Usuario ─── */

export function KTANAUsuario({
  variant = "dark",
  height = 112,
  className,
}: {
  variant?: BrandVariant;
  height?: number;
  className?: string;
}) {
  const ratio = variant === "dark" ? 308 / 112 : 288 / 93;
  return (
    <Image
      src={assetUrl(`/brand/usuario/${variant}.svg`)}
      alt={`KTANA Usuario ${variant}`}
      width={Math.round(height * ratio)}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      unoptimized
    />
  );
}

/* ─── Samurai Character ─── */

export function KTANASamurai({
  height = 400,
  className,
}: {
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl("/brand/character/samurai.png")}
      alt="KTANA Samurai Character"
      width={Math.round(height * (948 / 1128))}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      unoptimized
    />
  );
}

/* ─── Samurai Principal (wide composition) ─── */

export function KTANASamuraiPrincipal({
  height = 400,
  className,
}: {
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl("/brand/character/samurai-principal.png")}
      alt="KTANA - Embrace The Future"
      width={Math.round(height * (5120 / 1896))}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      unoptimized
    />
  );
}

/* ─── Variacoes (grid de todas as variantes) ─── */

export function KTANAVariacoes({
  variant = "dark",
  height = 200,
  className,
}: {
  variant?: BrandVariant;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={assetUrl(`/brand/z-variacoes/${variant}.svg`)}
      alt={`KTANA Variacoes ${variant}`}
      width={Math.round(height * (1968 / 396))}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      unoptimized
    />
  );
}
