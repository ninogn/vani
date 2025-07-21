/* Repositório de códigos e links */
const PIX_CODE        = "00020101021126330014br.gov.bcb.pix0111126445857675204000053039865802BR5919Vanise Pinto Telles6014Rio De Janeiro62070503***630431D6";
const LIGHTNING_CODE  = "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkwct40fukgmm4vfkx2wps564ys2";
const SITE_URL        = "https://prontosocorroespiritual.com";

/* Utilitários */
const copy = (txt) => navigator.clipboard.writeText(txt).then(()=>alert("Copiado!"));

function shareSite(){
  if (navigator.share){
    navigator.share({title:"Vani D'Oyá – Conexão Espiritual", url:SITE_URL});
  } else {
    bootstrap.Modal.getOrCreateInstance(document.getElementById("shareModal")).show();
  }
}

/* Espera DOM */

if ('scrollRestoration' in history){ history.scrollRestoration = 'manual'; }
window.scrollTo(0,0);

document.addEventListener("DOMContentLoaded", () => {
  /* Compartilhar */
  document.getElementById("share-btn") ?.addEventListener("click", shareSite);
  document.getElementById("share-copy")?.addEventListener("click", () => copy(SITE_URL));

  /* PIX / Lightning */
  document.getElementById("pix-copy")     ?.addEventListener("click", () => copy(PIX_CODE));
  document.getElementById("lightning-copy")?.addEventListener("click", () => copy(LIGHTNING_CODE));

  /* SimplyBook cache‑buster */
  const book = document.querySelector('a[href^="https://pset.simplybook.me"]');
  book?.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = book.href + "?t=" + Date.now();
  });
});