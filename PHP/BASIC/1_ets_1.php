<?php echo "Some text"; ?>
<?= "But newline now" ?>


<?php
echo 'This is a test'; // This is a one-line c++ style comment
/* This is a multi line comment
   yet another line of comment */
echo 'This is yet another test';
echo 'One Final Test'; # This is a one-line shell-style comment
?>

PHP supports one error control operator: the at sign (@)

<?php
/* Intentional file error */
$my_file = @file ('non_existent_file') or
die ("Failed opening file: error was '" . error_get_last()['message'] . "'");
$cache=[];
// this works for any expression, not just functions:
$value = @$cache[1];
// will not issue a notice if the index $key doesn't exist.

?>

<?php
$output = `ls -al`;
echo "<pre>$output</pre>";

$name  =123;
printf("Hello %s\r\n", $name);
?>


\ (backslash) is the namespace separator in PHP 5.3.
A \ before the beginning of a function represents the Global Namespace.
Putting it there will ensure that the function called is from the global
namespace, even if there is a function by the same name in the current namespace.

overloading Перегрузка свойств с помощью методов __get(), __set(), __isset() и __unset()
по сути позволяет менять код при установке или чтении переменных в классе + при __isset() и __unset()
и добавить вывод сообщения например

public function __set($name, $value)
{
echo "Установка '$name' в '$value'\n";
$this->data[$name] = $value;
}
