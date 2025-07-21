/* Repositório de códigos e links */
const PIX_CODE        = "00020101021126330014br.gov.bcb.pix0111126445857675204000053039865802BR5919Vanise Pinto Telles6014Rio De Janeiro62070503***630431D6";
const LIGHTNING_CODE  = "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkwct40fukgmm4vfkx2wps564ys2";
const SITE_URL        = "https://prontosocorroespiritual.com";

/* Utilitários */
const copy = (txt) => navigator.clipboard.writeText(txt).then(()=>alert("Copiado!"));

function shareSite(){
  if(navigator.share){
    navigator.share({title:"Vani D'Oyá – Conexão Espiritual", url:SITE_URL});
  }else{
    bootstrap.Modal.getOrCreateInstance(document.getElementById("shareModal")).show();
  }
}

/* Espera DOM */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("share-btn")?.addEventListener("click", shareSite);
  document.getElementById("share-copy")?.addEventListener("click", () => copy(SITE_URL));

  document.getElementById("pix-copy")?.addEventListener("click", () => copy(PIX_CODE));
  document.getElementById("lightning-copy")?.addEventListener("click", () => copy(LIGHTNING_CODE));

  /* Adiciona cache-buster a todos os links SimplyBook */
  document.querySelectorAll('a[href*="simplybook.me"]').forEach(link=>{
      link.addEventListener("click", e=>{
        if(!link.href.includes("?t=")){
          link.href = link.href + (link.href.includes('?')?'&':'?') + 't=' + Date.now();
        }
      });
  });
});
