$('#headerOne').click(() => {
    $('#contentOne').toggle('slow');
});

$('#headerTwo').click(() => {
    $('#contentTwo').toggle('slow');
});

$('#btnOne').click(() => {
    $('#btnOne').css({
        'background-color': 'purple',
        'font-size': '15px',
        color: 'white',
    });
});

$('#btnTwo').click(() => {
    $('#btnTwo').css({
        'background-color': 'yellow',
        'font-size': '10px',
    });
});
