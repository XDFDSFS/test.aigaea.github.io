import{ak as o,aj as a}from"./entry.0c0b4405.js";import{u as i}from"./user.b1391fa1.js";import{h as n}from"./user.2fd1de65.js";import"./request.68272065.js";const c=o((s,e)=>{const t=i();if(e.query.token){t.setToken(e.query.token);const r=t.getInvitationCode;return e.query.type==="bind"&&r&&n({referral_code:r}),a(`/${e.query.path}`)}});export{c as default};
