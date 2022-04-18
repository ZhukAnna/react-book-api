# Book search app on React with Google Books API

You can see the [Live demo](https://zhukanna.github.io/react-book-api/).

### Technologies

* React (Functional components, Hooks, React Router)
* Redux, React-redux
* CSS, bootstrap
* Google Books API

### Screenshots

![image](https://user-images.githubusercontent.com/7803506/163729879-c2701f0e-88f5-47ff-8998-fe5fe92e566b.png)

![image](https://user-images.githubusercontent.com/7803506/163729928-e17b044e-094b-4d1f-a943-51ddbb0fa077.png)


### Functionality

* Search field. The search trigger is either pressing Enter (when the text field has focus) or pressing the search button.
* Filter by category. Select with categories: all, art, biography, computers, history, medical, poetry. If "all" (selected initially) is selected, the search is performed in all categories.
* Sorting. Select with sorting options: relevance (selected initially), newest.
* Cards of books, each consists of a book cover image, book title, category name, and author names. If more than one category comes for a book, only the first one is displayed. All authors are displayed. 
* Above the block with cards, the number of books found is displayed.
* Pagination is implemented according to the 'load more' principle. Below the block with cards is the 'Load more' button, by clicking on it, more books are loaded to the already loaded books. Pagination step - 30.
* When you click on a card, you go to the detailed page of the book, which displays its data: cover image, title, all categories, all authors, description.

### Функционал

* Должны быть текстовое поле и кнопка поиска. По введенной пользователем подстроке производится поиск книг. Триггером к поиску является либо нажатие Enter (когда текстовое поле в фокусе), либо нажатие кнопки поиска.
* Фильтрация по категориям. Ниже текстового поля располагается селект с категориями: all, art, biography, computers, history, medical, poetry. Если выбрано "all" (выбрано изначально), то поиск производится по всем категориям.
* Сортировка. Рядом с селектом категорий находится селект с вариантами сортировки: relevance (выбран изначально), newest.
* Найденные книги отображаются карточками, каждая из которых состоит из изображения обложки книги, названия книги, названия категории и имен авторов. Если для книги приходит несколько категорий, то отображается только первая. Авторы отображаются все. Если не приходит какой-либо части данных, то вместо нее просто пустое место.
* Над блоком с карточками отображается количество найденных по запросу книг.
* Пагинация реализована по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.
* При клике на карточку происходит переход на детальную страницу книги, на которой выводятся ее данные: изображение обложки, название, все категории, все авторы, описание.
