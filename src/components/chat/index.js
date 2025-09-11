import React, { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      var wa_btnSetting = {
        "btnColor": "#16BE45",
        "ctaText": "",
        "cornerRadius": 40,
        "marginBottom": 40,
        "marginLeft": 20,
        "marginRight": 20,
        "btnPosition": "left",
        "whatsAppNumber": "6281733505",
        "welcomeMessage": "",
        "zIndex": 999999,
        "btnColorScheme": "light"
      };
      _waEmbed(wa_btnSetting);
    };
  }, []);

  return null;
};

export default ChatWidget;
      