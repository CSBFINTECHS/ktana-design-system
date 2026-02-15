/* ─── Email Signature Templates — KTANA ─── */

export interface SignatureFields {
  nome: string;
  cargo: string;
  telefone: string;
  telefoneLink: string;
}

export const KTANA_SIGNATURE = {
  accent: "#FF3317",
  textPrimary: "#141414",
  textSecondary: "#575757",
  textMuted: "#999999",
  divider: "#E5E5E5",
  bgSubtle: "#F8F8F8",
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
  telefoneLink: "+5511999999999",
};

/* ─── Variante 1: Executive ─── */

export function generateExecutiveSignature(fields: SignatureFields): string {
  const b = KTANA_SIGNATURE;
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:480px;border-collapse:collapse;">
  <tr>
    <td style="padding:0 0 16px 0;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size:18px;font-weight:700;color:${b.textPrimary};font-family:Arial,Helvetica,sans-serif;line-height:1.2;letter-spacing:-0.3px;">
            ${fields.nome}
          </td>
        </tr>
        <tr>
          <td style="font-size:13px;color:${b.textSecondary};font-family:Arial,Helvetica,sans-serif;padding:4px 0 0 0;letter-spacing:0.2px;">
            ${fields.cargo}
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 16px 0;">
      <table cellpadding="0" cellspacing="0" border="0" width="80">
        <tr><td style="border-top:2px solid ${b.accent};font-size:0;line-height:0;" height="1">&nbsp;</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 4px 0;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size:12px;color:${b.textSecondary};font-family:Arial,Helvetica,sans-serif;line-height:1;">
            <a href="tel:${fields.telefoneLink}" style="color:${b.textSecondary};text-decoration:none;">${fields.telefone}</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 4px 0;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size:12px;font-family:Arial,Helvetica,sans-serif;line-height:1;">
            <a href="mailto:${b.email}" style="color:${b.textPrimary};text-decoration:none;font-weight:600;">${b.email}</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 20px 0;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size:12px;font-family:Arial,Helvetica,sans-serif;line-height:1;">
            <a href="${b.siteUrl}" style="color:${b.textSecondary};text-decoration:none;">${b.site}</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="border-top:1px solid ${b.divider};padding:16px 0 0 0;">
      <img src="${b.logoHorizontal}" alt="KTANA" height="28" style="display:block;height:28px;border:0;" />
    </td>
  </tr>
</table>`;
}

/* ─── Variante 2: Sidebar ─── */

export function generateSidebarSignature(fields: SignatureFields): string {
  const b = KTANA_SIGNATURE;
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:480px;border-collapse:collapse;">
  <tr>
    <td style="vertical-align:top;padding-right:20px;border-right:2px solid ${b.accent};" width="48">
      <img src="${b.symbol}" alt="KTANA" width="40" height="40" style="display:block;width:40px;height:40px;border:0;" />
    </td>
    <td style="vertical-align:top;padding-left:20px;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size:16px;font-weight:700;color:${b.textPrimary};font-family:Arial,Helvetica,sans-serif;line-height:1.2;letter-spacing:-0.2px;padding:0 0 2px 0;">
            ${fields.nome}
          </td>
        </tr>
        <tr>
          <td style="font-size:12px;color:${b.textSecondary};font-family:Arial,Helvetica,sans-serif;padding:0 0 14px 0;letter-spacing:0.3px;">
            ${fields.cargo}
          </td>
        </tr>
        <tr>
          <td style="font-size:12px;color:${b.textSecondary};font-family:Arial,Helvetica,sans-serif;line-height:2;">
            <a href="tel:${fields.telefoneLink}" style="color:${b.textSecondary};text-decoration:none;">${fields.telefone}</a><br/>
            <a href="mailto:${b.email}" style="color:${b.textPrimary};text-decoration:none;font-weight:600;">${b.email}</a><br/>
            <a href="${b.siteUrl}" style="color:${b.textSecondary};text-decoration:none;">${b.site}</a>
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
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:480px;border-collapse:collapse;">
  <tr>
    <td style="padding:0 0 12px 0;">
      <span style="font-size:14px;font-weight:700;color:${b.textPrimary};letter-spacing:-0.2px;">${fields.nome}</span><span style="font-size:13px;color:${b.textMuted};font-weight:400;">&nbsp;&nbsp;&middot;&nbsp;&nbsp;${fields.cargo}</span>
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 12px 0;">
      <table cellpadding="0" cellspacing="0" border="0" width="40">
        <tr><td style="border-top:2px solid ${b.accent};font-size:0;line-height:0;" height="1">&nbsp;</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="font-size:12px;font-family:Arial,Helvetica,sans-serif;line-height:1;color:${b.textSecondary};">
      <a href="mailto:${b.email}" style="color:${b.textPrimary};text-decoration:none;font-weight:600;">${b.email}</a><span style="color:${b.textMuted};">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="tel:${fields.telefoneLink}" style="color:${b.textSecondary};text-decoration:none;">${fields.telefone}</a><span style="color:${b.textMuted};">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span><a href="${b.siteUrl}" style="color:${b.textSecondary};text-decoration:none;">${b.site}</a>
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
    id: "executive",
    label: "Executive",
    description: "Layout vertical premium com hierarquia forte e accent bar",
    generate: generateExecutiveSignature,
  },
  {
    id: "sidebar",
    label: "Sidebar",
    description: "Symbol com barra lateral accent e dados alinhados",
    generate: generateSidebarSignature,
  },
  {
    id: "minimal",
    label: "Minimal",
    description: "Uma linha de identidade + contatos separados por ponto",
    generate: generateMinimalSignature,
  },
];
