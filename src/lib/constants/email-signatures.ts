/* ─── Email Signature Templates — KTANA ─── */
/* Dark + Character variations + Red accent + Social icons + Disclaimer */

export interface SignatureFields {
  nome: string;
  cargo: string;
  telefone: string;
  telefoneLink: string;
  linkedin: string;
  instagram: string;
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
  iconLinkedin: `${BASE}/brand/social-icons/linkedin.svg`,
  iconInstagram: `${BASE}/brand/social-icons/instagram.svg`,
  iconGlobe: `${BASE}/brand/social-icons/globe.svg`,
  site: "ktana.ai",
  siteUrl: "https://ktana.ai",
  email: "contato@ktana.ai",
  tagline: "Grow As A Service \u2014 Dados O Novo Petroleo",
  disclaimer: "Esta mensagem e seus anexos sao confidenciais e destinados exclusivamente ao destinatario indicado. Se voce recebeu por engano, por favor notifique o remetente e apague esta mensagem imediatamente. A divulgacao, copia ou distribuicao nao autorizada e estritamente proibida.",
} as const;

export const DEFAULT_FIELDS: SignatureFields = {
  nome: "Julio Cesar",
  cargo: "CEO & Founder",
  telefone: "+55 11 99999-9999",
  telefoneLink: "+5511999999999",
  linkedin: "https://linkedin.com/company/ktana",
  instagram: "https://instagram.com/ktana.ai",
};

/* ─── Bloco de contatos reutilizavel ─── */

function contactBlock(b: typeof KTANA_SIGNATURE, fields: SignatureFields): string {
  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="font-size:12px;color:${b.textMuted};font-family:Arial,Helvetica,sans-serif;line-height:2.2;">
            <a href="tel:${fields.telefoneLink}" style="color:${b.textLight};text-decoration:none;font-weight:600;">${fields.telefone}</a><br/>
            <a href="mailto:${b.email}" style="color:${b.textLight};text-decoration:none;">${b.email}</a><br/>
            <a href="${b.siteUrl}" style="color:${b.textMuted};text-decoration:none;">${b.site}</a>
          </td>
        </tr>
      </table>`;
}

/* ─── Bloco de redes sociais com icones ─── */

function socialBlock(b: typeof KTANA_SIGNATURE, fields: SignatureFields): string {
  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="padding:0 8px 0 0;">
            <a href="${fields.linkedin}" style="text-decoration:none;"><img src="${b.iconLinkedin}" alt="LinkedIn" width="18" height="18" style="display:block;width:18px;height:18px;border:0;" /></a>
          </td>
          <td style="padding:0 8px 0 0;">
            <a href="${fields.instagram}" style="text-decoration:none;"><img src="${b.iconInstagram}" alt="Instagram" width="18" height="18" style="display:block;width:18px;height:18px;border:0;" /></a>
          </td>
          <td style="padding:0;">
            <a href="${b.siteUrl}" style="text-decoration:none;"><img src="${b.iconGlobe}" alt="Site" width="18" height="18" style="display:block;width:18px;height:18px;border:0;" /></a>
          </td>
        </tr>
      </table>`;
}

/* ─── Bloco de disclaimer reutilizavel ─── */

function disclaimerBlock(b: typeof KTANA_SIGNATURE): string {
  return `<tr>
          <td style="padding:16px 0 0 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td style="border-top:1px solid ${b.divider};padding:12px 0 0 0;font-size:9px;color:${b.textDark};font-family:Arial,Helvetica,sans-serif;line-height:1.5;">
                  ${b.disclaimer}
                </td>
              </tr>
            </table>
          </td>
        </tr>`;
}

