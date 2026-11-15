export const esc=v=>String(v??'').replace(/[&<>"']/g,c=>`&#${c.charCodeAt(0)};`);
export const money=v=>{const n=Number(v||0);return Number.isFinite(n)?n.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}):'—'};
export const date=v=>v?new Date(v).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):'—';
export const left=v=>{const n=new Date(v)-Date.now();if(!v)return 'No deadline';if(n<=0)return 'Ended';const d=Math.floor(n/864e5),h=Math.floor(n%864e5/36e5);return d?`${d}d ${h}h left`:`${h}h ${Math.floor(n%36e5/6e4)}m left`};
export const val=(o,...keys)=>keys.reduce((x,k)=>x??o?.[k],null);
