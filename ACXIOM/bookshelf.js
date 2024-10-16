function fetchBookshelf() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "get_bookshelf.php", true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const books = JSON.parse(xhr.responseText);
            const bookshelf = document.getElementById("bookshelf");

            books.forEach(book => {
                const listItem = document.createElement("li");
                if (book.issued_by) {
                    listItem.textContent = `${book.title} (Issued by ${book.issued_by})`;
                } else {
                    listItem.textContent = book.title;
                }
                bookshelf.appendChild(listItem);
            });
        } else {
            console.error("Error fetching bookshelf:", xhr.statusText);
        }
    };

    xhr.send();
}

fetchBookshelf();