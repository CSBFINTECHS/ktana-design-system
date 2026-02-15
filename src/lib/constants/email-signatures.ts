/* ─── Email Signature Templates — KTANA ─── */
/* Dark theme + Samurai 3D + Red accent = High impact branding */

export interface SignatureFields {
  nome: string;
  cargo: string;
  telefone: string;
  telefoneLink: string;
}

const BASE = "https://ktana-design-system.vercel.app/designsystem";

export const KTANA_SIGNATURE = {
  accent: "#FF3317",
  bg: "#0A0A0A",
  bgCard: "#111111",
  textWhite: "#FFFFFF",
  textLight: "#E0E0E0",
  textMuted: "#888888",
  divider: "#222222",
  logoLight: `${BASE}/brand/logo-horizontal/light.svg`,
  symbolLight: `${BASE}/brand/symbol/light.svg`,
  logoReduzidoLight: `${BASE}/brand/logo-reduzido/light.svg`,
  samuraiNeon: `${BASE}/brand/character/samurai-neon.png`,
  samuraiHolographic: `${BASE}/brand/character/samurai-holographic.png`,
  samuraiMain: `${BASE}/brand/character/samurai-main.png`,
  site: "ktana.ai",
  siteUrl: "https://ktana.ai",
  email: "contato@ktana.ai",
} as const;

export const DEFAULT_FIELDS: SignatureFields = {
  nome: "Julio Cesar",
  cargo: "CEO & Founder",
  telefone: "+55 11 99999-9999",
  telefoneLink: "+5511999999999",
};

/* ─── Variante 1: HERO — Samurai Neon + dados lado a lado ─── */

