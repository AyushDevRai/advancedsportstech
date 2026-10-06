import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
const html = await readFile(".cache/ast-current.html", "utf8");
const assets = [
  ["projects/kalinga.jpg", "https://ast-sports.com/wp-content/uploads/2022/05/PITCH-FOR-FIH-MENs-HOCKEY-WORLD-CUP-2018-BHUBNESHWAR-e1651753842441.jpg"],
  ["projects/tantya-tope.jpg", "https://ast-sports.com/wp-content/uploads/2022/04/tt-stadium.jpg"],
  ["projects/sai-aurangabad.jpg", "https://ast-sports.com/wp-content/uploads/2022/05/M-P-Sports-College-Raipur-Dehradun-Hockey-Turf_2.jpg"],
  ["services/concept.jpg", "https://ast-sports.com/wp-content/uploads/2022/04/Picture.png"],
  ["services/survey.png", "https://ast-sports.com/wp-content/uploads/2022/04/survey-and-design.png"],
  ["services/construction.jpg", "https://ast-sports.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-04-21-at-11.35.59-AM-1-e1651558378385.jpeg"],
  ["services/refurbishment.png", "https://ast-sports.com/wp-content/uploads/2022/05/refurbishment-NEw-.png"],
  ["services/line-marking.jpg", "https://ast-sports.com/wp-content/uploads/2022/05/IMG_20160110_155334861_HDR-1024x575.jpg"],
  ["services/testing.png", "https://ast-sports.com/wp-content/uploads/2022/05/Untitled-design-22.png"],
  ["services/lighting.jpg", "https://ast-sports.com/wp-content/uploads/2022/05/l1-e1651568238965.jpg"],
  ["services/maintenance.jpg", "https://ast-sports.com/wp-content/uploads/2022/05/20170731_145407-1024x576.jpg"],
  ["brand/ligature.png", "https://ast-sports.com/wp-content/uploads/2022/05/666666.png"],
  ["brand/spurtan.png", "https://ast-sports.com/wp-content/uploads/2022/05/888888.png"],
  ["brand/smartracks.png", "https://ast-sports.com/wp-content/uploads/2022/05/99999.png"],
  ["brand/gigatera.png", "https://ast-sports.com/wp-content/uploads/2022/05/77777.png"],
  ["brand/humotion.png", "https://ast-sports.com/wp-content/uploads/2022/05/110110110.png"],
  ["brand/poligras.png", "https://ast-sports.com/wp-content/uploads/2022/05/10101010.png"],
];
// Keep the original site's entire client-logo selection, without importing footer links.
const clientStart = html.lastIndexOf("OUR CLIENTS");
const clientHtml = html.slice(clientStart, html.indexOf("Get in Touch",clientStart));
const clientUrls = [...new Set([...clientHtml.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m=>m[1]))];
clientUrls.forEach((url,index)=>assets.push([`clients/client-${index+1}.png`,url]));
const metadata = await fetch("https://ast-sports.com/wp-json/wp/v2/media?media_type=video&per_page=20").then(r=>r.json());
await mkdir(".cache/video",{recursive:true});
await writeFile(".cache/video/sources.json",JSON.stringify(metadata.map(m=>({url:m.source_url,title:m.title.rendered,details:m.media_details})),null,2));
const videos=metadata.filter(m=>m.id===22109 || m.id===3339);
const queue = [...assets.map(([path,url])=>({path:`public/${path}`,url})),...videos.map(m=>({path:`.cache/video/${m.id}.mp4`,url:m.source_url}))];
let index=0;
const failures=[];
await Promise.all(Array.from({length:4},async()=>{
  while(index<queue.length){const item=queue[index++];try{
    await mkdir(item.path.substring(0,item.path.lastIndexOf("/")),{recursive:true});
    try { if((await stat(item.path)).size > 0) continue; } catch {}
    const response=await fetch(item.url); if(!response.ok)throw new Error(`${response.status}`);
    await writeFile(item.path,Buffer.from(await response.arrayBuffer()));
  }catch(error){failures.push({item,error:error.message});}}
}));
await writeFile(".cache/asset-sources.json",JSON.stringify(assets,null,2));
console.log(JSON.stringify({downloaded:queue.length-failures.length,clients:clientUrls.length,failures},null,2));
