/* ─── Email Signature Templates — KTANA ─── */

export interface SignatureFields {
  nome: string;
  cargo: string;
  telefone: string;
}

export const KTANA_SIGNATURE = {
  accent: "#FF3317",
  textPrimary: "#141414",
  textSecondary: "#575757",
  divider: "#D0D5D7",
  logoHorizontal:
    "https://ktana-design-system.vercel.app/designsystem/brand/logo-horizontal/dark.svg",
  symbol:
    "https://ktana-design-system.vercel.app/designsystem/brand/symbol/dark.svg",
  logoReduzido:
    "https://ktana-design-system.vercel.app/designsystem/brand/logo-reduzido/dark.svg",
  site: "ktana.ai",
  siteUrl: "https://ktana.ai",
  email: "contato@ktana.ai",
} as const;

export const DEFAULT_FIELDS: SignatureFields = {
  nome: "Julio Cesar",
  cargo: "CEO & Founder",
  telefone: "+55 11 99999-9999",
};

/* ─── Variante 1: Padrao (Completa) ─── */

export function generateStandardSignature(fields: SignatureFields): string {
  const b = KTANA_SIGNATURE;
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:600px;">
  <tr>
    <td style="padding:0 0 12px 0;">
      <img src="${b.logoHorizontal}" alt="KTANA" height="40" style="display:block;height:40px;border:0;" />
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 12px 0;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="border-top:2px solid ${b.accent};font-size:0;line-height:0;" height="1">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 4px 0;font-size:16px;font-weight:bold;color:${b.textPrimary};font-family:Arial,Helvetica,sans-serif;">
      ${fields.nome}
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 10px 0;font-size:13px;color:${b.textSecondary};font-family:Arial,Helvetica,sans-serif;">
      ${fields.cargo}
    </td>
  </tr>
  <tr>
    <td style="font-size:12px;color:${b.textSecondary};font-family:Arial,Helvetica,sans-serif;">
      <span style="white-space:nowrap;">&#128222; ${fields.telefone}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span style="white-space:nowrap;">&#9993; <a href="mailto:${b.email}" style="color:${b.textSecondary};text-decoration:none;">${b.email}</a></span>&nbsp;&nbsp;|&nbsp;&nbsp;<span style="white-space:nowrap;">&#127760; <a href="${b.siteUrl}" style="color:${b.textSecondary};text-decoration:none;">${b.site}</a></span>
    </td>
  </tr>
</table>`;
}

/* ─── Variante 2: Compacta ─── */

export function generateCompactSignature(fields: SignatureFields): string {
  const b = KTANA_SIGNATURE;
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:600px;">
  <tr>
    <td style="vertical-align:top;padding-right:12px;" width="44">
      <img src="${b.symbol}" alt="KTANA" width="32" height="32" style="display:block;width:32px;height:32px;border:0;" />
    </td>
    <td style="vertical-align:top;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size:14px;font-weight:bold;color:${b.textPrimary};font-family:Arial,Helvetica,sans-serif;padding:0 0 4px 0;">
            ${fields.nome}<span style="font-weight:normal;color:${b.textSecondary};"> &mdash; ${fields.cargo}</span>
          </td>
        </tr>
        <tr>
          <td style="font-size:12px;color:${b.textSecondary};font-family:Arial,Helvetica,sans-serif;padding:0 0 6px 0;">
            <span style="white-space:nowrap;">&#128222; ${fields.telefone}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span style="white-space:nowrap;">&#9993; <a href="mailto:${b.email}" style="color:${b.textSecondary};text-decoration:none;">${b.email}</a></span>&nbsp;&nbsp;|&nbsp;&nbsp;<span style="white-space:nowrap;">&#127760; <a href="${b.siteUrl}" style="color:${b.textSecondary};text-decoration:none;">${b.site}</a></span>
          </td>
        </tr>
        <tr>
          <td style="padding:0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="border-top:1px solid ${b.accent};font-size:0;line-height:0;" height="1">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ─── Variante 3: Minimal ─── */

export function generateMinimalSignature(fields: SignatureFields): string {
  const b = KTANA_SIGNATURE;
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:600px;">
  <tr>
    <td style="font-size:13px;color:${b.textPrimary};font-family:Arial,Helvetica,sans-serif;padding:0 0 3px 0;">
      <span style="font-weight:bold;">${fields.nome}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span style="color:${b.textSecondary};">${fields.cargo}</span>
    </td>
  </tr>
  <tr>
    <td style="font-size:12px;color:${b.textSecondary};font-family:Arial,Helvetica,sans-serif;padding:0 0 8px 0;">
      <a href="mailto:${b.email}" style="color:${b.textSecondary};text-decoration:none;">${b.email}</a>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;${fields.telefone}
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 8px 0;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="border-top:1px solid ${b.accent};font-size:0;line-height:0;" height="1">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0;">
      <img src="${b.logoReduzido}" alt="KTANA" height="24" style="display:block;height:24px;border:0;" />
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
    id: "padrao",
    label: "Padrao",
    description: "Logo horizontal + linha accent vermelha + dados completos",
    generate: generateStandardSignature,
  },
  {
    id: "compacta",
    label: "Compacta",
    description: "Symbol lateral + nome/cargo em linha + dados abaixo",
    generate: generateCompactSignature,
  },
  {
    id: "minimal",
    label: "Minimal",
    description: "Nome e cargo em linha + email/telefone + logo reduzido",
    generate: generateMinimalSignature,
  },
];
