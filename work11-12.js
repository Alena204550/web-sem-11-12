// Сделанны основные задания + допы (6,11,17)
// 1) Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) 
со  значением  «ГородN»  и  население  ( населенность  города ,  число )  со  значением  10  млн  * /

пусть  city1  =  { } ;
город1 . name  =  "ГородN" ;
город1 . население  =  10000000 ;

консоль . журнал ( "название:"  +  город1 . имя  +  ""  +  "население:"  +  город1 . население ) ;

// 2) Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}. * /

let  city2  =  { имя : "ГородM" ,  население : "1e6" } ;
консоль . журнал ( "название:"  +  город2 . имя  +  ""  +  "население:"  +  город2 . население ) ;

// 3) Создайте у объектов city1 и city2 методы getName (), которые вернут соответствующие названия городов * /

function  getName ( ) {
    верни  это . имя ;
}

город1 . getName  =  getName ;
город2 . getName  =  getName ;
консоль . журнал ( city1 . getName ( ) ) ;
консоль . журнал ( city2 . getName ( ) ) ;

// 4) Создайте методы exportStr () у каждого из объектов. Этот метод должен возвращать информацию о городе в формате
« Name = ГородN \ n Население = 10000000 \ n » .  Для  второго  города будет строка  со  своими  значениями . 
Примечание : можно  обращаться  к  каждому  свойству  через  цикл  для / в ,  но  методы  объекта  возвращать  НЕ  нужно  * /

function  exportStr ( )  {
    верни  это . name  +  "\ n"  +  "Population ="  +  this . население  +  "\ п" ;
}

город1 . exportStr  =  exportStr ;
город2 . exportStr  =  exportStr ;  
консоль . журнал ( city1 . exportStr ( ) ) ;
консоль . журнал ( city2 . exportStr ( ) ) ;

// 5) Создайте глобальную функцию getObj (), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity,
который Указется  на  getObj .  Проверить работу Метод .  Примечание : к  объекту  вызова  можно  обратиться  через  это .  * /

function  getObj  ( ) {
    верни  это 
}
 
город1 . getCity  =  getObj ;
город2 . getCity  =  getObj ;
консоль . log ( "Название:"  +  city1 . getCity ( ) . name  +  ""  +  "население:"  +  city1 . getCity ( ) . население ) ;
консоль . log ( "Название:"  +  city2 . getCity ( ) . name  +  ""  +  "население:"  +  city2 . getCity ( ) . население ) ;

// 7) Создайте массив d1 с числовыми величинами 45,78,10,3. Добавьте в массив d1 еще одно число (d1 [7] = 100).
Выведите  в  консоль  весь  массив  и  его  элементы  с  индексами  6  и  7.  * /

пусть  d1  =  [ 45 ,  78 ,  10 ,  3 ] ;
d1 [ 7 ]  =  100 ;
консоль . журнал ( d1 [ 6 ] )
консоль . журнал ( d1 [ 7 ] )

// 8) Создайте массив d2 с числовыми величинами 45,78,10,3. Посчитайте в переменную сумму2 сумму чисел в нем, при помощи цикла для. * /

пусть  d2  =  [ 45 ,  78 ,  10 ,  3 ] ;
пусть  sum3  =  0 ;
для ( пусть  я  в  d2 ) {
    сумма3  + =  d2 [ я ] ;
} 
консоль . журнал ( сумма3 ) ;

// 9) Создайте массив d3 с числовыми величинами 45,78,10,3. Добавьте в массив d3 еще одно число (например, d [7] = 100)
Посчитайте  в  переменную  sum3  АЛЮМИНИЙ  чисел  в  нем ,  ПРИ  ПОМОЩИ  цикла  для / в . * / 

пусть  d3  =  [ 45 ,  78 ,  10 ,  3 ] ;
d3 [ 7 ]  =  100 ;
пусть  sum4  =  0 ;
для ( пусть  я  в  d3 ) {
    sum4  + =  d3 [ i ] ;
} 
консоль . журнал ( сумма4 ) ;

// 10) Создайте массив d4 с числовыми величинами 45,78,10,3. Напишите функцию сортировки мои (а, б),
которая  при  вызове  d4 . сорт ( мой ) отсортирует элементы массива  по  убыванию  чисел .  Вызовите  d4 . sort ( мой )  * /

пусть  d4  =  [ 45 ,  78 ,  10 ,  3 ] ;

function  my ( a , b ) {
    возврат  ( б  -  а )
}

консоль . журнал ( d4 . sort ( мой ) )

// 12) Векторный тип. Напишите вектор, представляющий вектор в двумерном визу.
Он принимает параметры  x  и  y  ( числа ) ,  которые хранятся  в  одноименных свойствах .
Дайте прототипу  Вектор  два  метода ,  плюс  и  минус ,  которые принять другой вектор  в  качестве параметра , 
и  возвращают  новый  вектор ,  который хранит  в  х  и  у  АЛЮМИНИЙ  или  Разность  двух  ( один  этот ,  второй  -  аргумент )
Добавить геттер  Длина  в  Прототипе ,  подсчитывающая  длина  вектор  -  Расстояние  от  ( 0 ,  0 )  до  ( х ,  у ) .  * /

