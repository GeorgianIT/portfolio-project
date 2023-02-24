export default function(id) {
    const data = [
    "“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” - George R.R. Martin",
    "Until I feared I would lose it, I never loved to read. One does not love breathing.- Harper Lee",
    "“You can never get a cup of tea large enough or a book long enough to suit me.” - C.S. Lewis",

    ];
    let i = 0;
    setInterval(function(){
        (id).fadeOut(function () {
            (this).html(data[(i = (i + 1) % data.length)]).quote.fadeIn();
        });
    }, 1000)();
}