1. Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

https://monosnap.com/file/WKEPB8hPasSL9AZTU33QmlpfLrP3lN

2. Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

https://monosnap.com/file/onAtsfJUpk2x1qhAty26B7AuTYcEPG

4. Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

https://monosnap.com/file/P3SveRGg1vkywSTrcRQk9Nov1VjLCR

5. Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

https://monosnap.com/file/ocZzAVqKUatTU4IesxGSErnoGRe24q

https://github.com/AlessioItaliano/goit-node-hw-01-basics
