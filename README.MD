![InfotronicLogo](https://i.ibb.co/fN3TZ9y/Logo-Infotronic.png)
# **🧑‍💻 CURSO | TALLER WEB 👩‍💻**

## **✅ EJERCICIO**
Como desarrollador, recibe algunos datos en forma de cadena JSON en la variable jsonData. Sin embargo, el contenido de jsonData no es completamente correcto. El valor de `age` la propiedad parent debe ser 35 en lugar de 45. Sin cambiar el contenido de jsonData directamente, actualice el valor de `age` y luego registre una nueva cadena JSON con el valor correcto en la consola.
<br>
<br>
Aquí hay una guía paso a paso para resolver este desafío:

1. Convierta jsonData en un objeto de JavaScript usando JSON.parse() y guárdelo como una variable const, por ejemplo, jsObject.
2. Utilice la notación punto, .key o corchete, ['key'] para acceder a la propiedad principal de jsObject seguida de la propiedad age y cambie su valor de 45 a 35.
3. Convierta jsObject nuevamente a una cadena JSON usando JSON.stringify() y guárdelo como otra variable const, por ejemplo, jsObjectToJson.
4. Registre la cadena jsObjectToJson en la consola.