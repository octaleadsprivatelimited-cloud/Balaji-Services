export const openWhatsAppQuote = () => {
  // Primary WhatsApp number for Balaji Services (without + or separators)
  const phoneNumber = '919902730741'; // Remove + and spaces for WhatsApp URL
  const message = encodeURIComponent('Hi! I would like to get a quote for your services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};
