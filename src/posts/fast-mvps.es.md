---
slug: mvps-rapidos
date: 2019-08-10
title: "Falla rapido"
description: La tecnologia reciente
image: fast-mvps-banner.png
---

En el mundo del emprendimiento se debe tomar el riesgo de poder validar ideas de negocio, decidir si el concepto es posible y si va a ayudar a tus clientes objetivos. Las  nuevas tecnologías y metodologías, nos permiten construir MVPs más fácil que nunca. Servicios y conceptos como serverless, CI/CD, software libre, puedes crear una aplicación funcional en una semana y tener la posibilidad de iterar rápidamente y entregar producto frecuentemente. Haremos una prueba de concepto utilizando Firebase, Google Build (CI/CD), Vue y Vuetify. 
Resumen (Versión 2)
Haremos una prueba de concepto que permitiría establecer la infraestructura para desarrollar MVPs utilizando Firebase, Google Build (CI/CD) y Vuetify para ello. El propósito no es explicar el concepto de MVP, si no de cómo crear e iterar rápidamente, optimizando el coste lo máximo posible. 

Introducción
En el mundo del emprendimiento se debe tomar el riesgo de poder validar ideas de negocio, decidir si el concepto es posible y si va a ayudar a tus clientes objetivos. Las  nuevas tecnologías y metodologías, nos permiten construir MVPs más fácil que nunca. Servicios y conceptos como serverless, CI/CD, software libre, puedes crear una aplicación funcional en una 1-2 semanas y tener la posibilidad de iterar y entregar producto frecuentemente.
Google cloud ofrece un conjunto de herramientas y servicios que podemos utilizar para crear la infraestructura donde vivirá y evolucionará nuestro producto. 
Firebase (BaaS),  nos permite manejar datos de aplicación y estado desde el front evitando totalmente lógica de servidor. 
Vuetify son una conjunto de componentes de software libre creados con Vue y nos ahorra un trabajo monumental
Google Build nos da la posibilidad de implementar el flujo de integración continua y despliegue (CI/CD), lo que posibilita 
Firebase hosting 
Sobre el Ponente
Andres Jorquera, es desarrollador en Kairós DS. Estudió química en la universidad pero programar es lo que le mola. Su experiencia es en front pero se involucra en las áreas que hagan falta. Ha vivido en Inglaterra y otras partes del mundo trabajando para desarrollar software. Fundador de virtualitour.es. Vive ahora en España buscando nuevos retos. En el último año trabajó en proyectos para Santander, con angular, y algunas entidades financieras en Australia como Greater Bank y ANC utilizando Vue. 

Contenido de la charla
Explicar desde una visión global lo que se va a hacer.
Hacer un indice de las cosas que se verán en la charla.
Temas
Esquematizar la charla
resumen al final con las cosas vistas.

Serverless
Serverless ha tenido varias definiciones, pero por simplicidad podemos decir que son aplicaciones que utilizar proveedores de servicios para manejar lógica del lado del servidor y estado. Este tipo de servicios se ha conocido como BaaS (Backend as a Service). Algunos de estos servicios pudieran ser de Base de Datos como Firebase o de autenticación como AWS cognito. 
Si la lógica ha sido implementada por el desarrollador pero existen en contenedores sin estado, activadas por eventos y efímeras que pudieran morir y revivir por invocación. Se conoce como FaaS. 
Resumen: podemos crear una aplicación con usuarios y lógica de negocio sin tener que ocuparnos de la infraestructura. Todo funciona. Con tener una single page application nos vale y algunos pequeñas funciones del lado del servidor. . 
Catálogo de componentes
Al crear aplicaciones, por lo general programadores se enfrentan a los mismos problemas una y otra vez. Para mitigar esto, se crean librerías para no reinventar la rueda. 
A mayor alto nivel, existen componentes que se crean, testean y tienen un estilo particular. En vez de crearlos, se pueden utilizar componentes ya hechos y que funcionan. 
A través de este enfoque se ahorra un trabajo monumental. 
Resumen: utilizar una plantilla con un catálogo de componentes con un estilo en particular. Material Design o Bootstrap
Frameworks.
Actualmente existen distintas frameworks que permiten y facilitan la creación de aplicaciones, cada una de ellas tiene sus ventajas y desventajas, pero para nuestro propósito queremos crear software rápidamente. Pues la idea es escoger el framework con menor curva de aprendizaje. 
La ganadora es VUE. Ha sido catalogada la framework del 2017, bla bla bla
CI/CD
El MVP trata de testear tu idea e ir iterando sobre la base de las necesidades de cliente, por ello necesitamos formas de iterar software rápidamente y aquí es cuando entra CI/CD. CI habla de integración continua que permite evaluar el producto que no se ha roto y que cumple con los requerimientos de negocio. CD habla de despliegue continuo. Poder iterar y entregar el producto de forma rápida y regular.


Costo inicial
$0

Google y otros servicios ofrecen un límite gratuito en la mayoría de sus servicios en la nube. Una vez que empieces a tener algún costo es porque tienes una cantidad importante de clientes. Para cuando esto pase, habrás cumplido uno de tus objetivos. Validar tu producto. 

Posible caso de ejemplo: Virtualitour
Tal vez sea buena crear una aplicación durante la conferencia. Algo sencillo tipo TODO-LIST que se usa mucho en demos. Este debe estar super pulcro porque no queremos que vaya a fallar durante la presentación. Pensarlo


