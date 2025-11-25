export const openWhatsAppQuote = () => {
  const phoneNumber = '918790839401'; // Remove + and spaces for WhatsApp URL
  const message = encodeURIComponent('Hi! I would like to get a quote for your services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};
