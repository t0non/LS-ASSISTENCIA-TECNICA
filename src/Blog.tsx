import {useEffect,type MouseEvent} from 'react';
import {getBlogMetadata,renderBlogDocument} from './blog-render';
import './cold-room.css';
import './blog.css';
export default function Blog({slug}:{slug?:string}) {
 const metadata=getBlogMetadata(slug);
 useEffect(()=>{
  document.title=metadata.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content',metadata.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href',metadata.url);
  for(const [key,value] of Object.entries({'og:title':metadata.title,'og:description':metadata.description,'og:url':metadata.url,'og:type':metadata.post?'article':'website','og:image':'https://lsassistenciatech.com.br/assets/logo.webp'})) document.querySelector(`meta[property="${key}"]`)?.setAttribute('content',value);
  document.querySelector('script[type="application/ld+json"]')?.replaceChildren(document.createTextNode(JSON.stringify(metadata.schema)));
 },[slug]);
 const track=(event:MouseEvent<HTMLDivElement>)=>{
  const link=(event.target as Element).closest<HTMLAnchorElement>('a[data-blog-whatsapp]');
  if(!link)return;
  const w=window as Window & {dataLayer?:Record<string,unknown>[]};
  w.dataLayer=w.dataLayer||[];
  w.dataLayer.push({event:'whatsapp_click',page_type:'blog',article_slug:slug||'index',page_path:window.location.pathname,link_url:link.href});
 };
 return <div onClick={track} dangerouslySetInnerHTML={{__html:renderBlogDocument(slug)}}/>;
}
