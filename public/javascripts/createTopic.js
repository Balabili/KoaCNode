import utility from './common/utility.js';

window.onload = function () {
    const doc = document;
    doc.getElementById('createTopicForm').onsubmit = function () {
        let boardName = doc.getElementById('selectTab').value,
            title = doc.getElementById('topicTitle').value,
            content = doc.getElementById('createTopicText').value;
        if (!boardName) {
            alert('你必须选择一个版块');
            return false;
        }
        if (title.length <= 10) {
            alert('标题字数必须大于10');
            return false;
        }
        if (utility.strHelper.trim(content).length === 0) {
            alert('你必须输入话题内容');
            return false;
        }
    };
};