функция  Vector ( x ,  y )  {
    это . х  =  х ;
    это . у  =  у ;
}

function  plus ( otherVector )  {
    пусть  x  =  this . x  +  otherVector . х ;
    пусть  y  =  this . y  +  otherVector . у ;
    вернуть  новый  вектор ( x ,  y ) ;
} ;
function  minus ( otherVector )  {
    пусть  x  =  this . x  -  другой вектор . х ;
    пусть  y  =  this . y  -  otherVector . у ;
    вернуть  новый  вектор ( x ,  y ) ;
} ;
function  toString ( )  {
    вернуть  "Vector {x:"  +  this . x  +  ", y:"  +  это . y  +  "}" ;
}

Объект . defineProperty ( Vector . prototype ,  "length" ,  {
    get : function  ( )  {
      вернуть  Math . sqrt ( Math . pow ( this . y ,  2 )  +  Math . pow ( this . x ,  2 ) ) ;
    }
} )


Вектор . прототип . плюс  =  плюс ;
Вектор . прототип . минус  =  минус ;
Вектор . прототип . toString  =  toString ;

консоль . log ( новый  вектор ( 1 ,  2 ) . plus ( новый  вектор ( 2 ,  3 ) ) ) ;
консоль . log ( новый  вектор ( 1 ,  2 ) . минус ( новый  вектор ( 2 ,  3 ) ) ) ;
консоль . log ( новый  вектор ( 3 ,  4 ) . length ) ;

// 14) Разработайте интерфейс, абстрагирующий проход по набору значений. 
Объект  с  таким  интерфейсом представляет  собой  последовательность ,  а  Интерфейс  Должен  давать  Возможность  в 
коде проходить  по  последовательности ,  работать  со  значениями , :  которые  её  составляют ,  и  как - то  сигнализировать  о  том , 
что  мы  достигли  Конец  последовательность .
Задав  Интерфейс ,  попробуйте сделать функция  logFive ,  которая принимает объект - последовательность и 
вызывает  console . Журнал  для  Первых  её  пяти  элементов  -  или  для  меньшего  количества ,  если :  их  меньше  пяти .
Затем  создайте  тип  объекта  ArraySeq ,  оборачивающий массив ,  и  позволяющий  проход  по  массиву  с  использованием  разработанного  вами  интерфейса . 
Создайте  Другой В  тип  объекта ,  RangeSeq ,  который проходит  по  диапазону  чисел  ( его  конструктор  должен  принимать  аргументы  от  и  до ) .  * /

function  logFive ( obj )  {
    newArr  =  объект . slice ( 0 ,  Math . min ( 5 ,  obj . length ) ) ;
    newArr . map ( function ( element ) {
            консоль . журнал ( элемент ) ;
    } ) ;
}

function  ArraySeq ( arr )  {
        возврат  обр ;
}

function  RangeSeq ( начало ,  конец )  {
    const  arr  =  [ ] ;
    for  ( let  i  =  start ;  i  <=  end ;  i ++ )  {
        обр . push ( i ) ;
    }
   возврат  обр ;
}

logFive ( ArraySeq ( [ 1 ,  2 ] ) ) ;
logFive ( RangeSeq ( 100 ,  1000 ) ) ;

// 15) Создайте конструктор function Card (from, to) {...}, создайте объекты карточки со свойствами from, to и методом show (), 
возвращающим свойства отдельного объект  в  Виде  Строку  «от , к» ,  где  на  месте  названий  свойств  Будет Показать подробный:  их  значение . 
Создайте  переменную  c1  с  городами  Екатеринбург  и  Москва  * /

функциональная  карта ( от ,  до ) {
    это . from  =  from ;
    это . to  =  to ;
    это . show  =  function ( ) {
        return  ` $ { this . from } , $ { this . to } ` ;
    }
}

c1  =  новая  карта ( «Екатеринбург» , «Москва» ) ;
консоль . журнал ( c1 . show ( ) ) ;

// 16) Опишите класс Человек: для создания объектов со свойствами имя, возраст и рост конструктор класса должен принимать одноимённые аргументы. 
Создайте массив  людей  из  десяти объектов:
«Коля» ,  23 ,  180 , г.
«Даша» ,  19 ,  170 , г.
«Ваня» ,  18 ,  192 , г.
«Петя» ,  45 ,  178 , г.
«Вася» ,  34 ,  197 , г.
«Джони» ,  40 ,  168 , г.
«Катя» ,  37 ,  160 , г.
«Петя» ,  29 ,  200 , г.
«Соня» ,  21 ,  172 , г.
«Женя» ,  25 ,  175
а .  Укажите классу  метод  getInfo  ( он  должен  возвращать  строку  вида  «Коля ,  23 ,  180 » ) ,  метод геттер  Firstname 
( Он  Должен  возвращать  Свойство  Имя  объекта )  * /

