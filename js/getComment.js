$(document).ready(function () {
    const url = 'http://localhost:9081/todos';
    var listComment = []
    axios.get(url)
        .then(function (response) {
            listComment = response.data;
            var countComment = listComment.length;
            var comment = document.getElementById('count-comment');
            comment.innerHTML = countComment
            render(listComment)
        })
        .catch(function (err) {
            console.log(err);
        })
    var list = document.getElementById('list-comment');
    function render(items) {
        var content = items.map(function (item) {
            return '<li class ="comment-item">' + '<img src="./images/users.jpg" class="img-fluid"/>' + '<div class ="comment-box">' + '<h3>' + item.nameUsers + '</h3>' + '<p>' + item.comment + '</p>' + '</div>' + '</li>'
        })
        list.innerHTML = content.join('')
    }

    var btnAdd = document.getElementById('btn-add');
    btnAdd.addEventListener('click', addItem);
    function addItem() {
        var input = document.getElementById('input-box');
        var content = input.value;
        if(content !== '') {
            var newItem = {'nameUsers': 'Nguyễn Thị Bánh Bèo', 'comment': content}
            axios.post(url, newItem)
            .then(function (response) {
                console.log('Add success: '+ response);
                location.reload();
            })
            .catch(function (error) {
                console.log(error);
            })
        }else {
            alert('Please insert comment')
        }

    }
});