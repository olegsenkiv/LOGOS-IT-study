let season = +prompt('Введіть число');
switch(season){
    case 1:
    case 2: 
    case 12:
        alert('Winter is now');
        break;
    case 3:
    case 4:
    case 5:
        alert('Spring is now');
        break;
    case 6:
    case 7:
    case 8:
        alert('Summer is now');
        break;
    case 9:
    case 10:
    case 11:
        alert('Autumn is now');
        break;
    default:
        alert('This month is not defined')
        break;
};