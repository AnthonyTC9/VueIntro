new Vue({
    el: '#app',
    data: {
        saludar: 'Hola desde la instancia app',
        numero: 10,
        lista: ['1','2','3','4','5','100'],
        activo: true,
        blog: '<h4>hola mundo </h4>',
        texto: '',
        full_name: '',
        validation_error: '',
        nombre: '',
        text_error: false,
        text_success: false,
        sizetxt: 10,
        font_texto: 10,
    },
    methods:{
        saludando: function() {
            console.log('Saludando desde una funcion');
        },
       /* saludando2: function() {
            console.log(this.texto);
        },
        saludando3: function(saludo) {
            console.log(saludo);
        },*/
        verificarFullName: function(){

            if(this.full_name.length < 4) {
                this.validation_error = 'El nombre no es valido'
            }else {
                this.validation_error = ''
            }
        },
        verificarNombre: function(){
            if(this.nombre === 'tapia'){
                this.text_success = true
                this.text_error = false
            }else{
                this.text_error = true
                this.text_success = false
            }
        },
        cambiarTexto: function(){
            this.font_texto = parseInt(this.sizetxt);
        }
        
    },
});
