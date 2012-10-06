var JSONPRequest;

void function(){
    JSONPRequest = function JSONPRequest() {
        var url = "about:blank";
        this.open = function (_url) {
            url = _url;
        };

        this.send = function(){
            var iframe = document.createElement("iframe");
            iframe.style.display = "none";
            document.documentElement.appendChild(iframe);
            var script = iframe.contentWindow.document.createElement("script");
            script.type = "text/javascript";
            script.src = url;
            var me = this;
            iframe.contentWindow.callback = function(data){
                me.onload && me.onload(data);
                setTimeout(function () {
                    document.documentElement.removeChild(iframe);
                }, 20);
            }
            iframe.contentWindow.document.documentElement.appendChild(script);

        }


    }


}();