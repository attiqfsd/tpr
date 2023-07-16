var fbp = document.cookie.split(';').filter(function (c) {
    return c.includes('_fbp=');
  }).map(function (c) {
    return c.split('_fbp=')[1];
  });

  var fbc = document.cookie.split(';').filter(function (c) {
    return c.includes('_fbc=');
  }).map(function (c) {
    return c.split('_fbc=')[1];
  });
  fbp_val = (fbp.length && fbp[0]) || null;
  fbc_val = (fbc.length && fbc[0]) || null;

  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  
  