const BASE='https://make.fun/api'; const cache=new Map();
async function get(path){if(cache.has(path))return cache.get(path);const p=fetch(BASE+path).then(r=>{if(!r.ok)throw Error('API '+r.status);return r.json()});cache.set(path,p);return p}
export async function competitions(){let items=[],cursor='';do{const d=await get('/competitions?activity=times&limit=100'+(cursor?'&cursor='+encodeURIComponent(cursor):''));items.push(...d.items);cursor=d.next_cursor||d.nextCursor||'';}while(cursor);return {items}}
export const competition=s=>get('/competitions/'+encodeURIComponent(s));
export const leaderboard=s=>get('/competitions/'+encodeURIComponent(s)+'/leaderboard');
export const profile=h=>get('/profiles/'+encodeURIComponent(h));
