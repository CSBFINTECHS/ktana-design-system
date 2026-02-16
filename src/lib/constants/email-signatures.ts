/* ─── Email Signature Templates — KTANA ─── */
/* Dark + Character variations + Red accent + KV tagline */

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
  textDark: "#444444",
  divider: "#222222",
  logoLight: `${BASE}/brand/logo-horizontal/light.svg`,
  symbolLight: `${BASE}/brand/symbol/light.svg`,
  logoReduzidoLight: `${BASE}/brand/logo-reduzido/light.svg`,
  charCyberpunk: `${BASE}/brand/character/ktana-cyberpunk.jpg`,
  charNeon: `${BASE}/brand/character/samurai-neon.png`,
  charHolographic: `${BASE}/brand/character/samurai-holographic.png`,
  site: "ktana.ai",
  siteUrl: "https://ktana.ai",
  email: "contato@ktana.ai",
  tagline: "Grow As A Service \u2014 Dados O Novo Petroleo",
} as const;

export const DEFAULT_FIELDS: SignatureFields = {
  nome: "Julio Cesar",
  cargo: "CEO & Founder",
  telefone: "+55 11 99999-9999",
  telefoneLink: "+5511999999999",
};

/* ─── Variante 1: HERO — Cyberpunk AI close-up + dados + tagline ─── */

