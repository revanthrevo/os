<script>
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = "assets/js/plugins/wachat.js";
            var options = {
            "enabled":true,
            "chatButtonSetting":{
                "backgroundColor":"#181c32",
                "ctaText":"Chat with us",
                "borderRadius":"25",
                "marginLeft": "0",
                "marginRight": "20",
                "marginBottom": "20",
                "ctaIconWATI":false,
                "position":"right"
            },
            "brandSetting":{
                "brandName":"Online Shahar",
                "brandSubTitle":"undefined",
                "brandImg":"assets/images/fav.png",
                "welcomeText":"Hi there!\nHow can I help you?",
                "messageText":"Hello, %0A I have a question about {{page_title}}",
                "backgroundColor":"#181c32",
                "ctaText":"Chat with us",
                "borderRadius":"25",
                "autoShow":false,
                "phoneNumber":"917075517662"
            }
            };
            s.onload = function() {
                CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        </script>