let ajax = (actionUrl, type, data) => {
    return new Promise(function (resolve, reject) {
        let ajaxSetting = {
            actionUrl: actionUrl,
            type: type,
            data: data,
            success(result) {
                resolve(result);
            },
            error(err) { reject(err); }
        };
        $.ajax(ajaxSetting);
    });
};
export { ajax };