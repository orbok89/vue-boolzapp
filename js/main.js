

var app = new Vue ({
    el:'#root',
    data:{
        chat_attiva :"",
        nome_cognome_attivo: "",
        avatar_attivo: "",
        nuovo_messaggio:"",
        contatore:"",
        ricerca_contatto:"",
        display_si:"10",
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods:{
        parlaci(index){
            this.nome_cognome_attivo =this.contacts[index].name;
            this.avatar_attivo=this.contacts[index].avatar;
            this.chat_attiva = this.contacts[index].messages;
            this.contatore=index;
            this.display_si= '10';

            console.log(this.contatore);
        },
        invio_messaggio(index) {
            var today = new Date();

var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var now = date+' '+time;


            
            
            var newmex={
                date: now,
                message: this.nuovo_messaggio,
                status: 'sent'

            }
            console.log(this.contacts[this.contatore].messages);
            this.contacts[this.contatore].messages.push(newmex);
            this.nuovo_messaggio = ""
            setTimeout( this.risposta, 1000)

        },
        risposta(){
            var today = new Date();
            var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            
            var now = date+' '+time;
            var ok={
                date: now,
                message: 'ok',
                status: 'received'

            }
            this.contacts[this.contatore].messages.push(ok);
        },
        filtro(lettere, contatto){
            contatto = contatto.toLowerCase();
            lettere = lettere.toLowerCase();
          
            return contatto.includes(lettere)


        },
        mostra(i){
            this.display_si=i,
            console.log(this.display_si)

            
           
        },
        rimuovi(index){
            this.chat_attiva.splice(index,1);
            this.display_si= '10';
        },
           
       
    }

}

)
