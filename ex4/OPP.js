class ListBook {
    constructor() {
        this.title = document.getElementById('title');
        this.author = document.getElementById('author');
        this.isbn = document.getElementById('ISBN');
        this.addBtn = document.getElementById('addTask');
        this.table = document.getElementById('table');
        this.tablData = JSON.parse(localStorage.getItem('book')) || [];

        this.addBtn.addEventListener('click', () => this.addBook());
        this.loadBooks();
    }

    objectList() {
        return {
            title: this.title.value,
            author: this.author.value,
            isbn: this.isbn.value,
        };
    }

    addBook() {
        if (!this.title.value || !this.author.value || !this.isbn.value) {
            alert("الرجاء تعبئة جميع الحقول!");
            return;
        }

        const book = this.objectList();
        this.tablData.push(book);
        localStorage.setItem('book', JSON.stringify(this.tablData));
        this.updateTable(book);

        // تنظيف الحقول
        this.title.value = '';
        this.author.value = '';
        this.isbn.value = '';
    }

    updateTable(item) {
        this.table.innerHTML += `
        <tr>
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.isbn}</td>
        </tr>
        `;
    }

    loadBooks() {
        this.tablData.forEach(item => {
            this.updateTable(item);
        });
    }
}

const data = new ListBook();
