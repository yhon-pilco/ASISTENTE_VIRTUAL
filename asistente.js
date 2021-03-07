if (annyang) {

    //Variable para almacenar las voces de nuestro sistema.
    var voices;

    //Inicializamos utter.
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'en-GB';

    //Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    };

    //Definimos los comandos a utilizar.
    var commands = {
        'hola': function () {
            utter.text = 'hola, bienvenido en que te puedo ayudar?';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[6];
            window.speechSynthesis.speak(utter);
        },
        'que es javascript': function () {
            utter.text = 'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript.Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.';
            utter.voice = voices[6];
            window.speechSynthesis.speak(utter);
        },
        'para que sirve jasvascript': function () {
            utter.text = 'JavaScript es un lenguaje de programación que se usa principalmente para la creación e implementación de funciones complejas en páginas web dinámicas. Esto quiere decir que cuando ves animaciones, mapas interactivos o gráficos 2D/3D, es seguro que JavaScript está presente.';
            utter.voice = voices[6];
            window.speechSynthesis.speak(utter);
        },
        'como estas': function () {
            utter.text = 'Muy bien!';
            utter.voice = voices[6];
            window.speechSynthesis.speak(utter);
        },
        'quiero buscar *valor': function (valor) {
            $("#parametro").val(valor);
            window.open('https://www.google.com.sv/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q='+valor+'','_blank');
        },
        //Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
        'cuentame un chiste': function () {
            chistes = ['Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.',
                'Estas obsesionado con la comida!   No se a que te refieres croquetamente.',
                'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
                'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[6];
            window.speechSynthesis.speak(utter);
        }
    };
    //Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);

    //Annyang comienza a escuchar.
    annyang.start({ autoRestart: false, continuous: true });
}