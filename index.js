document.addEventListener('keydown', function(event){

    handleSounds(event.key);

});


function play(element){

    handleSounds(element.id);

}

function handleSounds(position){

    switch (position) {
        case 'first', '1':

            var firstAudio = new Audio('sounds/tom-1.mp3')
            firstAudio.play()

            break;
        case 'second', '2':

            var secondAudio = new Audio('sounds/tom-2.mp3')
            secondAudio.play()

            break;
        case 'third', '3':

            var thirdAudio = new Audio('sounds/tom-3.mp3')
            thirdAudio.play()

            break;
        case 'fourth', '4':

            var fourthAudio = new Audio('sounds/tom-4.mp3')
            fourthAudio.play()

            break;
        case 'fiveth', '5':

            var fivethAudio = new Audio('sounds/crash.mp3')
            fivethAudio.play()

            break;
        case 'sixth', '6':

            var sixthAudio = new Audio('sounds/kick-bass.mp3')
            sixthAudio.play()

            break;
        case 'seventh', '7':

            var seventhAudio = new Audio('sounds/snare.mp3')
            seventhAudio.play()

            break;
        default:
            //console.log('nothing will happen');
    }
}
