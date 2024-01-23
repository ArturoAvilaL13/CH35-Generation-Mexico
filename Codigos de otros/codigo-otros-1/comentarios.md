### HTML

- El link al css no esta declarado correctamente
- Falta una etiqueta haciendo alucion a la locacion

### app.js

- el await hace alucion a una funcion del tipo async-await, pero no esta inicializada como asyn function
- La variable data no esta inicializada en ningun lugar, en su lugar deberia usarse el response del catch
- Dentro de la misma funcion deberia utilizarse el try-catch, no cuando se llama
- Para asignarle texto a las varriables $n,$b,$l, debe usarse `` en lugar de '' si lo que se quiere es usar el formato ${}
- La forma en que se llama a blog es como id y no como clase
- en el metodo handleError la variable $n, no esta correctamente llamada
- usar fetch retorna una promesa por eso a data, una ves se usa en formato .json(), se hace algo con esa promesa

### El css

- Hay muchos elementos que no se utilizan, ya que solo tenemos 3 etiquetas P
