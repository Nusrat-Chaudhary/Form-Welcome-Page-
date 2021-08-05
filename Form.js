class Form {

    constructor() {

        this.input = createInput("")
        this.input.position(100, 90);
        this.input.style('background', 'white',);
       this.input.size(200,50)
       this.input.style('font-size', '30px');


        this.button = createButton('Start');
        this.button.position(100, 220);
        this.button.style('background', 'lightgrey');
        this.button.style('font-size', '30px');
        this.button.style('border-radius', '30px')

        this.greeting = createElement('h2');

       
    }
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}


    display() {
background(0)
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

           
        this.name=this.input.value();
            this.greeting.html("Welcome " + this.name)
            this.greeting.position(130, 160)
this.greeting.style('color','white')

        });
    }
}