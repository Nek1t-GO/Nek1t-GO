Элементы Уровня Блока

Элемент <p> определяет абзац в HTML-документе.
Элемент <div> определяет деление или раздел в HTML-документе.

<p>Hello World</p>
<div>Hello World</div>

Вот элементы уровня блока в HTML:
<address> <article> <aside> <blockquote> <canvas> <dd> <div> <dl> <dt> <fieldset> <figcaption> <figure> <footer> <form> <h1> <h6> <header> <hr> <li> <main> <nav> <noscript> <ol> <p> <pre> <section> <table> <tfoot> <ul> <video>

Встроенные Элементы
<span>Hello World</span>
<span style="border: 1px solid black">Hello World</span> element inside a paragraph.</p>

Вот встроенные элементы в HTML:
<a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> <kbd> <label> <map> <object> <output> <q> <samp> <script> <select> <small> <span> <strong> <sub> <sup> <textarea> <time> <tt> <var>
Примечание: Встроенный элемент не может содержать элемент на уровне блока!

Элемент <div> и <span>
Элемент <div> часто используется в качестве контейнера для других элементов HTML.
Элемент <div> не имеет необходимых атрибутов, но style, class и id являются общими.
При использовании вместе с CSS элемент <div> можно использовать для стилизования блоков контента:
<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>

<p>My mother has <span style="color:blue;font-weight:bold;">blue</span> eyes and my father has <span style="color:darkolivegreen;font-weight:bold;">dark green</span> eyes.</p>



Редактиврование <div>

Элемент <div>
Элемент <div> по умолчанию является блочным элементом, что означает, что он принимает всю доступную ширину и поставляется с разрывами строк до и после.
Lorem Ipsum <div>I am a div</div> dolor sit amet.

<div> в качестве контейнера
<div>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 13 million inhabitants.</p>
</div>

Выровнять по центру элемент <div>
Если у вас есть элемент <div>, который не имеет 100% ширины, и вы хотите выровнять его по центру, установите свойство поля CSS в auto.
<style>
div {
  width:300px;
  margin:auto;
}
</style>

Выровнивание элементов <div> бок о бок
1. Поплавок
Свойство CSS float используется для позиционирования и форматирования содержимого и позволяет элементам плавать рядом друг с другом, а не друг на друге.
<style>
.mycontainer {
  width:100%;
  overflow:auto;
}
.mycontainer div {
  width:33%;
  float:left;
}
</style>

2. Встроенный блок
Если вы измените свойство отображения элемента <div> с блока на встроенный блок, элементы <div> больше не будут добавлять разрыв строки до и после и будут отображаться рядом, а не друг с другом.
<style>
div {
  width: 30%;
  display: inline-block;
}
</style>

3. Гибкий
Чтобы метод CSS flex работал, окружите элементы <div> другим элементом <div> и придайте ему статус контейнера flex.
<style>
.mycontainer {
  display: flex;
}
.mycontainer > div {
  width:33%;
}
</style>

4. Сетка
Метод сетки CSS требует, чтобы вы окружили элементы <div> другим элементом <div> и дали статус контейнера сетки, и вы должны указать ширину каждого столбца.
<style>
.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>


