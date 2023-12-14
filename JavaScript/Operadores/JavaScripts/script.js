/*
  ? Operadores
  * Es un signo que especifica que debe efectuar una determinada operacion
  ? Operadores aritmeticos
  * (+) suma
  * (-) resta
  * (*) multiplicacion
  * (/) division
  * (%) residio, optener el residuo de una operacion
  * (--) decremento
  * (++) aumento
 ? Operadores de asignacion
 * (=) asigna el valor a la derecha del signo, al que esta a la izquierda
 ? Operadores logicos
 * (&& || !)
 ? Operadores de comparacion
 * (== === < > <= >= != !==)
 ? Operadores de cadena
 * (toLowerCase toUpperCase trim toString concat +)
 */

 let num1 = 5;
 let num2 = 8;
 let num1a = num1;
 num1a++;
 let num1d = num1;
 num1d--;
 console.log(`
 -----------------------------------------------------------
 <*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>
 -----------------------------------------------------------
 Operador aritmeticos :D

           suma: ${num1} + ${num2} = ${num1+num2}
          resta: ${num1} - ${num2} = ${num1-num2}
 multiplicacion: ${num1} * ${num2} = ${num1*num2}
       division: ${num1} / ${num2} = ${num1/num2}
        residuo: ${num1} % ${num2} = ${num1%num2}
     decremento: ${num1} -- = ${num1d}
     incremento: ${num1} ++ = ${num1a}
 -----------------------------------------------------------
 <*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>
 -----------------------------------------------------------
`);

//* Usando los operadores para un descuento
let precioReal = 200;
let descuento = 20;

console.log(`
-----------------------------------------------------------
<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>
-----------------------------------------------------------
Usando los operadores para simular un descuento en carnita

kilo de carnita en $${precioReal}
descuento %${descuento}
cantidad menos a pagar $${precioReal*(descuento/100)}
Precio con descuento $${precioReal*(1-(descuento/100))}
-----------------------------------------------------------
<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>
-----------------------------------------------------------
`);

//* Operadores de asignacion
let var1 = 3;
let var2 = "3";
console.log(`
-----------------------------------------------------------
<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>
-----------------------------------------------------------
Operadores de comparacion == y ===

var1 es 3 de tipo int
var2 es 3 de tipo String

usando ==   ${var1==var2}
compara solo el valor de las variables

usando ===  ${var1===var2}
compara el valor y el tipo de dato
-----------------------------------------------------------
<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>
-----------------------------------------------------------
`);

//* Operador desigualdad != y desigualdad estricta !==
let var3 = 4;
console.log(`
-----------------------------------------------------------
<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>
-----------------------------------------------------------
Operador de desiguldad != y desigualdad estricta !==

var1 es 3 de tipo int
var2 es 3 de tipo String
var3 es 4 de tipo int

var1 != var2 ${var1!=var2}
Esto debido a que ambos tienen como valor 3 aunque de diferente tipo

var2 != var3 ${var3!=var2}
Ahora se cumple que son diferentes

var1 !== var2 ${var1!==var2}
Se cumple por que compara el tipo y valor
ya que var1 es tipo int y var2 es tipo String

var1 !== var3 ${var1!==var3}
Se cumple por que compara el tipo y valor, si son diferentes
los dos son tipo int, pero de difernte valor
-----------------------------------------------------------
<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>
-----------------------------------------------------------
`);

//*Operadores < > <= >=
console.log(`
-----------------------------------------------------------
<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>
-----------------------------------------------------------
Operadores < > <= >=

var1 es 3 de tipo int
var3 es 4 de tipo int

var1 > var3 : ${var1>var3}
var1 < var3 : ${var1<var3}
var1 >= var3 : ${var1>=var3}
var1 <= var3 : ${var1<=var3}
-----------------------------------------------------------
<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>-<*>
-----------------------------------------------------------
`);