export function generateHeroSignature(fields: SignatureFields): string {
  const b = KTANA_SIGNATURE;
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:520px;border-collapse:collapse;">
  <tr>
    <td style="background-color:${b.bg};border-radius:12px;overflow:hidden;" colspan="3">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td style="vertical-align:bottom;width:140px;background-color:${b.bg};" width="140">
            <img src="${b.samuraiNeon}" alt="" width="140" style="display:block;width:140px;height:auto;border:0;" />
          </td>
          <td style="vertical-align:top;padding:28px 28px 28px 20px;background-color:${b.bg};">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td style="font-size:20px;font-weight:700;color:${b.textWhite};font-family:Arial,Helvetica,sans-serif;line-height:1.1;letter-spacing:-0.5px;padding:0 0 2px 0;">
                  ${fields.nome}
                </td>
              </tr>
              <tr>
                <td style="font-size:11px;color:${b.accent};font-family:Arial,Helvetica,sans-serif;padding:0 0 16px 0;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;">
                  ${fields.cargo}
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 16px 0;">
                  <table cellpadding="0" cellspacing="0" border="0" width="40">
                    <tr><td style="border-top:2px solid ${b.accent};font-size:0;line-height:0;" height="1">&nbsp;</td></tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="font-size:12px;color:${b.textMuted};font-family:Arial,Helvetica,sans-serif;line-height:2.2;">
                  <a href="mailto:${b.email}" style="color:${b.textLight};text-decoration:none;font-weight:600;">${b.email}</a><br/>
                  <a href="tel:${fields.telefoneLink}" style="color:${b.textMuted};text-decoration:none;">${fields.telefone}</a><br/>
                  <a href="${b.siteUrl}" style="color:${b.textMuted};text-decoration:none;">${b.site}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:0 28px 20px 28px;background-color:${b.bg};">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td style="border-top:1px solid ${b.divider};padding:16px 0 0 0;">
                  <img src="${b.logoLight}" alt="KTANA" height="20" style="display:block;height:20px;border:0;" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ─── Variante 2: BLADE — Banner horizontal, samurai no canto direito ─── */

export function generateBladeSignature(fields: SignatureFields): string {
  const b = KTANA_SIGNATURE;
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:520px;border-collapse:collapse;">
  <tr>
    <td style="background-color:${b.bg};border-radius:12px;overflow:hidden;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td colspan="2" style="background-color:${b.accent};font-size:0;line-height:0;height:3px;" height="3">&nbsp;</td>
        </tr>
        <tr>
          <td style="vertical-align:top;padding:24px 0 24px 28px;">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:0 0 14px 0;">
                  <img src="${b.logoLight}" alt="KTANA" height="18" style="display:block;height:18px;border:0;" />
                </td>
              </tr>
              <tr>
                <td style="font-size:18px;font-weight:700;color:${b.textWhite};font-family:Arial,Helvetica,sans-serif;line-height:1.15;letter-spacing:-0.4px;padding:0 0 2px 0;">
                  ${fields.nome}
                </td>
              </tr>
              <tr>
                <td style="font-size:11px;color:${b.accent};font-family:Arial,Helvetica,sans-serif;padding:0 0 16px 0;letter-spacing:1px;text-transform:uppercase;font-weight:600;">
                  ${fields.cargo}
                </td>
              </tr>
              <tr>
                <td style="font-size:11px;color:${b.textMuted};font-family:Arial,Helvetica,sans-serif;line-height:1;">
                  <a href="mailto:${b.email}" style="color:${b.textLight};text-decoration:none;font-weight:600;">${b.email}</a><span style="color:#333;">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="tel:${fields.telefoneLink}" style="color:${b.textMuted};text-decoration:none;">${fields.telefone}</a><span style="color:#333;">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="${b.siteUrl}" style="color:${b.textMuted};text-decoration:none;">${b.site}</a>
                </td>
              </tr>
            </table>
          </td>
          <td style="vertical-align:bottom;width:120px;text-align:right;" width="120">
            <img src="${b.samuraiHolographic}" alt="" width="120" style="display:block;width:120px;height:auto;border:0;" />
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ─── Variante 3: GHOST — Dark minimal com symbol ─── */

export function generateGhostSignature(fields: SignatureFields): string {
  const b = KTANA_SIGNATURE;
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:520px;border-collapse:collapse;">
  <tr>
    <td style="background-color:${b.bg};border-radius:12px;padding:24px 28px;overflow:hidden;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="padding:0 0 14px 0;">
            <img src="${b.symbolLight}" alt="KTANA" width="28" height="28" style="display:block;width:28px;height:28px;border:0;" />
          </td>
        </tr>
        <tr>
          <td style="padding:0 0 3px 0;">
            <span style="font-size:15px;font-weight:700;color:${b.textWhite};letter-spacing:-0.3px;">${fields.nome}</span><span style="font-size:12px;color:${b.textMuted};font-weight:400;">&nbsp;&nbsp;&middot;&nbsp;&nbsp;${fields.cargo}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0 12px 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="32">
              <tr><td style="border-top:2px solid ${b.accent};font-size:0;line-height:0;" height="1">&nbsp;</td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="font-size:11px;font-family:Arial,Helvetica,sans-serif;line-height:1;color:${b.textMuted};">
            <a href="mailto:${b.email}" style="color:${b.textLight};text-decoration:none;font-weight:600;">${b.email}</a><span style="color:#333;">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="tel:${fields.telefoneLink}" style="color:${b.textMuted};text-decoration:none;">${fields.telefone}</a><span style="color:#333;">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="${b.siteUrl}" style="color:${b.textMuted};text-decoration:none;">${b.site}</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ─── Template Registry ─── */

export interface SignatureTemplate {
  id: string;
  label: string;
  description: string;
  generate: (fields: SignatureFields) => string;
}

export const SIGNATURE_TEMPLATES: SignatureTemplate[] = [
  {
    id: "hero",
    label: "Hero",
    description: "Samurai 3D Neon + dados — maximo impacto visual",
    generate: generateHeroSignature,
  },
  {
    id: "blade",
    label: "Blade",
    description: "Banner dark com barra vermelha + samurai holografico lateral",
    generate: generateBladeSignature,
  },
  {
    id: "ghost",
    label: "Ghost",
    description: "Dark minimal — symbol + accent vermelho + dados em linha",
    generate: generateGhostSignature,
  },
];
