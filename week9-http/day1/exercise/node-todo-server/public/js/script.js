'use strict';
$(function () {
    var loadItems, updateItems, addItem,
        items = [{
            id: 0,
            name: 'bread'
        }, {
            id: 1,
            name: 'eggs'
        }, {
            id: 3,
            name: 'ham'
        }, {
            id: 4,
            name: 'cola'
        }, {
            id: 5,
            name: 'whiskey'
        }];

    addItem = function (itemObj) {
        var listItem = $('<li>'),
            itemSpan = $('<span>'),
            removeButton = $('<span>remove</span>');
        removeButton.addClass('remove');
        removeButton.click(function () {
            // 4) Delete the item from the server itemObj.id
            // delete http://127.0.0.1:8001/items/itemObj.id
            listItem.remove();
            // 5) Instead of updateItems rerun loadItems
            updateItems();
            $('#itemName').focus();
        });
        itemSpan.text(itemObj.name);
        listItem.append(itemSpan);
        listItem.append(removeButton);
        $('ul').append(listItem);
        $('#itemName').val('').focus();
    };

    loadItems = function () {
        $('ul').empty();
        // 1) Change this function to get data from the server with ajax instead of localstorage.
        // get http://127.0.0.1:8001/items
        if (localStorage.items !== undefined) {
            items = JSON.parse(localStorage.items);
        }
        for (var i = 0; i < items.length; i = i + 1) {
            addItem(items[i]);
        }
        console.log('Loading Items');
    };

    // delete updateItems
    updateItems = function () {
        items = [];
        $('li').each(function () {
            items.push($(this).children().first().text());
        });
        localStorage.items = JSON.stringify(items);
    };

    $('#button').click(function () {
        var itemText = $('#itemName').val();
        itemText = $.trim(itemText);
        if (itemText !== '') {
            // 2) add the item to the server with ajax
            // post http://127.0.0.1:8001/items
            addItem({
                name: itemText
            });
            // 3) if add is successful instead of updateItems run loadItems to load all the items from the server. 
            updateItems();
        }
    });
    loadItems();
});