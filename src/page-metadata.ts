export function applyPageMetadata(metadata:{title:string;description:string;url:string;image:string;schema:unknown}) {
 document.title=metadata.title;
 document.querySelector('meta[name="description"]')?.setAttribute('content',metadata.description);
 document.querySelector('link[rel="canonical"]')?.setAttribute('href',metadata.url);
 for(const [key,value] of Object.entries({'og:title':metadata.title,'og:description':metadata.description,'og:url':metadata.url,'og:image':metadata.image,'og:type':'website'})) document.querySelector(`meta[property="${key}"]`)?.setAttribute('content',value);
 document.querySelector('script[type="application/ld+json"]')?.replaceChildren(document.createTextNode(JSON.stringify(metadata.schema)));
}
