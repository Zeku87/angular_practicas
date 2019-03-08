# Apuntes de Angular
## Solución o patrón basado en componentes
Angular utiliza componentes. Estos componentes son unidades lógicas que representan una pieza del conjunto total. Por ejemplo la batería de un móvil viene a ser una pieza o componente del mismo.

Cuando combinamos todas estas piezas o componentes lo que obtenemos es la aplicación.

Cada componente va a tener una función dentro de la aplicación y por lo tanto una lógica y unas propiedades que tendrán su efecto en la aplicación. Encapsular las funcionalidades en componentes permite mantener mucho mejor nuestra aplicación web.

Estas piezas lógicas van a estar diseñadas desde la encapsulación, es decir,cada componente tiene un funcionamiento que no debe ser necesariamente conocido por otros componentes. Por lo tanto, los componentes están aislados lógicamente uno de otros. Esto significa que la alteración lógica de un componente no es condición suficiente para que los demás se vean afectados. Dicho de otra forma, si modificamos un componente, ningún otro va a verse afectado. 

Angular es capaz de adoptar este patrón orientado a componentes gracias a Web Components que consiste en tres estándares:

* Elementos personalizados en el DOM: Angular utiliza sus propias etiquetas como <app-root>

* Shadow DOM: nos permite crear árboles DOM de forma privada; luego lo podemos adjuntar al árbol del documento principal así como podarlo a placer.

* Plantillas: porciones de una página web almacenadas en una variable. Gracias a la característica Shadow DOM es posible mantener dichas porciones ocultas a la vista y con JavaScript ir mostrandolas en función de la interacción del usuario.

Angular es orientado a objetos, trabaja con clases y por tanto podremos implementar el patrón modelo-vista-controlador fácilmente.

Usaremos inyección de dependencias para reducir el acoplamiento entre clases y favorecer el testeo.

Desarrollaremos las aplicaciones en TypeScript, superconjunto de JavaScript que añade tipado estático y orientación a objetos.

[Web Components resumido en MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

[Más sobre Web Components](https://www.webcomponents.org/introduction#es-modules)

##Aplicaciones SPA

Una aplicación web está proporcionada por un servidor web y es utilizada mediante un cliente web. Por tanto toda aplicación web tiene una arquitectura basada en cliente-servidor. Hay varios tipos:

* Cliente y servidor estáticos: el servidor siempre devuelve los mismos recursos. Este tipo sería el de una página web en vez de el de una aplicación web.

* Cliente estático y servidor dinámico: aplicación de consultas sobre una base de datos, por ejemplo, el catálogo de libros de la biblioteca.

* Cliente y servidor dinámicos: el servidor devuelve JavaScript que incluye diversas funcionalidades en el cliente.

Las aplicaciones web disminuyen el número de comunicaciones con el servidor mediante técnicas, a saber, dos grandes patrones de diseño:

* Multi page web applications (MPA).
* Single-page application (SPA).

Las aplicaciones MPA son las tradicionales. Las acciones de usuario se transforman en solicitudes al servidor de páginas completas que incluyen las hojas de estilo, sus recursos y los ficheros JavaScript.

Cuando las MPA son complejas generan problemas de lentitud. Para arreglar esto las MPA usarán AJAX. AJAX es un conjunto de tecnologías que permiten refrescar de forma asíncrona partes de una página sin tener que recargarlo todo. Esto produce otro patrón de diseño: MPA + AJAX.

Las aplicaciones SPA son una evolución del patrón de diseño MPA + AJAX. El cliente se carga una única página que es modificada desde el propio cliente en cada interacción. La navegación por las distintas pantallas e interfaces de la aplicación se realizará sin salir de esa única página.

El tiempo de respuesta de una interacción de usuario se reducen porque ya no se crean páginas completas por cada interacción sino que tan solo se intercambia la información necesaria con el servidor.

El aspecto de la aplicación recae en la parte del cliente mientras que la parte del backend, es decir la parte del servidor, tiene la responsabilidad de servir al cliente un API para dar acceso a la base de datos de la cual se alimenta la aplicación SPA. El formato de los datos que se intercambian están en JSON en vez de XML ya que es más óptimo.