export function generateHeroSignature(fields: SignatureFields): string {
  const b = KTANA_SIGNATURE;
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:520px;border-collapse:collapse;">
  <tr>
    <td style="background-color:${b.bg};border-radius:12px;overflow:hidden;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td style="vertical-align:top;width:130px;padding:0;background-color:${b.bg};" width="130">
            <img src="${b.charCyberpunk}" alt="" width="130" height="130" style="display:block;width:130px;height:130px;object-fit:cover;border:0;" />
          </td>
          <td style="vertical-align:top;padding:20px 24px 20px 20px;background-color:${b.bg};">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td style="font-size:20px;font-weight:700;color:${b.textWhite};font-family:Arial,Helvetica,sans-serif;line-height:1.1;letter-spacing:-0.5px;padding:0 0 2px 0;">
                  ${fields.nome}
                </td>
              </tr>
              <tr>
                <td style="font-size:11px;color:${b.accent};font-family:Arial,Helvetica,sans-serif;padding:0 0 14px 0;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;">
                  ${fields.cargo}
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 14px 0;">
                  <table cellpadding="0" cellspacing="0" border="0" width="36">
                    <tr><td style="border-top:2px solid ${b.accent};font-size:0;line-height:0;" height="1">&nbsp;</td></tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="font-size:11px;color:${b.textMuted};font-family:Arial,Helvetica,sans-serif;line-height:2;">
                  <a href="mailto:${b.email}" style="color:${b.textLight};text-decoration:none;font-weight:600;">${b.email}</a><br/>
                  <a href="tel:${fields.telefoneLink}" style="color:${b.textMuted};text-decoration:none;">${fields.telefone}</a><br/>
                  <a href="${b.siteUrl}" style="color:${b.textMuted};text-decoration:none;">${b.site}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:0 24px 16px 24px;background-color:${b.bg};">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td style="border-top:1px solid ${b.divider};padding:14px 0 0 0;">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                    <tr>
                      <td style="vertical-align:middle;">
                        <img src="${b.logoLight}" alt="KTANA" height="18" style="display:inline-block;height:18px;border:0;vertical-align:middle;" />
                      </td>
                      <td style="vertical-align:middle;text-align:right;">
                        <span style="font-size:8px;color:${b.textDark};font-family:Arial,Helvetica,sans-serif;letter-spacing:2px;text-transform:uppercase;font-weight:700;">${b.tagline}</span>
                      </td>
                    </tr>
                  </table>
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

/* ─── Variante 2: BLADE — Samurai Neon circular + barra vermelha ─── */

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
          <td style="vertical-align:middle;width:72px;padding:20px 0 20px 24px;" width="72">
            <img src="${b.charNeon}" alt="" width="56" height="56" style="display:block;width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid ${b.divider};" />
          </td>
          <td style="vertical-align:middle;padding:20px 24px 20px 16px;">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td style="font-size:17px;font-weight:700;color:${b.textWhite};font-family:Arial,Helvetica,sans-serif;line-height:1.15;letter-spacing:-0.4px;padding:0 0 2px 0;">
                  ${fields.nome}
                </td>
              </tr>
              <tr>
                <td style="font-size:10px;color:${b.accent};font-family:Arial,Helvetica,sans-serif;padding:0 0 0 0;letter-spacing:1.2px;text-transform:uppercase;font-weight:600;">
                  ${fields.cargo}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:0 24px 18px 24px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td style="border-top:1px solid ${b.divider};padding:14px 0 0 0;font-size:11px;color:${b.textMuted};font-family:Arial,Helvetica,sans-serif;line-height:1;">
                  <a href="mailto:${b.email}" style="color:${b.textLight};text-decoration:none;font-weight:600;">${b.email}</a><span style="color:${b.divider};">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="tel:${fields.telefoneLink}" style="color:${b.textMuted};text-decoration:none;">${fields.telefone}</a><span style="color:${b.divider};">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="${b.siteUrl}" style="color:${b.textMuted};text-decoration:none;">${b.site}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0 0 0;">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                    <tr>
                      <td style="vertical-align:middle;">
                        <img src="${b.logoLight}" alt="KTANA" height="16" style="display:inline-block;height:16px;border:0;vertical-align:middle;" />
                      </td>
                      <td style="vertical-align:middle;text-align:right;">
                        <span style="font-size:8px;color:${b.textDark};font-family:Arial,Helvetica,sans-serif;letter-spacing:2px;text-transform:uppercase;font-weight:700;">${b.tagline}</span>
                      </td>
                    </tr>
                  </table>
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

/* ─── Variante 3: GHOST — Dark minimal, Samurai Holographic micro ─── */

export function generateGhostSignature(fields: SignatureFields): string {
  const b = KTANA_SIGNATURE;
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:520px;border-collapse:collapse;">
  <tr>
    <td style="background-color:${b.bg};border-radius:12px;padding:22px 24px;overflow:hidden;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="vertical-align:middle;padding:0 12px 0 0;" width="40">
            <img src="${b.charHolographic}" alt="" width="36" height="36" style="display:block;width:36px;height:36px;border-radius:50%;object-fit:cover;border:1px solid ${b.divider};" />
          </td>
          <td style="vertical-align:middle;">
            <span style="font-size:14px;font-weight:700;color:${b.textWhite};letter-spacing:-0.2px;">${fields.nome}</span><span style="font-size:11px;color:${b.textMuted};font-weight:400;">&nbsp;&nbsp;&middot;&nbsp;&nbsp;${fields.cargo}</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="background-color:${b.bg};border-radius:0 0 12px 12px;padding:0 24px 22px 24px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="padding:0 0 12px 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="28">
              <tr><td style="border-top:2px solid ${b.accent};font-size:0;line-height:0;" height="1">&nbsp;</td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="font-size:11px;font-family:Arial,Helvetica,sans-serif;line-height:1;color:${b.textMuted};padding:0 0 14px 0;">
            <a href="mailto:${b.email}" style="color:${b.textLight};text-decoration:none;font-weight:600;">${b.email}</a><span style="color:${b.divider};">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="tel:${fields.telefoneLink}" style="color:${b.textMuted};text-decoration:none;">${fields.telefone}</a><span style="color:${b.divider};">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="${b.siteUrl}" style="color:${b.textMuted};text-decoration:none;">${b.site}</a>
          </td>
        </tr>
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td style="vertical-align:middle;">
                  <img src="${b.symbolLight}" alt="KTANA" width="16" height="16" style="display:inline-block;width:16px;height:16px;border:0;vertical-align:middle;" />
                </td>
                <td style="vertical-align:middle;text-align:right;">
                  <span style="font-size:7px;color:${b.textDark};font-family:Arial,Helvetica,sans-serif;letter-spacing:2px;text-transform:uppercase;font-weight:700;">${b.tagline}</span>
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
    description: "Cyberpunk AI close-up + dados completos + tagline KV",
    generate: generateHeroSignature,
  },
  {
    id: "blade",
    label: "Blade",
    description: "Barra vermelha + Samurai Neon circular + tagline KV",
    generate: generateBladeSignature,
  },
  {
    id: "ghost",
    label: "Ghost",
    description: "Dark minimal — Samurai Holographic micro + accent vermelho",
    generate: generateGhostSignature,
  },
];
