// تعريف الكلاس ToDoApp
class ToDoApp {
    constructor() {
        // الحصول على العناصر من الـ DOM
        this.btn = document.getElementById('push');
        this.text = document.getElementById('input');
        this.tasks = document.getElementById('tasks');

        // إضافة حدث للنقر على الزر
        this.btn.addEventListener('click', () => this.addTask());
    }

    // وظيفة لإضافة مهمة جديدة
    addTask() {
        const taskText = this.text.value.trim();

        if (taskText === '') {
            alert('Please enter your task');
            return;
        }

        // إنشاء المهمة وإضافتها إلى القائمة
        const taskElement = this.createTaskElement(taskText);
        this.tasks.appendChild(taskElement);

        // تفريغ حقل الإدخال
        this.text.value = '';
    }

    // وظيفة لإنشاء عنصر المهمة
    createTaskElement(taskText) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskName = document.createElement('span');
        taskName.id = 'taskname';
        taskName.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.classList.add('delete');

        // إضافة حدث للحذف
        deleteButton.addEventListener('click', () => this.removeTask(taskDiv));

        // إضافة العناصر إلى المهمة
        taskDiv.appendChild(taskName);
        taskDiv.appendChild(deleteButton);

        return taskDiv;
    }

    // وظيفة لحذف مهمة
    removeTask(taskElement) {
        this.tasks.removeChild(taskElement);
    }
}

// تهيئة التطبيق
const app = new ToDoApp();