/* ─── Variante 1: HERO — Cyberpunk AI close-up + dados + social icons + disclaimer ─── */

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
                  <a href="tel:${fields.telefoneLink}" style="color:${b.textLight};text-decoration:none;font-weight:600;">${fields.telefone}</a><br/>
                  <a href="mailto:${b.email}" style="color:${b.textLight};text-decoration:none;">${b.email}</a><br/>
                  <a href="${b.siteUrl}" style="color:${b.textMuted};text-decoration:none;">${b.site}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:0 24px 0 24px;background-color:${b.bg};">
            ${socialBlock(b, fields)}
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:12px 24px 0 24px;background-color:${b.bg};">
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
        <tr>
          <td colspan="2" style="padding:0 24px 20px 24px;background-color:${b.bg};">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              ${disclaimerBlock(b)}
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ─── Variante 2: BLADE — Samurai Neon circular + barra vermelha + social icons + disclaimer ─── */

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
          <td colspan="2" style="padding:0 24px 0 24px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td style="border-top:1px solid ${b.divider};padding:14px 0 0 0;font-size:11px;color:${b.textMuted};font-family:Arial,Helvetica,sans-serif;line-height:1;">
                  <a href="tel:${fields.telefoneLink}" style="color:${b.textLight};text-decoration:none;font-weight:600;">${fields.telefone}</a><span style="color:${b.divider};">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="mailto:${b.email}" style="color:${b.textLight};text-decoration:none;">${b.email}</a><span style="color:${b.divider};">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="${b.siteUrl}" style="color:${b.textMuted};text-decoration:none;">${b.site}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:14px 24px 0 24px;">
            ${socialBlock(b, fields)}
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:14px 24px 0 24px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td style="border-top:1px solid ${b.divider};padding:14px 0 0 0;">
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
        <tr>
          <td colspan="2" style="padding:0 24px 20px 24px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              ${disclaimerBlock(b)}
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ─── Variante 3: GHOST — Dark minimal, Samurai Holographic micro + social icons + disclaimer ─── */

export function generateGhostSignature(fields: SignatureFields): string {
  const b = KTANA_SIGNATURE;
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:520px;border-collapse:collapse;">
  <tr>
    <td style="background-color:${b.bg};border-radius:12px;padding:22px 24px;overflow:hidden;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td style="vertical-align:middle;padding:0 12px 0 0;" width="40">
            <img src="${b.charHolographic}" alt="" width="36" height="36" style="display:block;width:36px;height:36px;border-radius:50%;object-fit:cover;border:1px solid ${b.divider};" />
          </td>
          <td style="vertical-align:middle;">
            <span style="font-size:14px;font-weight:700;color:${b.textWhite};letter-spacing:-0.2px;">${fields.nome}</span><span style="font-size:11px;color:${b.textMuted};font-weight:400;">&nbsp;&nbsp;&middot;&nbsp;&nbsp;${fields.cargo}</span>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:14px 0 0 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td style="border-top:2px solid ${b.accent};font-size:0;line-height:0;width:28px;" width="28" height="1">&nbsp;</td>
                <td style="font-size:0;line-height:0;" height="1">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:12px 0 0 0;font-size:11px;font-family:Arial,Helvetica,sans-serif;line-height:1;color:${b.textMuted};">
            <a href="tel:${fields.telefoneLink}" style="color:${b.textLight};text-decoration:none;font-weight:600;">${fields.telefone}</a><span style="color:${b.divider};">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="mailto:${b.email}" style="color:${b.textLight};text-decoration:none;">${b.email}</a><span style="color:${b.divider};">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="${b.siteUrl}" style="color:${b.textMuted};text-decoration:none;">${b.site}</a>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:14px 0 0 0;">
            ${socialBlock(b, fields)}
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:14px 0 0 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td style="border-top:1px solid ${b.divider};padding:12px 0 0 0;">
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
        <tr>
          <td colspan="2">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              ${disclaimerBlock(b)}
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
    description: "Cyberpunk AI close-up + contatos + social icons + disclaimer",
    generate: generateHeroSignature,
  },
  {
    id: "blade",
    label: "Blade",
    description: "Barra vermelha + Samurai Neon circular + social icons + disclaimer",
    generate: generateBladeSignature,
  },
  {
    id: "ghost",
    label: "Ghost",
    description: "Dark minimal — Samurai Holographic micro + social icons + disclaimer",
    generate: generateGhostSignature,
  },
];
