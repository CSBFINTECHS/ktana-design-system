export interface TypographyToken {
  token: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  weight: number;
  sample: string;
}

export interface FontReference {
  token: string;
  font: string;
  weight: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  usage: string;
}

export const TYPOGRAPHY_SCALE: TypographyToken[] = [
  { token: "display/hero",   size: "158px", lineHeight: "100%", letterSpacing: "0px", weight: 400, sample: "KTANA" },
  { token: "display/xl",     size: "140px", lineHeight: "100%", letterSpacing: "0px", weight: 400, sample: "Katana" },
  { token: "display/large",  size: "96px",  lineHeight: "100%", letterSpacing: "0px", weight: 400, sample: "Digital" },
  { token: "display/medium", size: "74px",  lineHeight: "110%", letterSpacing: "0px", weight: 400, sample: "Samurai" },
  { token: "heading/xl",     size: "60px",  lineHeight: "115%", letterSpacing: "0px", weight: 400, sample: "Corte Preciso" },
  { token: "heading/large",  size: "56px",  lineHeight: "120%", letterSpacing: "0px", weight: 400, sample: "Tecnologia Afiada" },
  { token: "heading/medium", size: "48px",  lineHeight: "120%", letterSpacing: "0px", weight: 400, sample: "Inovacao sem Limites" },
  { token: "heading/base",   size: "35px",  lineHeight: "130%", letterSpacing: "0px", weight: 400, sample: "Estrategia e performance digital" },
  { token: "heading/small",  size: "32px",  lineHeight: "130%", letterSpacing: "0px", weight: 600, sample: "A lamina que transforma negocios" },
  { token: "body/xl",        size: "32px",  lineHeight: "150%", letterSpacing: "0px", weight: 500, sample: "Plataforma completa para acelerar resultados com precisao cirurgica." },
  { token: "body/large",     size: "25px",  lineHeight: "150%", letterSpacing: "0px", weight: 500, sample: "Cada detalhe foi pensado para maximizar impacto." },
  { token: "body/medium",    size: "20px",  lineHeight: "150%", letterSpacing: "0px", weight: 500, sample: "Automatize processos e escale com inteligencia." },
  { token: "body/base",      size: "16px",  lineHeight: "150%", letterSpacing: "0px", weight: 500, sample: "A KTANA oferece infraestrutura digital completa para empresas que buscam excelencia." },
  { token: "body/sm",        size: "14px",  lineHeight: "150%", letterSpacing: "0px", weight: 500, sample: "Texto auxiliar e labels de interface." },
  { token: "body/xs",        size: "12px",  lineHeight: "150%", letterSpacing: "0px", weight: 500, sample: "Micro-texto para badges e tooltips." },
];

export const FONT_REFERENCE: FontReference[] = [
  { token: "display/hero",   font: "Zen Dots",  weight: "400", size: "158px", lineHeight: "100%", letterSpacing: "0px", usage: "Capa principal" },
  { token: "display/xl",     font: "Zen Dots",  weight: "400", size: "140px", lineHeight: "100%", letterSpacing: "0px", usage: "Capa secundaria" },
  { token: "display/large",  font: "Zen Dots",  weight: "400", size: "96px",  lineHeight: "100%", letterSpacing: "0px", usage: "Secao importante" },
  { token: "display/medium", font: "Zen Dots",  weight: "400", size: "74px",  lineHeight: "110%", letterSpacing: "0px", usage: "Abertura capitulo" },
  { token: "heading/xl",     font: "Zen Dots",  weight: "400", size: "60px",  lineHeight: "115%", letterSpacing: "0px", usage: "Titulo principal" },
  { token: "heading/large",  font: "Zen Dots",  weight: "400", size: "56px",  lineHeight: "120%", letterSpacing: "0px", usage: "Titulo de slide" },
  { token: "heading/medium", font: "Zen Dots",  weight: "400", size: "48px",  lineHeight: "120%", letterSpacing: "0px", usage: "Secoes do slide" },
  { token: "heading/base",   font: "Zen Dots",  weight: "400", size: "35px",  lineHeight: "130%", letterSpacing: "0px", usage: "Sub-secoes" },
  { token: "heading/small",  font: "Zen Dots",  weight: "600", size: "32px",  lineHeight: "130%", letterSpacing: "0px", usage: "Titulos menores" },
  { token: "body/xl",        font: "Satoshi",   weight: "500", size: "32px",  lineHeight: "150%", letterSpacing: "0px", usage: "Lead text" },
  { token: "body/large",     font: "Satoshi",   weight: "500", size: "25px",  lineHeight: "150%", letterSpacing: "0px", usage: "Bullets principais" },
  { token: "body/medium",    font: "Satoshi",   weight: "500", size: "20px",  lineHeight: "150%", letterSpacing: "0px", usage: "Sub-bullets" },
  { token: "body/base",      font: "Satoshi",   weight: "500", size: "16px",  lineHeight: "150%", letterSpacing: "0px", usage: "Texto auxiliar" },
  { token: "body/sm",        font: "Satoshi",   weight: "500", size: "14px",  lineHeight: "150%", letterSpacing: "0px", usage: "Labels UI" },
  { token: "body/xs",        font: "Satoshi",   weight: "500", size: "12px",  lineHeight: "150%", letterSpacing: "0px", usage: "Micro-texto" },
];
