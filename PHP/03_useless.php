<?php
/*
 <?=  = <?php echo

Продвинутое изолирование с использованием условий
$expression = false;
?>
<?php if ($expression == true): ?>
    Это будет отображено, если выражение истинно.
<?php else: ?>
    В ином случае будет отображено это.
<?php endif; ?>

<?php



https://www.php.net/manual/ru/install.windows.php

 Это однострочный комментарий в стиле C++
/* Это многострочный комментарий
   ещё одна строка комментария */
# Это комментарий в стиле оболочки Unix

/*
======================================================================
 CATEGORY LARGE FONT
======================================================================

-----------------------------------------------------
 Sub-Category Smaller Font
-----------------------------------------------------

/* Title Here Notice the First Letters are Capitalized */

# Option 1
# Option 2
# Option 3

/*
 * This is a detailed explanation
 * of something that should require
 * several paragraphs of information.
 */

/*

Язык PHP использует систему номинальных типов с сильным отношением поведенческого подтипирования. PHP проверяет отношение подтипов во время компиляции, тогда как контроль типов язык выполняет динамически во время выполнения.

https://www.php.net/manual/ru/language.types.type-system.php

Система типов PHP поддерживает атомарные типы, которые разрешено объединять, чтобы создавать сложные типы. Часть этих типов допустимо записывать в объявлениях типов.



ob_start — Включает буферизацию вывода
Пример #1 Пример callback-функции, определённой пользователем

<?php

function callback($buffer)
{
  // Заменить все яблоки апельсинами
  return (str_replace("яблоки", "апельсины", $buffer));
}

ob_start("callback");

?>
<html>
<body>
<p>Это всё равно, что сравнить яблоки и апельсины.</p>
</body>
</html>
<?php

ob_end_flush();

?>
Результат выполнения приведённого примера:

<html>
<body>
<p>Это всё равно, что сравнить апельсины и апельсины.</p>
</body>
</html>

ob_flush — Сбрасывает (отправляет) возвращённое активным обработчиком вывода значение














