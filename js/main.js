// main.js - simple interactivity for HLYFLD landing page
document.addEventListener('DOMContentLoaded', function() {
  // update year
  document.getElementById('year').textContent = new Date().getFullYear();

  // simple cart interaction
  const cartBtn = document.getElementById('cart-btn');
  const cartCount = document.getElementById('cart-count');
  const addButtons = document.querySelectorAll('.add-to-cart');
  const toast = document.getElementById('toast');
  let count = 0;

  function showToast(msg){
    toast.hidden = false;
    toast.textContent = msg;
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    requestAnimationFrame(()=>{
      toast.style.transition = 'opacity .25s ease, transform .25s ease';
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });
    setTimeout(()=>{
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      setTimeout(()=> toast.hidden = true, 300);
    }, 1800);
  }

  addButtons.forEach(btn => {
    btn.addEventListener('click', function(e){
      const name = this.dataset.product || 'item';
      count += 1;
      cartCount.textContent = count;
      // subtle bounce
      this.animate([{transform:'scale(1)'},{transform:'scale(1.04)'},{transform:'scale(1)'}],{duration:220});
      showToast(name + ' added to cart');
    });
  });

  cartBtn.addEventListener('click', function(){
    showToast('Cart has ' + count + ' item' + (count===1?'':'s'));
  });

  // Newsletter submit (simulate)
  const newsletter = document.getElementById('newsletter-form');
  newsletter.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    if(!email) return;
    showToast('Thanks — we'll email ' + email);
    newsletter.reset();
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
