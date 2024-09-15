var isWidgetCreated = false;

function existsElement(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      resolve(true);
      return;
    }

    const observer = new MutationObserver((mutations) => {
      const target = document.querySelector(selector);
      if (target) {
        observer.disconnect();
        resolve(true);
      } else {
        resolve(false);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
    });

    resolve(false);
  });
}

async function CreateCustomChatWidget(
  option = {
    brandSetting: {
      autoShow: true,
      backgroundColor: '#0a6114',
      borderRadius: '25',
      brandImg: 'https://cdn.clare.ai/wati/images/WATI_logo_square_2.png',
      brandName: 'Custom Brand',
      ctaText: 'Chat with us',
      messageText: 'I have some questions, can you help?',
      phoneNumber: '85252859384',
    },
    chatButtonSetting: {
      backgroundColor: '#00E785',
      borderRadius: '25',
      ctaText: 'Chat with us',
      marginLeft: '0',
      marginRight: '20',
      marginBottom: '20',
      position: 'right',
    },
    enabled: false,
  }
) {
  if (option.enabled == false) {
    return;
  }

  var widgetExists = await existsElement('#chat-widget');
  if (!widgetExists && !isWidgetCreated) {
    isWidgetCreated = true;
    initWidget();
  }

  function initWidget() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div id="chat-widget">
          <div class="chat-container">${option.chatButtonSetting.ctaText}</div>
          <div class="chat-modal">
            <div class="chat-modal-header">
              <img src="${option.brandSetting.brandImg}" alt="Brand">
              <span>${option.brandSetting.brandName}</span>
            </div>
            <div class="chat-modal-body">
              <p>${option.brandSetting.messageText}</p>
              <a href="https://api.whatsapp.com/send?phone=${option.brandSetting.phoneNumber}" target="_blank">Send Message</a>
            </div>
          </div>
      </div>`
    );

    const widgetStyle = document.createElement('style');
    widgetStyle.innerHTML = `
      .chat-container {
        position: fixed;
        bottom: ${option.chatButtonSetting.marginBottom}px;
        ${option.chatButtonSetting.position}: ${option.chatButtonSetting.marginRight}px;
        background-color: ${option.chatButtonSetting.backgroundColor};
        padding: 10px 20px;
        border-radius: ${option.chatButtonSetting.borderRadius}px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        z-index: 1000;
      }

      .chat-modal {
        display: none;
        position: fixed;
        bottom: 100px;
        ${option.chatButtonSetting.position}: ${option.chatButtonSetting.marginRight}px;
        background-color: white;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 1000;
      }

      .chat-modal-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }

      .chat-modal-header img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }

      .chat-modal-body a {
        display: inline-block;
        background-color: ${option.chatButtonSetting.backgroundColor};
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
      }
    `;

    document.head.appendChild(widgetStyle);

    document.querySelector('.chat-container').addEventListener('click', () => {
      document.querySelector('.chat-modal').style.display = 'block';
    });
  }
}

// Initialize the widget
CreateCustomChatWidget({
  enabled: true,
  brandSetting: {
    brandName: 'Custom Brand',
    messageText: 'Hello! How can we assist you?',
    phoneNumber: '1234567890',
  },
  chatButtonSetting: {
    backgroundColor: '#00E785',
    ctaText: 'Chat with us!',
    marginRight: '30',
    marginBottom: '30',
  },
});
