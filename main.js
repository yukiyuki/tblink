/**
 *@author yuki
 *@since 2014年1月26日 15:35:48
 *@version 1.0.0.3
 **/
!(function () {
    var pageBar = document.getElementById(getPageBarId());
    var pageLink = pageBar.getElementsByTagName("a");

    function openLink(e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = e.target.href;
    };
    for (var i = 0; i < pageLink.length; i++) {
        pageLink[i].addEventListener("click", openLink);
    }
    function getPageBarId() {
        var pageBarId = "frs_list_pager";
        return  pageBarId;
    }
})();