class  Human  {
    конструктор  ( имя ,  возраст ,  рост ) {
        это . name  =  name ;
        это . age  =  возраст ;
        это . высота  =  высота ;
    }

    getInfo ( )  {
        return  ` $ { this . name } , $ { this . age } , $ { this . высота } `
    }

    get  firstname ( ) {
        верни  это . имя ;
    }
}

люди  =  [
    новый  Человек ( "Коля" , 23 , 180 ) ,
    новый  Человек ( "Даша" , 19 , 170 ) ,
    новый  Человек ( "Ваня" , 18 , 192 ) ,
    новый  Человек ( "Петя" , 45 , 178 ) ,
    новый  Человек ( "Вася" , 34 , 197 ) ,
    новый  Человек ( "Джони" , 37 , 160 ) ,
    новый  Человек ( "Катя" , 37 , 160 ) ,
    новый  Человек ( "Петя" , 37 , 160 ) ,
    новый  Человек ( "Соня" ,  21 , 172 ) ,
    new  Human ( "Женя" , 25 , 175 )
]

консоль . журнал ( люди ) ;
консоль . журнал ( люди [ 1 ] . getInfo ( ) ) ;
консоль . лог ( люди [ 2 ] . Firstname ) ;

// 18) Получите в переменную dt1 соответствующую 0:00, 1 января 2045 года, при помощи конструктора Date () * /

dt1  =  новая  дата ( 2045 ,  0 ,  1 ,  0 ,  0 ,  0 ) ;
консоль . журнал ( dt1 )

// 19) В переменную dt2 найдите кол-во секунд, которое прошло с 1 января 1970 года по текущий момент. * /

dt2  =  Дата . сейчас ( )  /  1000 ; 
консоль . журнал ( dt2  +  "с." ) ;

// 20) Напишите функцию getDays, которая принимает год и месяц (пусть январь будет - 1, февраль - 2 и т.д.), 
а возвращает количество  дней  в  месяце  * /

function  getDays ( y ,  m )  {
    вернуть  новую  дату ( г , м , 0 ) . getDate ( ) ;
}

консоль . log ( getDays ( 2004 ,  01 )  +  «дн.» ) ;
консоль . log ( getDays ( 1999 ,  02 )  +  «дн.» ) ; 
консоль . log ( getDays ( 2021 ,  03 )  +  «дн.» ) ;

// 17) Напишите функции сортировки sortByName и sortByHeight, которые помогут отсортировать массив по именам (в алфавитном порядке) или роста (по убыванию роста). Вызовите только функцию сортировки по росту.
функционировать  sortByName ( людей )  {
    for  ( let  i  =  0 ;  i  <  people . length  -  1 ;  i ++ )  {
        for  ( let  j  =  i  +  1 ;  j  <  people . length ;  j ++ )  {
            if  ( люди [ i ] . имя  >  люди [ j ] . имя )  {
                пусть  макс  =  люди [ я ] ;
                люди [ i ]  =  люди [ j ] ;
                люди [ j ]  =  макс ;
            }
        }
    }
    вернуть  людей ;
}
Функция  sortByHeight ( люди )  {
    for  ( let  i  =  0 ;  i  <  people . length  -  1 ;  i ++ )  {
        for  ( let  j  =  i  +  1 ;  j  <  people . length ;  j ++ )  {
            if  ( people [ i ] . height  <  people [ j ] . height )  {
                пусть  min  =  люди [ я ] ;
                люди [ i ]  =  люди [ j ] ;
                человек [ j ]  =  мин ;
            }
        }
    }
    вернуть  людей ;
}
консоль . журнал ( sortByHeight ( люди ) ) ;

// 6) Создать объект obj, с методами method1 (), method2 () и method3 (). В методе method3 () должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнить код obj.method1 (). Method2 (). Method3 ().
let  obj  =  { } ;
OBJ . method3  =  function  ( )  {
    return  "метод3" ;
} ;
OBJ . method2  =  function  ( )  {
    вернуть  это ;
} ;
OBJ . method1  =  function  ( )  {
    вернуть  это ;
} ;
консоль . журнал ( объект . method1 ( ) . method2 ( ) . method3 ( ) ) ;

// 11) Создайте двумерный массив d5 размером n = 3 элементов в каждом из которых будет m = 4 элементов из целых чисел (в каждом элементе расположите цифру 5). Примечание: при создании двумерного массива циклы. Во внешнем цикле должна появиться конструкция d5 [i] = [];
пусть  d5  =  [ ] ;
пусть  n  =  3 ;
пусть  m  =  4 ;
for  ( let  i  =  0 ;  i  <  n ;  i ++ )  {
    d5 [ я ]  =  [ ] ;
    for  ( пусть  j  =  0 ;  j  <  m ;  j ++ )  {
        d5 [ i ] [ j ]  =  5 ;
    }
}
консоль . журнал ( d5 ) ;
