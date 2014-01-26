/**
 *@author yuki
 *@since 2014年1月26日 16:06:20
 *@version 1.0.0.3
 **/
!(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var oldPageBarId = localStorage["pageBarId"];
        var pageBarIdIn = document.getElementById("pageBarIdIn");
        if (oldPageBarId) {
            pageBarIdIn.value = oldPageBarId;
        } else {
            pageBarIdIn.value = "frs_list_pager";
        }
        pageBarIdIn.addEventListener("blur", function (e) {
            var newPageBarId = e.target.value;
            console.log(newPageBarId);
            localStorage["pageBarId"] = newPageBarId;
        })
    });
})();