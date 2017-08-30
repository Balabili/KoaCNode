let ajax = (actionUrl, type, data) => {
    return new Promise(function (resolve, reject) {
        let ajaxSetting = {
            url: actionUrl,
            type: type,
            data: data,
            success(result) {
                resolve(result);
            },
            error(err) { reject(err); }
        };
        $.ajax(ajaxSetting);
    });
}, strHelper = {};

strHelper.trim = (str) => {
    return str.replace(/(^\s*)|(\s*$)/g, '');
};

module.exports = {
    ajax: ajax,
    strHelper: strHelper
};