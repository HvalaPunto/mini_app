document.addEventListener('DOMContentLoaded', function () {
    var contentDiv = document.getElementById('content');
    var changeContentButton = document.getElementById('changeContent');

    changeContentButton.addEventListener('click', function () {
        var newContent = '<p>Content changed dynamically!</p>';
        contentDiv.innerHTML = newContent;
    });
});
